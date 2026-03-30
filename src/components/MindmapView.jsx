import { useState, useRef, useEffect, useCallback } from 'react';
import { mindmapSections } from '../data/mindmap-data';
import {
  ChevronLeft, ChevronRight, ChevronDown, ChevronUp,
  Map, Maximize2, Minimize2, BookOpen, X, Printer
} from 'lucide-react';

// ============================================================
// SVG MINDMAP RENDERER
// ============================================================
function MindmapSVG({ question, expanded, onToggleBranch }) {
  const svgRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const updateSize = () => {
      if (svgRef.current?.parentElement) {
        const rect = svgRef.current.parentElement.getBoundingClientRect();
        setDimensions({
          width: Math.max(rect.width, 800),
          height: Math.max(rect.height, 600),
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
  const branches = question.branches;
  const branchCount = branches.length;

  // Layout branches in a radial pattern
  const angleStart = -Math.PI / 2;
  const angleStep = (2 * Math.PI) / branchCount;
  const branchRadius = Math.min(width, height) * 0.32;
  const pointSpacing = 26;

  // Wrap text to lines
  const wrapText = (text, maxChars = 18) => {
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
  };

  const centerLines = question.center.split('\n');

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${width} ${height}`}
      className="mindmap-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
        </filter>
        {branches.map((b, i) => (
          <linearGradient key={i} id={`grad-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={b.color} stopOpacity="0.9" />
            <stop offset="100%" stopColor={b.color} stopOpacity="0.5" />
          </linearGradient>
        ))}
      </defs>

      {/* Background pattern */}
      <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="0.8" fill="var(--mm-dot-color, rgba(150,150,180,0.15))" />
      </pattern>
      <rect width={width} height={height} fill="url(#dots)" rx="12" />

      {/* Branches */}
      {branches.map((branch, i) => {
        const angle = angleStart + i * angleStep;
        const bx = cx + Math.cos(angle) * branchRadius;
        const by = cy + Math.sin(angle) * branchRadius;
        const isExpanded = expanded.includes(i);

        // Curved connector line from center to branch
        const midX = cx + Math.cos(angle) * branchRadius * 0.5;
        const midY = cy + Math.sin(angle) * branchRadius * 0.5;
        const ctrlOffset = branchRadius * 0.15;
        const perpAngle = angle + Math.PI / 2;
        const ctrl1x = midX + Math.cos(perpAngle) * ctrlOffset;
        const ctrl1y = midY + Math.sin(perpAngle) * ctrlOffset;

        // Point layout - extend outward from the branch node
        const pointAngle = angle;
        const points = branch.points;
        const branchLines = branch.label.split('\n');

        return (
          <g key={i} className="mindmap-branch-group">
            {/* Connector line */}
            <path
              d={`M ${cx} ${cy} Q ${ctrl1x} ${ctrl1y} ${bx} ${by}`}
              stroke={branch.color}
              strokeWidth="3"
              fill="none"
              opacity="0.6"
              strokeDasharray={isExpanded ? 'none' : '8 4'}
            />

            {/* Branch node */}
            <g
              className="mindmap-branch-node"
              onClick={() => onToggleBranch(i)}
              style={{ cursor: 'pointer' }}
            >
              <rect
                x={bx - 72}
                y={by - 22}
                width="144"
                height={branchLines.length > 1 ? 50 : 38}
                rx="10"
                fill={branch.color}
                opacity="0.9"
                filter="url(#shadow)"
              />
              {branchLines.map((line, li) => (
                <text
                  key={li}
                  x={bx}
                  y={by + (branchLines.length > 1 ? li * 18 - 4 : 5)}
                  textAnchor="middle"
                  fill="white"
                  fontSize="12"
                  fontWeight="700"
                  fontFamily="inherit"
                >
                  {line}
                </text>
              ))}
              {/* Expand/collapse indicator */}
              <text
                x={bx + 58}
                y={by + (branchLines.length > 1 ? 12 : 5)}
                textAnchor="middle"
                fill="white"
                fontSize="10"
                opacity="0.7"
              >
                {isExpanded ? '−' : '+'}
              </text>
            </g>

            {/* Points (when expanded) */}
            {isExpanded && points.map((point, pi) => {
              const pointDist = 90 + pi * pointSpacing;
              const splay = (pi - (points.length - 1) / 2) * 0.12;
              const pAngle = pointAngle + splay;
              const px = bx + Math.cos(pAngle) * pointDist;
              const py = by + Math.sin(pAngle) * pointDist;
              const connX = bx + Math.cos(pAngle) * 72;
              const connY = by + Math.sin(pAngle) * (branchLines.length > 1 ? 25 : 19);

              const textLines = wrapText(point, 32);
              const textAnchor = Math.cos(pAngle) >= 0 ? 'start' : 'end';
              const textOffX = Math.cos(pAngle) >= 0 ? 8 : -8;

              return (
                <g key={pi} className="mindmap-point" style={{ animationDelay: `${pi * 50}ms` }}>
                  <line
                    x1={connX}
                    y1={connY}
                    x2={px}
                    y2={py}
                    stroke={branch.color}
                    strokeWidth="1.5"
                    opacity="0.35"
                  />
                  <circle cx={px} cy={py} r="4" fill={branch.color} opacity="0.7" />
                  {textLines.map((tl, tli) => (
                    <text
                      key={tli}
                      x={px + textOffX}
                      y={py + 4 + tli * 15}
                      textAnchor={textAnchor}
                      fill="var(--mm-text-color, #333)"
                      fontSize="11"
                      fontFamily="inherit"
                    >
                      {tl}
                    </text>
                  ))}
                </g>
              );
            })}
          </g>
        );
      })}

      {/* Center node */}
      <g filter="url(#glow)">
        <circle cx={cx} cy={cy} r="62" fill="var(--mm-center-bg, #1a1a2e)" stroke="var(--mm-center-stroke, #4a4a8a)" strokeWidth="2" />
        {centerLines.map((line, li) => (
          <text
            key={li}
            x={cx}
            y={cy + (li - (centerLines.length - 1) / 2) * 16 + 4}
            textAnchor="middle"
            fill="var(--mm-center-text, #fff)"
            fontSize="12"
            fontWeight="800"
            fontFamily="inherit"
          >
            {line}
          </text>
        ))}
      </g>
    </svg>
  );
}

// ============================================================
// CARD LIST VIEW (fallback / mobile)
// ============================================================
function MindmapCards({ question }) {
  const [openBranch, setOpenBranch] = useState(null);

  return (
    <div className="mm-cards">
      <div className="mm-cards-center">
        <h3>{question.center.replace(/\n/g, ' ')}</h3>
      </div>
      {question.branches.map((branch, i) => {
        const isOpen = openBranch === i;
        return (
          <div
            key={i}
            className={`mm-card ${isOpen ? 'mm-card--open' : ''}`}
            style={{ borderLeftColor: branch.color }}
          >
            <button
              className="mm-card-header"
              onClick={() => setOpenBranch(isOpen ? null : i)}
              style={{ color: branch.color }}
            >
              <span className="mm-card-dot" style={{ background: branch.color }} />
              <span>{branch.label.replace(/\n/g, ' ')}</span>
              {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {isOpen && (
              <ul className="mm-card-points">
                {branch.points.map((p, pi) => (
                  <li key={pi}>
                    <span className="mm-card-bullet" style={{ background: branch.color }} />
                    {p}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ============================================================
// MAIN MINDMAP VIEW
// ============================================================
export default function MindmapView({ navigateTo }) {
  const [activeSection, setActiveSection] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [expanded, setExpanded] = useState([]);
  const [viewMode, setViewMode] = useState('map'); // 'map' or 'cards'
  const [fullscreen, setFullscreen] = useState(false);
  const containerRef = useRef(null);

  const section = mindmapSections[activeSection];
  const question = section.questions[activeQuestion];

  const toggleBranch = useCallback((idx) => {
    setExpanded(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  }, []);

  const expandAll = () => setExpanded(question.branches.map((_, i) => i));
  const collapseAll = () => setExpanded([]);

  const nextQ = () => {
    setExpanded([]);
    if (activeQuestion < section.questions.length - 1) {
      setActiveQuestion(activeQuestion + 1);
    } else if (activeSection < mindmapSections.length - 1) {
      setActiveSection(activeSection + 1);
      setActiveQuestion(0);
    }
  };

  const prevQ = () => {
    setExpanded([]);
    if (activeQuestion > 0) {
      setActiveQuestion(activeQuestion - 1);
    } else if (activeSection > 0) {
      setActiveSection(activeSection - 1);
      setActiveQuestion(mindmapSections[activeSection - 1].questions.length - 1);
    }
  };

  const goToQuestion = (secIdx, qIdx) => {
    setActiveSection(secIdx);
    setActiveQuestion(qIdx);
    setExpanded([]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') nextQ();
      if (e.key === 'ArrowLeft') prevQ();
      if (e.key === 'Escape' && fullscreen) setFullscreen(false);
      if (e.key === 'e') expandAll();
      if (e.key === 'c') collapseAll();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  const toggleFullscreen = () => {
    if (!fullscreen && containerRef.current?.requestFullscreen) {
      containerRef.current.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    setFullscreen(!fullscreen);
  };

  // Total question index
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
            onClick={() => setViewMode('map')}
            title="Map view"
          >
            <Map size={16} /> Map
          </button>
          <button
            className={`mm-mode-btn ${viewMode === 'cards' ? 'active' : ''}`}
            onClick={() => setViewMode('cards')}
            title="Card view"
          >
            <BookOpen size={16} /> Cards
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
            onClick={() => { setActiveSection(si); setActiveQuestion(0); setExpanded([]); }}
          >
            {sec.title}
            <span className="mm-tab-count">{sec.questions.length}</span>
          </button>
        ))}
      </div>

      {/* Question Selector */}
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
          <button className="mm-expand-btn" onClick={expandAll}>Expand All</button>
          <button className="mm-expand-btn" onClick={collapseAll}>Collapse All</button>
        </div>
      </div>

      {/* Mindmap Area */}
      <div className="mm-canvas-wrapper">
        {viewMode === 'map' ? (
          <MindmapSVG
            question={question}
            expanded={expanded}
            onToggleBranch={toggleBranch}
          />
        ) : (
          <MindmapCards question={question} />
        )}
      </div>

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
