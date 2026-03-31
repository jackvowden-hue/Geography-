import { useState, useRef, useEffect, useCallback } from 'react';
import { mindmapSections } from '../data/mindmap-data';
import {
  ChevronLeft, ChevronRight, ChevronDown, ChevronUp,
  Map, BookOpen, X, Maximize2, Minimize2, FileText,
  ArrowRight, Quote, BarChart2, Link2, Lightbulb
} from 'lucide-react';

// ============================================================
// HELPERS
// ============================================================

/** Get points array from a branch — supports both `points` (string[]) and `notes` ({type,text}[]) formats */
function getPoints(branch) {
  if (branch.points && branch.points.length) return branch.points;
  if (branch.notes && branch.notes.length) return branch.notes.map(n => n.text);
  return [];
}

/** Get pre-classified notes from a branch — avoids re-classifying notes that already have types */
function getClassifiedNotes(branch) {
  if (branch.notes && branch.notes.length) return branch.notes;
  return (branch.points || []).map(p => ({ text: p, type: classifyPoint(p) }));
}

/** Classify a point string into a note type for rich rendering */
function classifyPoint(text) {
  const lower = text.toLowerCase();
  // Stats: starts with numbers, contains percentages, population figures, monetary values
  if (/^(pop:|average|fertility|density|only \d|net |up to |\d[\d,.]*\s*(\/|%|km|people|left|increase|grew|born|trains|miles|home|income))/i.test(text)
    || /\d+%/.test(text) || /£\d/.test(text) || /\d+,\d{3}/.test(text) || /\d+\/\d+/.test(text)
    || /^\d/.test(text)) {
    return 'stat';
  }
  // Evaluation keywords
  if (/evaluat|however|but |although|extent|nonetheless|on the other hand|arguably|debatable|contested|varies|significant|key factor|overall/i.test(lower)) {
    return 'evaluation';
  }
  // Case study references
  if (/cotswold|newham|kingston|winchester|yorkshire|london|pennine|nyM|cbd|cornwall|essex|lyme|glastonbury|bristol|accrington|blackburn|toxteth|dharavi|mumbai|bangalore|lagos|china|india|brazil|usa|eu |un |oecd|imf|world bank/i.test(lower)) {
    return 'casestudy';
  }
  // Links / connections
  if (/link|connect|relate|synoptic|cross-ref|see also|ties to|drives|leads to|causes|consequence|result/i.test(lower)) {
    return 'link';
  }
  return 'argument';
}

/** Wrap text into lines for SVG rendering */
function wrapText(text, maxChars = 18) {
  if (text.includes('\n')) return text.split('\n');
  const words = text.split(' ');
  const lines = [];
  let current = '';
  words.forEach(w => {
    if ((current + ' ' + w).trim().length > maxChars && current) {
      lines.push(current.trim());
      current = w;
    } else {
      current = current ? current + ' ' + w : w;
    }
  });
  if (current) lines.push(current.trim());
  return lines;
}

/** Note type icon */
function NoteIcon({ type, size = 14 }) {
  switch (type) {
    case 'stat': return <BarChart2 size={size} />;
    case 'evaluation': return <Lightbulb size={size} />;
    case 'casestudy': return <FileText size={size} />;
    case 'link': return <Link2 size={size} />;
    case 'argument': return <Quote size={size} />;
    default: return <ArrowRight size={size} />;
  }
}

/** Note type label */
function noteLabel(type) {
  switch (type) {
    case 'stat': return 'STAT';
    case 'evaluation': return 'EVAL';
    case 'casestudy': return 'CASE STUDY';
    case 'link': return 'LINK';
    case 'argument': return 'KEY POINT';
    default: return 'NOTE';
  }
}

// ============================================================
// NOTE RENDERER - renders a single point with type-based styling
// ============================================================
function NoteItem({ text, type, branchColor }) {
  return (
    <div className={`mm-note mm-note--${type}`} style={{ '--branch-color': branchColor }}>
      <span className={`mm-note-badge mm-note-badge--${type}`}>
        <NoteIcon type={type} size={12} />
        {noteLabel(type)}
      </span>
      <span className="mm-note-text">{text}</span>
    </div>
  );
}

// ============================================================
// SVG INTERACTIVE MINDMAP
// ============================================================
function MindmapSVG({ question, activeBranch, onSelectBranch, zoom, pan }) {
  const svgRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const updateSize = () => {
      if (svgRef.current?.parentElement) {
        const rect = svgRef.current.parentElement.getBoundingClientRect();
        setDimensions({
          width: Math.max(rect.width, 600),
          height: Math.max(rect.height, 400),
        });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const { width, height } = dimensions;
  const cx = width / 2;
  const cy = height / 2;
  const branches = question.branches || [];
  const branchCount = branches.length;

  const angleStart = -Math.PI / 2;
  const angleStep = (2 * Math.PI) / Math.max(branchCount, 1);
  const branchRadius = Math.min(width, height) * 0.30;

  const centerLines = (question.center || question.title || '').split('\n');

  // Compute the viewBox based on zoom and pan
  const vbW = width / zoom;
  const vbH = height / zoom;
  const vbX = (width - vbW) / 2 - pan.x / zoom;
  const vbY = (height - vbH) / 2 - pan.y / zoom;

  return (
    <svg
      ref={svgRef}
      viewBox={`${vbX} ${vbY} ${vbW} ${vbH}`}
      className="mindmap-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.18" />
        </filter>
        <filter id="shadow-active">
          <feDropShadow dx="0" dy="3" stdDeviation="8" floodOpacity="0.35" />
        </filter>
        {branches.map((b, i) => (
          <linearGradient key={i} id={`grad-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={b.color} stopOpacity="0.9" />
            <stop offset="100%" stopColor={b.color} stopOpacity="0.4" />
          </linearGradient>
        ))}
        <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--mm-center-glow, rgba(100,100,255,0.15))" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* Background dot pattern */}
      <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="0.7" fill="var(--mm-dot-color, rgba(150,150,180,0.12))" />
      </pattern>
      <rect x={vbX} y={vbY} width={vbW} height={vbH} fill="url(#dots)" />

      {/* Center glow */}
      <circle cx={cx} cy={cy} r={120} fill="url(#center-glow)" />

      {/* Branch connectors and nodes */}
      {branches.map((branch, i) => {
        const angle = angleStart + i * angleStep;
        const bx = cx + Math.cos(angle) * branchRadius;
        const by = cy + Math.sin(angle) * branchRadius;
        const isActive = activeBranch === i;

        // Bezier control point for curved connector
        const midX = cx + Math.cos(angle) * branchRadius * 0.5;
        const midY = cy + Math.sin(angle) * branchRadius * 0.5;
        const ctrlOffset = branchRadius * 0.18;
        const perpAngle = angle + Math.PI / 2;
        const ctrl1x = midX + Math.cos(perpAngle) * ctrlOffset;
        const ctrl1y = midY + Math.sin(perpAngle) * ctrlOffset;

        const branchLines = branch.label ? branch.label.split('\n') : ['Branch'];
        const nodeHeight = branchLines.length > 1 ? 52 : 38;
        const nodeWidth = 152;
        const pointCount = getPoints(branch).length;

        // Point nodes radiate further out
        const pointAngle = angle;
        const points = getPoints(branch);

        return (
          <g key={i} className="mindmap-branch-group">
            {/* Connector line */}
            <path
              d={`M ${cx} ${cy} Q ${ctrl1x} ${ctrl1y} ${bx} ${by}`}
              stroke={branch.color}
              strokeWidth={isActive ? 4 : 2.5}
              fill="none"
              opacity={isActive ? 0.9 : 0.5}
              strokeLinecap="round"
            />

            {/* Point indicator dots along the connector */}
            {!isActive && pointCount > 0 && (
              <text
                x={midX + Math.cos(perpAngle) * 14}
                y={midY + Math.sin(perpAngle) * 14}
                textAnchor="middle"
                fill={branch.color}
                fontSize="9"
                fontWeight="700"
                opacity="0.6"
              >
                {pointCount} pts
              </text>
            )}

            {/* Expanded points radiating outward when active */}
            {isActive && points.map((point, pi) => {
              const spread = Math.min(0.15, 0.8 / points.length);
              const splay = (pi - (points.length - 1) / 2) * spread;
              const pAngle = pointAngle + splay;
              const pointDist = 95 + pi * 24;
              const px = bx + Math.cos(pAngle) * pointDist;
              const py = by + Math.sin(pAngle) * pointDist;
              const connX = bx + Math.cos(pAngle) * (nodeWidth / 2);
              const connY = by + Math.sin(pAngle) * (nodeHeight / 2);

              const textLines = wrapText(point, 30);
              const textAnchor = Math.cos(pAngle) >= 0 ? 'start' : 'end';
              const textOffX = Math.cos(pAngle) >= 0 ? 10 : -10;

              return (
                <g key={pi} className="mm-svg-point" style={{ animationDelay: `${pi * 40}ms` }}>
                  <line
                    x1={connX} y1={connY}
                    x2={px} y2={py}
                    stroke={branch.color}
                    strokeWidth="1.2"
                    opacity="0.3"
                    strokeDasharray="4 3"
                  />
                  <circle cx={px} cy={py} r="4.5" fill={branch.color} opacity="0.8" />
                  {textLines.map((tl, tli) => (
                    <text
                      key={tli}
                      x={px + textOffX}
                      y={py + 4 + tli * 14}
                      textAnchor={textAnchor}
                      fill="var(--mm-text-color, #e0e0e0)"
                      fontSize="10.5"
                      fontFamily="inherit"
                      fontWeight="500"
                    >
                      {tl}
                    </text>
                  ))}
                </g>
              );
            })}

            {/* Branch node (clickable) */}
            <g
              className="mm-branch-clickable"
              onClick={() => onSelectBranch(isActive ? null : i)}
              style={{ cursor: 'pointer' }}
            >
              {/* Pulse ring when active */}
              {isActive && (
                <rect
                  x={bx - nodeWidth / 2 - 4}
                  y={by - nodeHeight / 2 - 4}
                  width={nodeWidth + 8}
                  height={nodeHeight + 8}
                  rx="14"
                  fill="none"
                  stroke={branch.color}
                  strokeWidth="2"
                  opacity="0.4"
                  className="mm-pulse-ring"
                />
              )}
              <rect
                x={bx - nodeWidth / 2}
                y={by - nodeHeight / 2}
                width={nodeWidth}
                height={nodeHeight}
                rx="10"
                fill={branch.color}
                opacity={isActive ? 1 : 0.85}
                filter={isActive ? 'url(#shadow-active)' : 'url(#shadow)'}
              />
              {branchLines.map((line, li) => (
                <text
                  key={li}
                  x={bx}
                  y={by + (branchLines.length > 1 ? (li - 0.5) * 17 + 2 : 5)}
                  textAnchor="middle"
                  fill="white"
                  fontSize="12"
                  fontWeight="700"
                  fontFamily="inherit"
                >
                  {line}
                </text>
              ))}
              {/* Expand indicator */}
              <circle
                cx={bx + nodeWidth / 2 - 14}
                cy={by - nodeHeight / 2 + 12}
                r="8"
                fill="rgba(255,255,255,0.25)"
              />
              <text
                x={bx + nodeWidth / 2 - 14}
                y={by - nodeHeight / 2 + 16}
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="bold"
              >
                {isActive ? '\u2212' : '+'}
              </text>
            </g>
          </g>
        );
      })}

      {/* Center node */}
      <g filter="url(#glow)">
        <circle
          cx={cx} cy={cy} r="65"
          fill="var(--mm-center-bg, #1a1a2e)"
          stroke="var(--mm-center-stroke, #4a4a8a)"
          strokeWidth="2.5"
        />
        <circle
          cx={cx} cy={cy} r="60"
          fill="none"
          stroke="var(--mm-center-stroke, #4a4a8a)"
          strokeWidth="0.5"
          opacity="0.4"
        />
        {centerLines.map((line, li) => (
          <text
            key={li}
            x={cx}
            y={cy + (li - (centerLines.length - 1) / 2) * 16 + 4}
            textAnchor="middle"
            fill="var(--mm-center-text, #fff)"
            fontSize="11.5"
            fontWeight="800"
            fontFamily="inherit"
          >
            {line}
          </text>
        ))}
      </g>

      {/* Instructions hint */}
      <text
        x={vbX + 16}
        y={vbY + vbH - 14}
        fill="var(--mm-text-muted, rgba(200,200,220,0.35))"
        fontSize="10"
        fontFamily="inherit"
      >
        Scroll to zoom | Drag to pan | Click branches to explore
      </text>
    </svg>
  );
}

// ============================================================
// DETAIL PANEL - slides in when a branch is selected in map view
// ============================================================
function DetailPanel({ branch, branchIndex, question, onClose }) {
  const [expandedSubs, setExpandedSubs] = useState({});

  if (!branch) return null;

  const categorized = getClassifiedNotes(branch);

  // Group by type for organized display
  const grouped = {};
  categorized.forEach(item => {
    if (!grouped[item.type]) grouped[item.type] = [];
    grouped[item.type].push(item);
  });

  const typeOrder = ['stat', 'argument', 'casestudy', 'evaluation', 'link'];

  return (
    <div className="mm-detail-panel mm-detail-panel--open">
      <div className="mm-detail-header" style={{ borderBottomColor: branch.color }}>
        <div className="mm-detail-title-row">
          <span className="mm-detail-color-bar" style={{ background: branch.color }} />
          <h3 className="mm-detail-title">{(branch.label || '').replace(/\n/g, ' ')}</h3>
        </div>
        <button className="mm-detail-close" onClick={onClose}>
          <X size={18} />
        </button>
      </div>

      <div className="mm-detail-body">
        {/* Quick stats bar */}
        <div className="mm-detail-stats-bar">
          <span className="mm-detail-stat-chip">
            <BarChart2 size={12} /> {categorized.length} points
          </span>
          {grouped['stat'] && (
            <span className="mm-detail-stat-chip mm-detail-stat-chip--stat">
              {grouped['stat'].length} stats
            </span>
          )}
          {grouped['evaluation'] && (
            <span className="mm-detail-stat-chip mm-detail-stat-chip--eval">
              {grouped['evaluation'].length} eval
            </span>
          )}
        </div>

        {/* All notes in order */}
        <div className="mm-detail-notes">
          <h4 className="mm-detail-section-title">All Points</h4>
          {categorized.map((item, idx) => (
            <NoteItem
              key={idx}
              text={item.text}
              type={item.type}
              branchColor={branch.color}
            />
          ))}
        </div>

        {/* Grouped by type for quick scanning */}
        <div className="mm-detail-grouped">
          <h4 className="mm-detail-section-title">By Category</h4>
          {typeOrder.map(type => {
            if (!grouped[type]) return null;
            return (
              <div key={type} className="mm-detail-type-group">
                <button
                  className="mm-detail-type-header"
                  onClick={() => setExpandedSubs(prev => ({ ...prev, [type]: !prev[type] }))}
                >
                  <span className={`mm-note-badge mm-note-badge--${type}`}>
                    <NoteIcon type={type} size={12} />
                    {noteLabel(type)} ({grouped[type].length})
                  </span>
                  {expandedSubs[type] ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
                {expandedSubs[type] && (
                  <div className="mm-detail-type-items">
                    {grouped[type].map((item, idx) => (
                      <div key={idx} className={`mm-note mm-note--${item.type}`} style={{ '--branch-color': branch.color }}>
                        <span className="mm-note-text">{item.text}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Connection to other branches hint */}
        <div className="mm-detail-connections">
          <h4 className="mm-detail-section-title">
            <Link2 size={14} /> Related Branches
          </h4>
          <div className="mm-detail-connection-chips">
            {(question.branches || []).map((b, i) => {
              if (i === branchIndex) return null;
              return (
                <span key={i} className="mm-detail-connection-chip" style={{ borderColor: b.color, color: b.color }}>
                  {(b.label || '').replace(/\n/g, ' ')}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// FULL NOTES VIEW - A3 revision sheet layout
// ============================================================
function NotesView({ question, sectionColor }) {
  const [expandedBranches, setExpandedBranches] = useState(
    () => (question.branches || []).reduce((acc, _, i) => ({ ...acc, [i]: true }), {})
  );

  const toggleBranch = (idx) => {
    setExpandedBranches(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const expandAll = () => {
    setExpandedBranches((question.branches || []).reduce((acc, _, i) => ({ ...acc, [i]: true }), {}));
  };

  const collapseAll = () => {
    setExpandedBranches({});
  };

  return (
    <div className="mm-notes-view">
      {/* Hero question box */}
      <div className="mm-notes-hero" style={{ '--hero-color': sectionColor }}>
        <span className="mm-notes-hero-badge">
          Q{question.num} | {question.marks} marks | {question.title}
        </span>
        <h2 className="mm-notes-hero-question">"{question.question}"</h2>
        <div className="mm-notes-hero-actions">
          <button className="mm-notes-expand-btn" onClick={expandAll}>Expand All</button>
          <button className="mm-notes-expand-btn" onClick={collapseAll}>Collapse All</button>
        </div>
      </div>

      {/* Branch sections */}
      <div className="mm-notes-sections">
        {(question.branches || []).map((branch, i) => {
          const isOpen = expandedBranches[i];
          const points = getPoints(branch);
          const categorized = getClassifiedNotes(branch);

          return (
            <div key={i} className={`mm-notes-section ${isOpen ? 'mm-notes-section--open' : ''}`}>
              <button
                className="mm-notes-header"
                onClick={() => toggleBranch(i)}
                style={{ '--branch-color': branch.color }}
              >
                <span className="mm-notes-header-color" style={{ background: branch.color }} />
                <span className="mm-notes-header-label">
                  {(branch.label || '').replace(/\n/g, ' ')}
                </span>
                <span className="mm-notes-header-count">{points.length} points</span>
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {isOpen && (
                <div className="mm-notes-content">
                  {categorized.map((item, idx) => (
                    <NoteItem
                      key={idx}
                      text={item.text}
                      type={item.type}
                      branchColor={branch.color}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary footer */}
      <div className="mm-notes-summary">
        <div className="mm-notes-summary-title">Quick Reference</div>
        <div className="mm-notes-summary-grid">
          {(question.branches || []).map((branch, i) => {
            const notes = getClassifiedNotes(branch);
            const statCount = notes.filter(n => n.type === 'stat').length;
            return (
              <div key={i} className="mm-notes-summary-card" style={{ borderTopColor: branch.color }}>
                <strong>{(branch.label || '').replace(/\n/g, ' ')}</strong>
                <span>{notes.length} pts | {statCount} stats</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// MAIN MINDMAP VIEW
// ============================================================
export default function MindmapView({ navigateTo }) {
  const [activeSection, setActiveSection] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [viewMode, setViewMode] = useState('map'); // 'map' or 'notes'
  const [fullscreen, setFullscreen] = useState(false);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Zoom & pan state
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [activeBranch, setActiveBranch] = useState(null);

  const section = mindmapSections[activeSection];
  const question = section?.questions[activeQuestion];

  // Reset zoom/pan/selection on question change
  useEffect(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setActiveBranch(null);
  }, [activeSection, activeQuestion]);

  // Mouse wheel zoom
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.92 : 1.08;
    setZoom(z => Math.min(Math.max(z * delta, 0.3), 3));
  }, []);

  // Attach wheel listener with passive: false
  useEffect(() => {
    const el = canvasRef.current;
    if (!el || viewMode !== 'map') return;
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [handleWheel, viewMode]);

  // Mouse drag pan
  const handleMouseDown = useCallback((e) => {
    if (e.target.closest('.mm-branch-clickable') || e.target.closest('.mm-detail-panel')) return;
    setDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  }, [pan]);

  const handleMouseMove = useCallback((e) => {
    if (!dragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  }, [dragging, dragStart]);

  const handleMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  // Touch support for mobile pan
  const touchRef = useRef(null);
  const handleTouchStart = useCallback((e) => {
    if (e.target.closest('.mm-branch-clickable') || e.target.closest('.mm-detail-panel')) return;
    const touch = e.touches[0];
    touchRef.current = { x: touch.clientX - pan.x, y: touch.clientY - pan.y };
  }, [pan]);

  const handleTouchMove = useCallback((e) => {
    if (!touchRef.current) return;
    const touch = e.touches[0];
    setPan({
      x: touch.clientX - touchRef.current.x,
      y: touch.clientY - touchRef.current.y,
    });
  }, []);

  const handleTouchEnd = useCallback(() => {
    touchRef.current = null;
  }, []);

  // Navigation
  const nextQ = useCallback(() => {
    if (activeQuestion < section.questions.length - 1) {
      setActiveQuestion(activeQuestion + 1);
    } else if (activeSection < mindmapSections.length - 1) {
      setActiveSection(activeSection + 1);
      setActiveQuestion(0);
    }
  }, [activeQuestion, activeSection, section]);

  const prevQ = useCallback(() => {
    if (activeQuestion > 0) {
      setActiveQuestion(activeQuestion - 1);
    } else if (activeSection > 0) {
      setActiveSection(activeSection - 1);
      setActiveQuestion(mindmapSections[activeSection - 1].questions.length - 1);
    }
  }, [activeQuestion, activeSection]);

  const goToQuestion = (secIdx, qIdx) => {
    setActiveSection(secIdx);
    setActiveQuestion(qIdx);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') nextQ();
      if (e.key === 'ArrowLeft') prevQ();
      if (e.key === 'Escape') {
        if (activeBranch !== null) setActiveBranch(null);
        else if (fullscreen) setFullscreen(false);
      }
      // Number keys to select branches
      if (e.key >= '1' && e.key <= '9') {
        const idx = parseInt(e.key) - 1;
        if (question && question.branches && idx < question.branches.length) {
          setActiveBranch(prev => prev === idx ? null : idx);
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [nextQ, prevQ, activeBranch, fullscreen, question]);

  const toggleFullscreen = () => {
    if (!fullscreen && containerRef.current?.requestFullscreen) {
      containerRef.current.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    setFullscreen(!fullscreen);
  };

  // Reset zoom
  const resetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Global question index for progress
  let globalIdx = 0;
  let currentGlobal = 0;
  let totalQuestions = 0;
  mindmapSections.forEach((sec, si) => {
    sec.questions.forEach((_, qi) => {
      if (si === activeSection && qi === activeQuestion) currentGlobal = globalIdx;
      globalIdx++;
      totalQuestions++;
    });
  });

  if (!question) return null;

  const selectedBranch = activeBranch !== null ? (question.branches || [])[activeBranch] : null;

  return (
    <div className={`mindmap-view ${fullscreen ? 'mindmap-view--fullscreen' : ''}`} ref={containerRef}>
      {/* Header */}
      <div className="mm-header">
        <div className="mm-header-left">
          <h1 className="mm-title">
            <Map size={22} />
            Essay Mindmaps
          </h1>
          <span className="mm-counter">{currentGlobal + 1} / {totalQuestions}</span>
        </div>
        <div className="mm-header-actions">
          <button
            className={`mm-mode-btn ${viewMode === 'map' ? 'active' : ''}`}
            onClick={() => { setViewMode('map'); setActiveBranch(null); }}
            title="Interactive Map"
          >
            <Map size={16} /> Map
          </button>
          <button
            className={`mm-mode-btn ${viewMode === 'notes' ? 'active' : ''}`}
            onClick={() => setViewMode('notes')}
            title="Full Notes View"
          >
            <BookOpen size={16} /> Notes
          </button>
          <button className="mm-mode-btn" onClick={toggleFullscreen} title="Toggle fullscreen">
            {fullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
      </div>

      {/* Section Tabs */}
      <div className="mm-section-tabs">
        {mindmapSections.map((sec, si) => (
          <button
            key={sec.id}
            className={`mm-section-tab ${si === activeSection ? 'active' : ''}`}
            style={{
              '--tab-color': sec.color,
              borderBottomColor: si === activeSection ? sec.color : 'transparent',
            }}
            onClick={() => { setActiveSection(si); setActiveQuestion(0); }}
          >
            {sec.title}
            <span className="mm-tab-count">{sec.questions.length}</span>
          </button>
        ))}
      </div>

      {/* Question Selector Pills */}
      <div className="mm-question-selector">
        <div className="mm-question-pills">
          {section.questions.map((q, qi) => (
            <button
              key={q.id}
              className={`mm-question-pill ${qi === activeQuestion ? 'active' : ''}`}
              style={{
                '--pill-color': section.color,
                background: qi === activeQuestion ? section.color : 'transparent',
              }}
              onClick={() => goToQuestion(activeSection, qi)}
              title={q.title}
            >
              {q.num}
            </button>
          ))}
        </div>
      </div>

      {/* Question Title Bar */}
      <div className="mm-question-bar" style={{ borderLeftColor: section.color }}>
        <div className="mm-question-info">
          <span className="mm-question-num" style={{ color: section.color }}>
            Q{question.num} — {question.marks} marks
          </span>
          <h2 className="mm-question-text">"{question.question}"</h2>
          <span className="mm-question-topic">{question.title}</span>
        </div>
        <div className="mm-question-controls">
          {viewMode === 'map' && (
            <>
              <button className="mm-expand-btn" onClick={resetView} title="Reset zoom and pan">
                <Maximize2 size={14} /> Reset View
              </button>
              <span className="mm-zoom-indicator">{Math.round(zoom * 100)}%</span>
            </>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      {viewMode === 'map' ? (
        <div
          className={`mm-canvas-wrapper ${dragging ? 'mm-canvas-wrapper--dragging' : ''} ${activeBranch !== null ? 'mm-canvas-wrapper--panel-open' : ''}`}
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <MindmapSVG
            question={question}
            activeBranch={activeBranch}
            onSelectBranch={setActiveBranch}
            zoom={zoom}
            pan={pan}
          />

          {/* Detail panel overlay */}
          {selectedBranch && (
            <DetailPanel
              branch={selectedBranch}
              branchIndex={activeBranch}
              question={question}
              onClose={() => setActiveBranch(null)}
            />
          )}

          {/* Branch quick-select bar at bottom of canvas */}
          <div className="mm-branch-bar">
            {(question.branches || []).map((b, i) => (
              <button
                key={i}
                className={`mm-branch-chip ${activeBranch === i ? 'mm-branch-chip--active' : ''}`}
                style={{ '--chip-color': b.color, background: activeBranch === i ? b.color : 'transparent' }}
                onClick={() => setActiveBranch(activeBranch === i ? null : i)}
                title={(b.label || '').replace(/\n/g, ' ')}
              >
                <span className="mm-branch-chip-dot" style={{ background: b.color }} />
                <span className="mm-branch-chip-label">{(b.label || '').replace(/\n/g, ' ')}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mm-canvas-wrapper">
          <NotesView question={question} sectionColor={section.color} />
        </div>
      )}

      {/* Navigation Footer */}
      <div className="mm-nav-footer">
        <button
          className="mm-nav-btn"
          onClick={prevQ}
          disabled={activeSection === 0 && activeQuestion === 0}
        >
          <ChevronLeft size={18} /> Previous
        </button>
        <div className="mm-progress-bar">
          <div
            className="mm-progress-fill"
            style={{
              width: `${((currentGlobal + 1) / totalQuestions) * 100}%`,
              background: section.color,
            }}
          />
        </div>
        <button
          className="mm-nav-btn"
          onClick={nextQ}
          disabled={
            activeSection === mindmapSections.length - 1 &&
            activeQuestion === section.questions.length - 1
          }
        >
          Next <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
