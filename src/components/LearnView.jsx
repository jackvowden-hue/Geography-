import { useState, useMemo, useCallback, useEffect } from 'react';
import { addXP, XP_ACTIONS } from '../App';
import {
  ChevronRight, Check, X, Eye, EyeOff, Zap, Trophy,
  BookOpen, Brain, ArrowRight, RotateCcw, Sparkles, Target,
  Star, TrendingUp, Award, Layers, Hash, BarChart3,
  CheckCircle, XCircle, ArrowUpDown, Lightbulb, ListOrdered,
  HelpCircle, FileText, MapPin, Calculator, MessageSquare
} from 'lucide-react';

// ============================================================
// HELPERS
// ============================================================
const ACCENT_COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6', '#ef4444', '#06b6d4', '#ec4899', '#f97316'];

function pickAccent(index) {
  return ACCENT_COLORS[index % ACCENT_COLORS.length];
}

const CATEGORY_TAGS = [
  { label: 'Case Study', keywords: ['case study', 'example', 'e.g.', 'such as', 'for instance'], icon: MapPin, color: '#8b5cf6' },
  { label: 'Process', keywords: ['process', 'stage', 'step', 'cycle', 'sequence', 'formation', 'how'], icon: ListOrdered, color: '#3b82f6' },
  { label: 'Definition', keywords: ['defined as', 'refers to', 'is a', 'known as', 'meaning'], icon: BookOpen, color: '#10b981' },
  { label: 'Data', keywords: ['%', 'km', 'million', 'billion', 'approximately', 'estimated', 'rate', 'per year', 'temperature', 'depth'], icon: Calculator, color: '#f59e0b' },
  { label: 'Evaluation', keywords: ['however', 'although', 'debate', 'argue', 'synoptic', 'link', 'criticis', 'advantage', 'disadvantage', 'exam tip'], icon: MessageSquare, color: '#ef4444' },
];

function detectCategory(noteText) {
  const lower = noteText.toLowerCase();
  for (const cat of CATEGORY_TAGS) {
    if (cat.keywords.some(kw => lower.includes(kw))) return cat;
  }
  return { label: 'Study Notes', icon: FileText, color: '#64748b' };
}

function hasKeyPoint(noteText) {
  const lower = noteText.toLowerCase();
  return /\d+%|\d+\s*(km|m|cm|mm|billion|million|°c|g\/cm)|\bapproximately\b|\bestimated\b/.test(lower);
}

function extractKeyPoint(noteText) {
  // Try to find a sentence with key data
  const sentences = noteText.split(/\.\s+/);
  for (const s of sentences) {
    if (/\d+%|\d+\s*(km|m|cm|mm|billion|million|°c|g\/cm)/.test(s.toLowerCase())) {
      return s.trim().replace(/\.$/, '') + '.';
    }
  }
  return null;
}

// Generate a false statement by altering a true one
function generateFalseStatement(trueNote, keyTerms) {
  // Strategy: swap a number, or swap a key term name
  let altered = trueNote;
  // Try swapping a number
  const numMatch = trueNote.match(/(\d{1,3}(?:,\d{3})*(?:\.\d+)?)/);
  if (numMatch) {
    const orig = parseFloat(numMatch[1].replace(/,/g, ''));
    const fakeNum = orig > 10 ? Math.round(orig * (Math.random() > 0.5 ? 1.7 : 0.4)) : Math.round(orig * 3);
    altered = trueNote.replace(numMatch[1], fakeNum.toLocaleString());
    return altered.length > 200 ? altered.substring(0, 200) + '...' : altered;
  }
  // Try swapping a key term
  if (keyTerms.length >= 2) {
    const t1 = keyTerms[0].term;
    const t2 = keyTerms[Math.min(1, keyTerms.length - 1)].term;
    if (trueNote.includes(t1)) {
      altered = trueNote.replace(t1, t2);
      return altered.length > 200 ? altered.substring(0, 200) + '...' : altered;
    }
  }
  return null;
}

// Truncate text for display
function truncate(text, maxLen = 180) {
  if (text.length <= maxLen) return text;
  return text.substring(0, maxLen).replace(/\s+\S*$/, '') + '...';
}

// Encouraging messages
const ENCOURAGEMENTS = [
  "You're crushing it!", "Keep up the momentum!", "Great progress so far!",
  "You're building a strong foundation!", "Nearly there, keep going!",
  "Solid work!", "Your knowledge is growing!", "Stay focused, you've got this!"
];

function randomEncouragement() {
  return ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)];
}

// ============================================================
// SVG PROGRESS RING COMPONENT
// ============================================================
function ProgressRing({ percent, size = 64, strokeWidth = 5, color, children }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="learn-progress-ring" style={{ width: size, height: size, position: 'relative' }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke="var(--border)" strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke={color || 'var(--topic-color, var(--accent))'}
          strokeWidth={strokeWidth} strokeLinecap="round"
          strokeDasharray={circumference} strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.8s ease' }}
        />
      </svg>
      {children && (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          fontSize: size * 0.22, fontWeight: 800, color: color || 'var(--topic-color)'
        }}>
          {children}
        </div>
      )}
    </div>
  );
}

// ============================================================
// CONFETTI ANIMATION (CSS-only scattered dots)
// ============================================================
function ConfettiEffect() {
  const dots = useMemo(() => {
    const colors = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6', '#ef4444', '#ec4899', '#06b6d4', '#f97316'];
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
      color: colors[i % colors.length],
      size: 4 + Math.random() * 6,
      shape: Math.random() > 0.5 ? '50%' : '2px',
    }));
  }, []);

  return (
    <div className="learn-confetti-container">
      {dots.map(d => (
        <div
          key={d.id}
          className="learn-confetti-dot"
          style={{
            left: `${d.left}%`,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
            background: d.color,
            width: d.size,
            height: d.size,
            borderRadius: d.shape,
          }}
        />
      ))}
    </div>
  );
}

// ============================================================
// SCREEN GENERATION
// ============================================================
function generateScreens(topic, sections) {
  const screens = [];
  let globalContentCount = 0;
  const interactiveTypes = ['true-false', 'match-terms', 'sort-order', 'fill-blank'];
  let interactiveRotation = 0;

  sections.forEach((section, sectionIdx) => {
    // Section intro
    screens.push({ type: 'section-intro', section, sectionIdx, totalSections: sections.length });

    // Key concept screens for top 3 key terms (interspersed)
    const topTerms = section.keyTerms.slice(0, 4);
    let topTermIndex = 0;

    // Group notes into content screens (2 per screen)
    const noteChunks = [];
    for (let i = 0; i < section.notes.length; i += 2) {
      noteChunks.push(section.notes.slice(i, i + 2));
    }

    let screensSinceSummary = 0;
    let contentScreenIndex = 0;

    noteChunks.forEach((chunk, ci) => {
      // Insert key-concept before some content screens
      if (topTermIndex < topTerms.length && ci % 2 === 0 && ci < noteChunks.length - 1) {
        screens.push({
          type: 'key-concept',
          term: topTerms[topTermIndex],
          section,
          conceptIndex: topTermIndex,
          totalConcepts: topTerms.length,
        });
        topTermIndex++;
        screensSinceSummary++;
        globalContentCount++;
      }

      // Content screen with additional metadata
      screens.push({
        type: 'content',
        notes: chunk,
        section,
        contentIndex: contentScreenIndex,
        totalContentInSection: noteChunks.length,
        globalNoteIndex: globalContentCount,
        accentColor: pickAccent(globalContentCount),
      });
      contentScreenIndex++;
      globalContentCount++;
      screensSinceSummary++;

      // After every 2 content screens, add an interactive screen
      if (ci % 2 === 1 || ci === noteChunks.length - 1) {
        const iType = interactiveTypes[interactiveRotation % interactiveTypes.length];
        interactiveRotation++;

        if (iType === 'true-false') {
          // Generate a true/false question from a note
          const noteForTF = chunk[0];
          if (noteForTF && noteForTF.length > 30) {
            const isTrue = Math.random() > 0.4;
            let statement, answer, explanation;
            if (isTrue) {
              statement = truncate(noteForTF);
              answer = true;
              explanation = 'This statement is directly from your study notes.';
            } else {
              const falseVersion = generateFalseStatement(noteForTF, section.keyTerms);
              if (falseVersion) {
                statement = truncate(falseVersion);
                answer = false;
                explanation = 'The original fact has been altered. Review the correct version in your notes.';
              } else {
                statement = truncate(noteForTF);
                answer = true;
                explanation = 'This statement is directly from your study notes.';
              }
            }
            screens.push({ type: 'true-false', statement, answer, explanation, section });
            screensSinceSummary++;
          }
        } else if (iType === 'match-terms') {
          // Match terms: need at least 4 key terms
          if (section.keyTerms.length >= 4) {
            const matchTerms = section.keyTerms.slice(0, 4).map(kt => ({
              term: kt.term,
              def: kt.def.length > 80 ? kt.def.substring(0, 80).replace(/\s+\S*$/, '') + '...' : kt.def,
            }));
            screens.push({ type: 'match-terms', terms: matchTerms, section });
            screensSinceSummary++;
          }
        } else if (iType === 'sort-order') {
          // Sort order: try to find process-like notes or use key terms
          const processNotes = section.notes.filter(n => {
            const lower = n.toLowerCase();
            return lower.includes('(1)') || lower.includes('(2)') || lower.includes('stage') ||
              lower.includes('first') || lower.includes('step');
          });
          if (processNotes.length > 0) {
            // Extract numbered items from a process note
            const pNote = processNotes[0];
            const items = [];
            const matches = pNote.match(/\(\d\)\s*([^(]+?)(?=\(\d\)|$)/g);
            if (matches && matches.length >= 3) {
              matches.slice(0, 4).forEach(m => {
                const cleaned = m.replace(/^\(\d\)\s*/, '').trim();
                items.push(cleaned.length > 60 ? cleaned.substring(0, 60) + '...' : cleaned);
              });
            }
            if (items.length >= 3) {
              screens.push({
                type: 'sort-order',
                items: items,
                correctOrder: [...items],
                prompt: 'Arrange these in the correct order:',
                section,
              });
              screensSinceSummary++;
            }
          }
          // If we couldn't build a sort-order, fall back to term-recall
          if (screens[screens.length - 1]?.type !== 'sort-order') {
            if (section.keyTerms[ci]) {
              screens.push({ type: 'term-recall', term: section.keyTerms[ci], section });
              screensSinceSummary++;
            }
          }
        } else {
          // fill-blank
          const noteForBlank = chunk[0];
          const matchingTerm = section.keyTerms.find(kt => noteForBlank.toLowerCase().includes(kt.term.toLowerCase()));
          if (matchingTerm) {
            const otherTerms = section.keyTerms.filter(kt => kt.term !== matchingTerm.term).slice(0, 3).map(kt => kt.term);
            if (otherTerms.length >= 3) {
              screens.push({
                type: 'fill-blank',
                note: noteForBlank,
                answer: matchingTerm.term,
                options: [...otherTerms, matchingTerm.term].sort(() => Math.random() - 0.5),
                section
              });
              screensSinceSummary++;
            }
          }
        }

        // Also add term-recall for variety
        if (section.keyTerms[ci] && ci % 3 === 0) {
          screens.push({ type: 'term-recall', term: section.keyTerms[ci], section });
          screensSinceSummary++;
        }
      }

      // Summary screen after every 6-8 content/interactive screens
      if (screensSinceSummary >= 6) {
        const coveredTerms = topTerms.slice(0, topTermIndex);
        screens.push({
          type: 'summary',
          section,
          conceptsCovered: topTermIndex,
          totalConcepts: topTerms.length,
          sectionIdx,
        });
        screensSinceSummary = 0;
      }
    });

    // Remaining key concepts that weren't interspersed
    while (topTermIndex < topTerms.length) {
      screens.push({
        type: 'key-concept',
        term: topTerms[topTermIndex],
        section,
        conceptIndex: topTermIndex,
        totalConcepts: topTerms.length,
      });
      topTermIndex++;
    }

    // Section-level quiz questions (pick up to 4)
    const sectionQuizzes = (section.quiz || []).slice(0, 4);
    sectionQuizzes.forEach(q => {
      screens.push({ type: 'quiz', question: q, section });
    });

    // Section complete screen
    screens.push({
      type: 'section-complete',
      section,
      topTerms: topTerms.slice(0, 3),
    });
  });

  screens.push({ type: 'topic-complete' });
  return screens;
}

// ============================================================
// SECTION PICKER SCREEN
// ============================================================
function SectionPickerScreen({ topic, onStart, topicColor }) {
  const [selected, setSelected] = useState(new Set());

  const toggleSection = (idx) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  const selectAll = () => {
    if (selected.size === topic.sections.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(topic.sections.map((_, i) => i)));
    }
  };

  const handleStart = () => {
    const chosenSections = topic.sections.filter((_, i) => selected.has(i));
    onStart(chosenSections);
  };

  const allSelected = selected.size === topic.sections.length;

  return (
    <div className="learn-picker" style={{ '--topic-color': topicColor }}>
      <div className="learn-picker-header">
        {topic.icon && <span className="learn-picker-icon">{topic.icon}</span>}
        <h2 className="learn-picker-title">{topic.title}</h2>
        <p className="learn-picker-subtitle">Choose which sections to study</p>
      </div>

      <button
        className={`learn-picker-all-btn ${allSelected ? 'active' : ''}`}
        onClick={selectAll}
      >
        {allSelected ? <Check size={16} /> : <Layers size={16} />}
        {allSelected ? 'Deselect All' : 'Study All Sections'}
      </button>

      <div className="learn-picker-sections">
        {topic.sections.map((section, idx) => {
          const isSelected = selected.has(idx);
          return (
            <button
              key={idx}
              className={`learn-picker-section ${isSelected ? 'learn-picker-section-selected' : ''}`}
              onClick={() => toggleSection(idx)}
            >
              <div className="learn-picker-section-number" style={{ background: isSelected ? topicColor : undefined }}>
                {isSelected ? <Check size={14} /> : idx + 1}
              </div>
              <div className="learn-picker-section-info">
                <span className="learn-picker-section-title">{section.title}</span>
                <span className="learn-picker-section-meta">
                  {section.notes.length} notes &middot; {section.keyTerms.length} key terms
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <button
        className="btn btn-primary btn-lg learn-picker-start-btn"
        onClick={handleStart}
        disabled={selected.size === 0}
      >
        Start Learning <ArrowRight size={18} />
      </button>
    </div>
  );
}

// ============================================================
// INDIVIDUAL SCREEN COMPONENTS
// ============================================================

function SectionIntroScreen({ screen, onContinue, topicColor, totalXP, sectionScore }) {
  const sectionProgress = Math.round(((screen.sectionIdx) / screen.totalSections) * 100);
  const first3Terms = screen.section.keyTerms.slice(0, 3);

  return (
    <div className="learn-card learn-card-intro" style={{ '--topic-color': topicColor }}>
      {/* Animated progress ring */}
      <div className="learn-intro-ring-wrap">
        <ProgressRing percent={sectionProgress} size={80} strokeWidth={5} color={topicColor}>
          {screen.sectionIdx + 1}/{screen.totalSections}
        </ProgressRing>
      </div>

      {/* XP/Streak display */}
      <div className="learn-intro-xp-bar">
        <Zap size={14} />
        <span>{totalXP} XP earned</span>
      </div>

      <h2 className="learn-intro-title">{screen.section.title}</h2>
      <p className="learn-intro-meta">
        {screen.section.notes.length} notes &middot; {screen.section.keyTerms.length} key terms &middot; {(screen.section.quiz || []).length} questions
      </p>

      {/* What you'll learn bullets */}
      {first3Terms.length > 0 && (
        <div className="learn-intro-preview">
          <p className="learn-intro-preview-label">What you'll learn:</p>
          {first3Terms.map((kt, i) => (
            <div key={i} className="learn-intro-preview-item">
              <div className="learn-intro-preview-dot" style={{ background: pickAccent(i) }} />
              <span>{kt.term}</span>
            </div>
          ))}
        </div>
      )}

      <button className="btn btn-primary btn-lg learn-continue-btn" onClick={onContinue}>
        Start Section <ChevronRight size={18} />
      </button>
    </div>
  );
}

function ContentScreen({ screen, onContinue, topicColor, totalNotes }) {
  const category = detectCategory(screen.notes[0] || '');
  const CategoryIcon = category.icon;
  const noteNumber = screen.globalNoteIndex + 1;

  return (
    <div
      className="learn-card learn-card-content"
      style={{
        '--topic-color': topicColor,
        '--card-accent': screen.accentColor,
        borderTop: `3px solid ${screen.accentColor}`,
      }}
    >
      {/* Category tag */}
      <div className="learn-content-tag" style={{ background: category.color + '18', color: category.color }}>
        <CategoryIcon size={13} />
        <span>{category.label}</span>
      </div>

      <div className="learn-card-header">
        <BookOpen size={18} className="learn-card-header-icon" />
        <span>Study Notes</span>
        <span className="learn-note-counter">Note {screen.contentIndex + 1} of {screen.totalContentInSection}</span>
      </div>

      <div className="learn-notes-list">
        {screen.notes.map((note, i) => {
          const keyPoint = hasKeyPoint(note) ? extractKeyPoint(note) : null;
          return (
            <div key={i} className="learn-note-item">
              <div className="learn-note-bullet" style={{ background: screen.accentColor }} />
              <div className="learn-note-content">
                <p className="learn-note-text">{note}</p>
                {keyPoint && (
                  <div className="learn-key-point-callout" style={{ borderLeftColor: screen.accentColor }}>
                    <Lightbulb size={14} style={{ color: screen.accentColor, flexShrink: 0, marginTop: 2 }} />
                    <span>{keyPoint}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <button className="btn btn-primary btn-lg learn-continue-btn" onClick={onContinue}>
        Continue <ChevronRight size={18} />
      </button>
    </div>
  );
}

function KeyConceptScreen({ screen, onContinue, topicColor }) {
  const iconColors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];
  const color = iconColors[screen.conceptIndex % iconColors.length];

  return (
    <div className="learn-card learn-card-key-concept" style={{ '--topic-color': topicColor, '--concept-color': color }}>
      <div className="learn-concept-glow" style={{ background: `radial-gradient(circle at 50% 0%, ${color}15 0%, transparent 70%)` }} />
      <div className="learn-concept-badge">
        <Star size={14} />
        <span>Key Concept {screen.conceptIndex + 1}/{screen.totalConcepts}</span>
      </div>
      <div className="learn-concept-icon-wrap" style={{ background: color + '18', color: color }}>
        <Lightbulb size={36} />
      </div>
      <h3 className="learn-concept-name" style={{
        background: `linear-gradient(135deg, ${color}, ${topicColor})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        {screen.term.term}
      </h3>
      <p className="learn-concept-def">{screen.term.def}</p>
      <button className="btn btn-primary btn-lg learn-continue-btn" onClick={onContinue}>
        Got it <ChevronRight size={18} />
      </button>
    </div>
  );
}

function MatchTermsScreen({ screen, onAnswer, topicColor }) {
  const [matched, setMatched] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [score, setScore] = useState(0);
  const [wrongPair, setWrongPair] = useState(null);

  const shuffledDefs = useMemo(() => {
    return [...screen.terms].sort(() => Math.random() - 0.5);
  }, [screen.terms]);

  const handleDefClick = (def) => {
    if (!selectedTerm) return;
    const correct = screen.terms.find(t => t.term === selectedTerm);
    if (correct && correct.def === def) {
      setMatched(prev => [...prev, selectedTerm]);
      setScore(prev => prev + 5);
      setSelectedTerm(null);
    } else {
      setWrongPair({ term: selectedTerm, def });
      setTimeout(() => setWrongPair(null), 600);
    }
  };

  const allMatched = matched.length === screen.terms.length;

  useEffect(() => {
    if (allMatched) {
      const timer = setTimeout(() => onAnswer(true, score), 1200);
      return () => clearTimeout(timer);
    }
  }, [allMatched, onAnswer, score]);

  return (
    <div className="learn-card learn-card-match" style={{ '--topic-color': topicColor }}>
      <div className="learn-card-header">
        <Layers size={18} className="learn-card-header-icon" />
        <span>Match Terms</span>
        <span className="learn-match-score">
          <Zap size={14} /> {score} XP
        </span>
      </div>
      <p className="learn-match-instruction">Tap a term, then tap its definition</p>

      <div className="learn-match-grid">
        <div className="learn-match-terms">
          {screen.terms.map((t, i) => {
            const isMatched = matched.includes(t.term);
            const isSelected = selectedTerm === t.term;
            const isWrong = wrongPair?.term === t.term;
            return (
              <button
                key={i}
                className={`learn-match-term ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''} ${isWrong ? 'wrong' : ''}`}
                onClick={() => !isMatched && setSelectedTerm(t.term)}
                disabled={isMatched}
              >
                {isMatched ? <Check size={16} /> : null}
                <span>{t.term}</span>
              </button>
            );
          })}
        </div>
        <div className="learn-match-defs">
          {shuffledDefs.map((t, i) => {
            const isMatched = matched.includes(t.term);
            const isWrong = wrongPair?.def === t.def;
            return (
              <button
                key={i}
                className={`learn-match-def ${isMatched ? 'matched' : ''} ${isWrong ? 'wrong' : ''}`}
                onClick={() => handleDefClick(t.def)}
                disabled={isMatched || !selectedTerm}
              >
                {isMatched ? <CheckCircle size={14} /> : null}
                <span>{t.def}</span>
              </button>
            );
          })}
        </div>
      </div>

      {allMatched && (
        <div className="learn-match-complete">
          <Check size={18} /> All matched! +{score} XP
        </div>
      )}
    </div>
  );
}

function TrueFalseScreen({ screen, onAnswer, topicColor }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handlePick = (pick) => {
    if (submitted) return;
    setSelected(pick);
    setSubmitted(true);
    const correct = pick === screen.answer;
    setTimeout(() => onAnswer(correct), 1800);
  };

  const isCorrect = selected === screen.answer;

  return (
    <div className="learn-card learn-card-truefalse" style={{ '--topic-color': topicColor }}>
      <div className="learn-card-header">
        <HelpCircle size={18} className="learn-card-header-icon" />
        <span>True or False</span>
      </div>
      <div className="learn-tf-statement">
        <p>{screen.statement}</p>
      </div>
      <div className="learn-tf-buttons">
        <button
          className={`learn-tf-btn learn-tf-true ${submitted ? (screen.answer === true ? 'correct' : selected === true ? 'incorrect' : 'dimmed') : ''}`}
          onClick={() => handlePick(true)}
          disabled={submitted}
        >
          <CheckCircle size={20} />
          <span>True</span>
        </button>
        <button
          className={`learn-tf-btn learn-tf-false ${submitted ? (screen.answer === false ? 'correct' : selected === false ? 'incorrect' : 'dimmed') : ''}`}
          onClick={() => handlePick(false)}
          disabled={submitted}
        >
          <XCircle size={20} />
          <span>False</span>
        </button>
      </div>
      {submitted && (
        <div className={`learn-tf-feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
          {isCorrect ? (
            <><Check size={18} /> Correct! +5 XP</>
          ) : (
            <><X size={18} /> Incorrect</>
          )}
          <p className="learn-tf-explanation">{screen.explanation}</p>
        </div>
      )}
    </div>
  );
}

function SortOrderScreen({ screen, onAnswer, topicColor }) {
  const [placed, setPlaced] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const shuffledItems = useMemo(() => {
    return [...screen.items].sort(() => Math.random() - 0.5);
  }, [screen.items]);

  const remaining = shuffledItems.filter(item => !placed.includes(item));

  const handleTap = (item) => {
    if (submitted) return;
    setPlaced(prev => [...prev, item]);
  };

  const handleUndo = () => {
    if (submitted) return;
    setPlaced(prev => prev.slice(0, -1));
  };

  useEffect(() => {
    if (placed.length === screen.items.length && !submitted) {
      setSubmitted(true);
      const correct = placed.every((item, idx) => item === screen.correctOrder[idx]);
      setTimeout(() => onAnswer(correct), 1800);
    }
  }, [placed, screen.items.length, screen.correctOrder, submitted, onAnswer]);

  const isCorrectOrder = submitted && placed.every((item, idx) => item === screen.correctOrder[idx]);

  return (
    <div className="learn-card learn-card-sort" style={{ '--topic-color': topicColor }}>
      <div className="learn-card-header">
        <ArrowUpDown size={18} className="learn-card-header-icon" />
        <span>Sort Order</span>
      </div>
      <p className="learn-sort-prompt">{screen.prompt}</p>

      {/* Answer slots */}
      <div className="learn-sort-slots">
        {screen.items.map((_, idx) => (
          <div key={idx} className={`learn-sort-slot ${placed[idx] ? 'filled' : ''} ${submitted ? (placed[idx] === screen.correctOrder[idx] ? 'correct' : 'incorrect') : ''}`}>
            <span className="learn-sort-slot-num">{idx + 1}</span>
            <span className="learn-sort-slot-text">
              {placed[idx] || 'Tap to place...'}
            </span>
          </div>
        ))}
      </div>

      {/* Undo button */}
      {placed.length > 0 && !submitted && (
        <button className="learn-sort-undo" onClick={handleUndo}>
          <RotateCcw size={14} /> Undo
        </button>
      )}

      {/* Tappable items */}
      {!submitted && remaining.length > 0 && (
        <div className="learn-sort-items">
          {remaining.map((item, i) => (
            <button key={i} className="learn-sort-item" onClick={() => handleTap(item)}>
              {item}
            </button>
          ))}
        </div>
      )}

      {submitted && (
        <div className={`learn-sort-feedback ${isCorrectOrder ? 'correct' : 'incorrect'}`}>
          {isCorrectOrder ? (
            <><Check size={18} /> Correct order! +5 XP</>
          ) : (
            <><X size={18} /> Not quite right</>
          )}
        </div>
      )}
    </div>
  );
}

function SummaryScreen({ screen, onContinue, topicColor, sectionScore, totalXP }) {
  const score = sectionScore || { correct: 0, total: 0, xp: 0 };
  const percent = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

  return (
    <div className="learn-card learn-card-summary" style={{ '--topic-color': topicColor }}>
      <div className="learn-summary-header">
        <BarChart3 size={20} />
        <span>Progress Check</span>
      </div>

      <div className="learn-summary-ring-row">
        <ProgressRing percent={Math.round((screen.conceptsCovered / Math.max(screen.totalConcepts, 1)) * 100)} size={72} strokeWidth={5} color={topicColor}>
          {screen.conceptsCovered}/{screen.totalConcepts}
        </ProgressRing>
        <div className="learn-summary-ring-label">
          <strong>Concepts covered</strong>
          <span>{screen.section.title}</span>
        </div>
      </div>

      <div className="learn-summary-stats">
        <div className="learn-summary-stat">
          <BookOpen size={16} />
          <span>{score.total > 0 ? score.total : '0'} questions</span>
        </div>
        <div className="learn-summary-stat">
          <Check size={16} />
          <span>{score.correct} correct</span>
        </div>
        <div className="learn-summary-stat">
          <Zap size={16} />
          <span>{totalXP} XP total</span>
        </div>
      </div>

      <div className="learn-summary-encourage">
        <Sparkles size={16} />
        <span>{randomEncouragement()}</span>
      </div>

      <button className="btn btn-primary btn-lg learn-continue-btn" onClick={onContinue}>
        Keep Going <ChevronRight size={18} />
      </button>
    </div>
  );
}

function TermRecallScreen({ screen, onAnswer, topicColor }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="learn-card learn-card-term" style={{ '--topic-color': topicColor }}>
      <div className="learn-card-header">
        <Brain size={18} className="learn-card-header-icon" />
        <span>Key Term</span>
      </div>
      <h3 className="learn-term-name">{screen.term.term}</h3>
      <p className="learn-term-prompt">What does this mean? Try to recall the definition before revealing.</p>

      {!revealed ? (
        <button className="btn btn-primary btn-lg learn-reveal-btn" onClick={() => setRevealed(true)}>
          <Eye size={18} /> Reveal Definition
        </button>
      ) : (
        <div className="learn-term-revealed">
          <div className="learn-term-definition">
            <p>{screen.term.def}</p>
          </div>
          <div className="learn-term-actions">
            <button className="btn btn-lg learn-btn-got-it" onClick={() => onAnswer(true)}>
              <Check size={18} /> Got it
            </button>
            <button className="btn btn-lg learn-btn-not-sure" onClick={() => onAnswer(false)}>
              <RotateCcw size={18} /> Not sure
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function FillBlankScreen({ screen, onAnswer, topicColor }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const blankedNote = useMemo(() => {
    const idx = screen.note.toLowerCase().indexOf(screen.answer.toLowerCase());
    if (idx === -1) return screen.note;
    const before = screen.note.slice(0, idx);
    const after = screen.note.slice(idx + screen.answer.length);
    return { before, after, blank: '_'.repeat(Math.max(screen.answer.length, 6)) };
  }, [screen.note, screen.answer]);

  const handleSubmit = () => {
    if (selected === null) return;
    setSubmitted(true);
    setTimeout(() => {
      onAnswer(selected === screen.answer);
    }, 1500);
  };

  const isCorrect = selected === screen.answer;

  return (
    <div className="learn-card learn-card-fill" style={{ '--topic-color': topicColor }}>
      <div className="learn-card-header">
        <Target size={18} className="learn-card-header-icon" />
        <span>Fill the Blank</span>
      </div>
      <p className="learn-fill-note">
        {typeof blankedNote === 'string' ? blankedNote : (
          <>
            {blankedNote.before}
            <span className={`learn-fill-blank ${submitted ? (isCorrect ? 'correct' : 'incorrect') : selected ? 'selected' : ''}`}>
              {submitted ? screen.answer : (selected || blankedNote.blank)}
            </span>
            {blankedNote.after}
          </>
        )}
      </p>
      <div className="learn-fill-options">
        {screen.options.map((opt, i) => (
          <button
            key={i}
            className={`learn-fill-option ${selected === opt ? 'selected' : ''} ${submitted ? (opt === screen.answer ? 'correct' : opt === selected ? 'incorrect' : 'dimmed') : ''}`}
            onClick={() => !submitted && setSelected(opt)}
            disabled={submitted}
          >
            {opt}
          </button>
        ))}
      </div>
      {!submitted && (
        <button
          className="btn btn-primary btn-lg learn-continue-btn"
          onClick={handleSubmit}
          disabled={selected === null}
        >
          Check Answer
        </button>
      )}
      {submitted && (
        <div className={`learn-fill-feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
          {isCorrect ? (
            <><Check size={18} /> Correct! +5 XP</>
          ) : (
            <><X size={18} /> The answer was: {screen.answer}</>
          )}
        </div>
      )}
    </div>
  );
}

function QuizScreen({ screen, onAnswer, topicColor }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (opt) => {
    if (submitted) return;
    setSelected(opt);
    setSubmitted(true);
    const correct = opt === screen.question.a;
    setTimeout(() => {
      onAnswer(correct);
    }, 1500);
  };

  return (
    <div className="learn-card learn-card-quiz" style={{ '--topic-color': topicColor }}>
      <div className="learn-card-header">
        <Zap size={18} className="learn-card-header-icon" />
        <span>Quick Quiz</span>
      </div>
      <h3 className="learn-quiz-question">{screen.question.q}</h3>
      <div className="learn-quiz-options">
        {screen.question.options.map((opt, i) => {
          let cls = 'learn-quiz-option';
          if (submitted) {
            if (opt === screen.question.a) cls += ' correct';
            else if (opt === selected) cls += ' incorrect';
            else cls += ' dimmed';
          } else if (opt === selected) {
            cls += ' selected';
          }
          return (
            <button
              key={i}
              className={cls}
              onClick={() => handleSelect(opt)}
              disabled={submitted}
            >
              <span className="learn-quiz-option-letter">{String.fromCharCode(65 + i)}</span>
              <span className="learn-quiz-option-text">{opt}</span>
            </button>
          );
        })}
      </div>
      {submitted && (
        <div className={`learn-quiz-feedback ${selected === screen.question.a ? 'correct' : 'incorrect'}`}>
          {selected === screen.question.a ? (
            <><Check size={18} /> Correct! +5 XP</>
          ) : (
            <><X size={18} /> Incorrect</>
          )}
        </div>
      )}
    </div>
  );
}

function SectionCompleteScreen({ screen, sectionScore, onContinue, topicColor }) {
  const percent = sectionScore.total > 0 ? Math.round((sectionScore.correct / sectionScore.total) * 100) : 100;
  const takeaways = (screen.topTerms || []).slice(0, 3);

  return (
    <div className="learn-card learn-card-section-complete" style={{ '--topic-color': topicColor }}>
      <ConfettiEffect />
      <div className="learn-complete-icon">
        <Trophy size={44} />
      </div>
      <h2 className="learn-complete-title">Section Complete!</h2>
      <h3 className="learn-complete-section-name">{screen.section.title}</h3>

      {/* Accuracy ring */}
      <div className="learn-complete-ring-row">
        <ProgressRing percent={percent} size={88} strokeWidth={6} color={percent >= 70 ? '#16a34a' : percent >= 40 ? '#f59e0b' : '#ef4444'}>
          {percent}%
        </ProgressRing>
      </div>

      <div className="learn-complete-stats">
        <div className="learn-complete-stat">
          <span className="learn-complete-stat-value">{sectionScore.correct}</span>
          <span className="learn-complete-stat-label">Correct</span>
        </div>
        <div className="learn-complete-stat">
          <span className="learn-complete-stat-value">{sectionScore.total}</span>
          <span className="learn-complete-stat-label">Questions</span>
        </div>
        <div className="learn-complete-stat">
          <span className="learn-complete-stat-value">{sectionScore.xp}</span>
          <span className="learn-complete-stat-label">XP Earned</span>
        </div>
      </div>

      {/* Key takeaways */}
      {takeaways.length > 0 && (
        <div className="learn-complete-takeaways">
          <p className="learn-complete-takeaways-title"><Award size={14} /> Key Takeaways</p>
          {takeaways.map((t, i) => (
            <div key={i} className="learn-complete-takeaway">
              <Check size={14} />
              <span><strong>{t.term}</strong></span>
            </div>
          ))}
        </div>
      )}

      <button className="btn btn-primary btn-lg learn-continue-btn" onClick={onContinue}>
        Continue <ArrowRight size={18} />
      </button>
    </div>
  );
}

function TopicCompleteScreen({ topic, totalScore, onFinish, topicColor }) {
  const percentage = totalScore.total > 0 ? Math.round((totalScore.correct / totalScore.total) * 100) : 100;

  // Collect first 2-3 key terms from each section for takeaways
  const allKeyTerms = topic.sections.flatMap(s => s.keyTerms.slice(0, 2)).slice(0, 5);

  return (
    <div className="learn-card learn-card-topic-complete" style={{ '--topic-color': topicColor }}>
      <ConfettiEffect />
      <div className="learn-complete-icon learn-complete-icon-big">
        <Sparkles size={52} />
      </div>
      <h2 className="learn-complete-title">Topic Complete!</h2>
      <h3 className="learn-complete-topic-name">{topic.title}</h3>

      {/* Accuracy ring */}
      <div className="learn-complete-ring-row">
        <ProgressRing percent={percentage} size={100} strokeWidth={7} color={percentage >= 70 ? '#16a34a' : percentage >= 40 ? '#f59e0b' : '#ef4444'}>
          {percentage}%
        </ProgressRing>
      </div>

      <div className="learn-complete-stats">
        <div className="learn-complete-stat">
          <span className="learn-complete-stat-value">{totalScore.correct}/{totalScore.total}</span>
          <span className="learn-complete-stat-label">Correct</span>
        </div>
        <div className="learn-complete-stat">
          <span className="learn-complete-stat-value learn-xp-value">
            <Zap size={16} /> {totalScore.xp}
          </span>
          <span className="learn-complete-stat-label">Total XP</span>
        </div>
      </div>

      {/* Key takeaways */}
      {allKeyTerms.length > 0 && (
        <div className="learn-complete-takeaways">
          <p className="learn-complete-takeaways-title"><Award size={14} /> Key Terms Learned</p>
          {allKeyTerms.map((t, i) => (
            <div key={i} className="learn-complete-takeaway">
              <Check size={14} />
              <span><strong>{t.term}</strong></span>
            </div>
          ))}
        </div>
      )}

      <button className="btn btn-primary btn-lg btn-glow learn-continue-btn" onClick={onFinish}>
        Finish <Check size={18} />
      </button>
    </div>
  );
}

// ============================================================
// MAIN LEARN VIEW
// ============================================================
export default function LearnView({ topic, navigateTo, showXPToast }) {
  const topicColor = topic.color || '#10b981';

  const [mode, setMode] = useState('picker'); // 'picker' or 'learning'
  const [selectedSections, setSelectedSections] = useState(null);

  const screens = useMemo(() => {
    if (!selectedSections) return [];
    return generateScreens(topic, selectedSections);
  }, [topic, selectedSections]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [sectionScores, setSectionScores] = useState({});
  const [totalXP, setTotalXP] = useState(0);

  const currentScreen = screens[currentIndex];

  const getSectionScore = useCallback((sectionId) => {
    return sectionScores[sectionId] || { correct: 0, total: 0, xp: 0 };
  }, [sectionScores]);

  const addSectionScore = useCallback((sectionId, correct, xp) => {
    setSectionScores(prev => {
      const existing = prev[sectionId] || { correct: 0, total: 0, xp: 0 };
      return {
        ...prev,
        [sectionId]: {
          correct: existing.correct + (correct ? 1 : 0),
          total: existing.total + 1,
          xp: existing.xp + xp
        }
      };
    });
    setTotalXP(prev => prev + xp);
  }, []);

  const goNext = useCallback(() => {
    if (currentIndex < screens.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, screens.length]);

  const handleTermAnswer = useCallback((gotIt) => {
    const xp = gotIt ? 3 : 0;
    addSectionScore(currentScreen.section.id, gotIt, xp);
    goNext();
  }, [addSectionScore, currentScreen, goNext]);

  const handleQuizAnswer = useCallback((correct) => {
    const xp = correct ? 5 : 0;
    addSectionScore(currentScreen.section.id, correct, xp);
    goNext();
  }, [addSectionScore, currentScreen, goNext]);

  const handleFillBlankAnswer = useCallback((correct) => {
    const xp = correct ? 5 : 0;
    addSectionScore(currentScreen.section.id, correct, xp);
    goNext();
  }, [addSectionScore, currentScreen, goNext]);

  const handleTrueFalseAnswer = useCallback((correct) => {
    const xp = correct ? 5 : 0;
    addSectionScore(currentScreen.section.id, correct, xp);
    goNext();
  }, [addSectionScore, currentScreen, goNext]);

  const handleMatchAnswer = useCallback((correct, score) => {
    addSectionScore(currentScreen.section.id, correct, score || 0);
    goNext();
  }, [addSectionScore, currentScreen, goNext]);

  const handleSortAnswer = useCallback((correct) => {
    const xp = correct ? 5 : 0;
    addSectionScore(currentScreen.section.id, correct, xp);
    goNext();
  }, [addSectionScore, currentScreen, goNext]);

  const handleFinish = useCallback(() => {
    if (totalXP > 0) {
      const result = addXP(totalXP, 'Learn: ' + topic.title);
      setTimeout(() => showXPToast(result.gained, result.reason, result.newAchievements), 0);
    }
    navigateTo('topicHub', topic);
  }, [totalXP, topic, showXPToast, navigateTo]);

  const handleBackToPicker = useCallback(() => {
    setMode('picker');
    setSelectedSections(null);
    setCurrentIndex(0);
    setSectionScores({});
    setTotalXP(0);
  }, []);

  const handleStartLearning = useCallback((sections) => {
    setSelectedSections(sections);
    setCurrentIndex(0);
    setSectionScores({});
    setTotalXP(0);
    setMode('learning');
  }, []);

  const totalScore = useMemo(() => {
    let correct = 0, total = 0, xp = 0;
    Object.values(sectionScores).forEach(s => {
      correct += s.correct;
      total += s.total;
      xp += s.xp;
    });
    return { correct, total, xp };
  }, [sectionScores]);

  // Picker mode
  if (mode === 'picker') {
    return (
      <div className="learn-view" style={{ '--topic-color': topicColor }}>
        <div className="learn-header">
          <button className="learn-back-btn" onClick={() => navigateTo('topicHub', topic)}>
            <X size={20} />
          </button>
          <div className="learn-header-info">
            <span className="learn-header-topic">{topic.title}</span>
            <span className="learn-header-section">Select Sections</span>
          </div>
          <div className="learn-header-right" />
        </div>
        <div className="learn-screen-container">
          <SectionPickerScreen
            topic={topic}
            onStart={handleStartLearning}
            topicColor={topicColor}
          />
        </div>
      </div>
    );
  }

  // Learning mode
  const currentSectionName = currentScreen && currentScreen.section ? currentScreen.section.title : '';
  const progressPercent = screens.length > 0 ? ((currentIndex + 1) / screens.length) * 100 : 0;

  // Count total notes across selected sections
  const totalNotes = selectedSections ? selectedSections.reduce((sum, s) => sum + s.notes.length, 0) : 0;

  const renderScreen = () => {
    if (!currentScreen) return null;
    const key = `screen-${currentIndex}`;

    switch (currentScreen.type) {
      case 'section-intro':
        return (
          <SectionIntroScreen
            key={key}
            screen={currentScreen}
            onContinue={goNext}
            topicColor={topicColor}
            totalXP={totalXP}
            sectionScore={currentScreen.section ? getSectionScore(currentScreen.section.id) : null}
          />
        );
      case 'content':
        return <ContentScreen key={key} screen={currentScreen} onContinue={goNext} topicColor={topicColor} totalNotes={totalNotes} />;
      case 'key-concept':
        return <KeyConceptScreen key={key} screen={currentScreen} onContinue={goNext} topicColor={topicColor} />;
      case 'match-terms':
        return <MatchTermsScreen key={key} screen={currentScreen} onAnswer={handleMatchAnswer} topicColor={topicColor} />;
      case 'true-false':
        return <TrueFalseScreen key={key} screen={currentScreen} onAnswer={handleTrueFalseAnswer} topicColor={topicColor} />;
      case 'sort-order':
        return <SortOrderScreen key={key} screen={currentScreen} onAnswer={handleSortAnswer} topicColor={topicColor} />;
      case 'summary':
        return (
          <SummaryScreen
            key={key}
            screen={currentScreen}
            onContinue={goNext}
            topicColor={topicColor}
            sectionScore={currentScreen.section ? getSectionScore(currentScreen.section.id) : null}
            totalXP={totalXP}
          />
        );
      case 'term-recall':
        return <TermRecallScreen key={key} screen={currentScreen} onAnswer={handleTermAnswer} topicColor={topicColor} />;
      case 'fill-blank':
        return <FillBlankScreen key={key} screen={currentScreen} onAnswer={handleFillBlankAnswer} topicColor={topicColor} />;
      case 'quiz':
        return <QuizScreen key={key} screen={currentScreen} onAnswer={handleQuizAnswer} topicColor={topicColor} />;
      case 'section-complete':
        return (
          <SectionCompleteScreen
            key={key}
            screen={currentScreen}
            sectionScore={getSectionScore(currentScreen.section.id)}
            onContinue={goNext}
            topicColor={topicColor}
          />
        );
      case 'topic-complete':
        return (
          <TopicCompleteScreen
            key={key}
            topic={topic}
            totalScore={totalScore}
            onFinish={handleFinish}
            topicColor={topicColor}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="learn-view" style={{ '--topic-color': topicColor }}>
      {/* Progress bar */}
      <div className="learn-progress-bar-container">
        <div className="learn-progress-bar" style={{ width: `${progressPercent}%` }} />
      </div>

      {/* Header */}
      <div className="learn-header">
        <button className="learn-back-btn" onClick={handleBackToPicker}>
          <X size={20} />
        </button>
        <div className="learn-header-info">
          <span className="learn-header-topic">{topic.title}</span>
          {currentSectionName && (
            <span className="learn-header-section">{currentSectionName}</span>
          )}
        </div>
        <div className="learn-header-right">
          <span className="learn-header-xp"><Zap size={14} /> {totalXP}</span>
          <span className="learn-header-progress">{currentIndex + 1} / {screens.length}</span>
        </div>
      </div>

      {/* Screen content */}
      <div className="learn-screen-container">
        {renderScreen()}
      </div>
    </div>
  );
}
