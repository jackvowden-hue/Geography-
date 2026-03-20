import { useState, useMemo, useCallback } from 'react';
import { addXP, XP_ACTIONS } from '../App';
import {
  ChevronRight, Check, X, Eye, EyeOff, Zap, Trophy,
  BookOpen, Brain, ArrowRight, RotateCcw, Sparkles, Target
} from 'lucide-react';

// ============================================================
// SCREEN GENERATION
// ============================================================
function generateScreens(topic) {
  const screens = [];
  topic.sections.forEach(section => {
    // Add section intro
    screens.push({ type: 'section-intro', section });

    // Group notes into content screens (2-3 per screen)
    const noteChunks = [];
    for (let i = 0; i < section.notes.length; i += 2) {
      noteChunks.push(section.notes.slice(i, i + 2));
    }

    noteChunks.forEach((chunk, ci) => {
      screens.push({ type: 'content', notes: chunk, section });

      // After every 2 content screens, add an interactive screen
      if (ci % 2 === 1 || ci === noteChunks.length - 1) {
        // Add a term recall if we have terms
        if (section.keyTerms[ci]) {
          screens.push({ type: 'term-recall', term: section.keyTerms[ci], section });
        }
        // Add a fill-blank from a note
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
          }
        }
      }
    });

    // Add section-level quiz questions (pick up to 4)
    const sectionQuizzes = (section.quiz || []).slice(0, 4);
    sectionQuizzes.forEach(q => {
      screens.push({ type: 'quiz', question: q, section });
    });

    // Section complete screen
    screens.push({ type: 'section-complete', section });
  });

  screens.push({ type: 'topic-complete' });
  return screens;
}

// ============================================================
// INDIVIDUAL SCREEN COMPONENTS
// ============================================================

function SectionIntroScreen({ screen, onContinue, topicColor }) {
  return (
    <div className="learn-card learn-card-intro" style={{ '--topic-color': topicColor }}>
      <div className="learn-intro-icon">
        <BookOpen size={40} />
      </div>
      <h2 className="learn-intro-title">{screen.section.title}</h2>
      <p className="learn-intro-meta">
        {screen.section.notes.length} notes &middot; {screen.section.keyTerms.length} key terms &middot; {(screen.section.quiz || []).length} questions
      </p>
      <button className="btn btn-primary btn-lg learn-continue-btn" onClick={onContinue}>
        Start Section <ChevronRight size={18} />
      </button>
    </div>
  );
}

function ContentScreen({ screen, onContinue, topicColor }) {
  return (
    <div className="learn-card learn-card-content" style={{ '--topic-color': topicColor }}>
      <div className="learn-card-header">
        <BookOpen size={18} className="learn-card-header-icon" />
        <span>Study Notes</span>
      </div>
      <div className="learn-notes-list">
        {screen.notes.map((note, i) => (
          <div key={i} className="learn-note-item">
            <div className="learn-note-bullet" />
            <p className="learn-note-text">{note}</p>
          </div>
        ))}
      </div>
      <button className="btn btn-primary btn-lg learn-continue-btn" onClick={onContinue}>
        Continue <ChevronRight size={18} />
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
            <button
              className="btn btn-lg learn-btn-got-it"
              onClick={() => onAnswer(true)}
            >
              <Check size={18} /> Got it
            </button>
            <button
              className="btn btn-lg learn-btn-not-sure"
              onClick={() => onAnswer(false)}
            >
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
  return (
    <div className="learn-card learn-card-section-complete" style={{ '--topic-color': topicColor }}>
      <div className="learn-complete-icon">
        <Trophy size={44} />
      </div>
      <h2 className="learn-complete-title">Section Complete!</h2>
      <h3 className="learn-complete-section-name">{screen.section.title}</h3>
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
      <button className="btn btn-primary btn-lg learn-continue-btn" onClick={onContinue}>
        Continue <ArrowRight size={18} />
      </button>
    </div>
  );
}

function TopicCompleteScreen({ topic, totalScore, onFinish, topicColor }) {
  const percentage = totalScore.total > 0 ? Math.round((totalScore.correct / totalScore.total) * 100) : 100;

  return (
    <div className="learn-card learn-card-topic-complete" style={{ '--topic-color': topicColor }}>
      <div className="learn-complete-icon learn-complete-icon-big">
        <Sparkles size={52} />
      </div>
      <h2 className="learn-complete-title">Topic Complete!</h2>
      <h3 className="learn-complete-topic-name">{topic.title}</h3>
      <div className="learn-complete-stats">
        <div className="learn-complete-stat">
          <span className="learn-complete-stat-value">{percentage}%</span>
          <span className="learn-complete-stat-label">Accuracy</span>
        </div>
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

  const screens = useMemo(() => generateScreens(topic), [topic]);

  const [currentIndex, setCurrentIndex] = useState(0);
  // Track scores per section: { [sectionId]: { correct, total, xp } }
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

  const handleFinish = useCallback(() => {
    if (totalXP > 0) {
      const result = addXP(totalXP, 'Learn: ' + topic.title);
      setTimeout(() => showXPToast(result.gained, result.reason, result.newAchievements), 0);
    }
    navigateTo('topicHub', topic);
  }, [totalXP, topic.title, showXPToast, navigateTo]);

  // Calculate total score for topic complete screen
  const totalScore = useMemo(() => {
    let correct = 0, total = 0, xp = 0;
    Object.values(sectionScores).forEach(s => {
      correct += s.correct;
      total += s.total;
      xp += s.xp;
    });
    return { correct, total, xp };
  }, [sectionScores]);

  // Get current section name
  const currentSectionName = currentScreen.section ? currentScreen.section.title : '';

  // Progress
  const progressPercent = ((currentIndex + 1) / screens.length) * 100;

  // Render current screen
  const renderScreen = () => {
    // Use key to reset local state on screen change
    const key = `screen-${currentIndex}`;

    switch (currentScreen.type) {
      case 'section-intro':
        return <SectionIntroScreen key={key} screen={currentScreen} onContinue={goNext} topicColor={topicColor} />;
      case 'content':
        return <ContentScreen key={key} screen={currentScreen} onContinue={goNext} topicColor={topicColor} />;
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
        <button className="learn-back-btn" onClick={() => navigateTo('home')}>
          <X size={20} />
        </button>
        <div className="learn-header-info">
          <span className="learn-header-topic">{topic.title}</span>
          {currentSectionName && (
            <span className="learn-header-section">{currentSectionName}</span>
          )}
        </div>
        <span className="learn-header-progress">{currentIndex + 1} / {screens.length}</span>
      </div>

      {/* Screen content */}
      <div className="learn-screen-container">
        {renderScreen()}
      </div>
    </div>
  );
}
