import { useState, useEffect, useRef } from 'react';
import { topics, getAllQuizzes } from '../data/topics';
import { getTopicQuizCount, addXP, XP_ACTIONS, recordQuizScore } from '../App';
import {
  Brain, ChevronRight, Check, X, Trophy, Zap,
  ArrowLeft, RotateCcw, Target
} from 'lucide-react';

function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function QuizView({ topic, navigateTo, showXPToast }) {
  const [phase, setPhase] = useState(topic ? 'active' : 'setup');
  const [selectedTopicId, setSelectedTopicId] = useState(topic ? topic.id : null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(20);
  const [xpAwarded, setXpAwarded] = useState(false);
  const timerRef = useRef(null);

  // Initialize questions when starting from a topic prop
  useEffect(() => {
    if (topic && phase === 'active' && questions.length === 0) {
      const allQuizzes = getAllQuizzes();
      let pool = allQuizzes.filter(q => q.topicId === topic.id);
      if (pool.length === 0) {
        // Fall back to collecting from topic object directly
        const topLevel = topic.quizzes || [];
        const sectionLevel = (topic.sections || []).flatMap(s => s.quiz || []);
        pool = (topLevel.length > 0 ? topLevel : sectionLevel).map((q, i) => ({
          ...q,
          id: `${topic.id}-q${i}`,
          topicId: topic.id,
          topicTitle: topic.title,
          color: topic.color,
        }));
      }
      setQuestions(shuffleArray(pool));
    }
  }, [topic, phase, questions.length]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const startQuiz = (topicId, count) => {
    const allQuizzes = getAllQuizzes();
    let pool;
    if (topicId === 'all') {
      pool = shuffleArray(allQuizzes);
    } else {
      pool = shuffleArray(allQuizzes.filter(q => q.topicId === topicId));
    }

    const limit = count === 'all' ? pool.length : Math.min(count, pool.length);
    setQuestions(pool.slice(0, limit));
    setSelectedTopicId(topicId);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setXpAwarded(false);
    setPhase('active');
  };

  const handleAnswer = (option) => {
    if (selectedAnswer !== null) return; // Already answered
    setSelectedAnswer(option);

    const isCorrect = option === questions[currentIndex].a;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    timerRef.current = setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedAnswer(null);
      } else {
        setPhase('results');
      }
    }, 1200);
  };

  const restartQuiz = () => {
    setQuestions(shuffleArray(questions));
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setXpAwarded(false);
    setPhase('active');
  };

  // Award XP on results screen
  useEffect(() => {
    if (phase === 'results' && !xpAwarded) {
      setXpAwarded(true);

      const total = questions.length;
      const finalScore = score;
      const isPerfect = finalScore === total;

      // Record quiz score
      const tid = selectedTopicId === 'all' ? 'all' : selectedTopicId;
      recordQuizScore(tid, finalScore, total);

      // Calculate XP
      let totalXP = XP_ACTIONS.QUIZ_COMPLETE;
      totalXP += finalScore * XP_ACTIONS.QUIZ_CORRECT;
      if (isPerfect) totalXP += XP_ACTIONS.QUIZ_PERFECT;

      // Award XP (one call for the total)
      const result = addXP(totalXP, 'Quiz completed');

      // Show toast outside of render cycle
      setTimeout(() => {
        showXPToast(result.gained, result.reason, result.newAchievements);
      }, 0);
    }
  }, [phase, xpAwarded, score, questions.length, selectedTopicId, showXPToast]);

  // ─── SETUP SCREEN ─────────────────────────────────────────
  if (phase === 'setup') {
    const allQuizzes = getAllQuizzes();
    const totalQuizCount = allQuizzes.length;

    return (
      <div className="quiz-setup">
        <div className="quiz-setup-header">
          <Brain size={32} className="quiz-setup-icon" />
          <h1 className="quiz-setup-title">Quiz Mode</h1>
          <p className="quiz-setup-subtitle">Test your knowledge across topics</p>
        </div>

        <div className="quiz-topic-grid">
          {/* All Topics card */}
          <button
            className={`quiz-topic-card ${selectedTopicId === 'all' ? 'quiz-topic-card-selected' : ''}`}
            onClick={() => setSelectedTopicId('all')}
            style={{ borderColor: selectedTopicId === 'all' ? '#00d4ff' : undefined }}
          >
            <Target size={24} style={{ color: '#00d4ff' }} />
            <span className="quiz-topic-card-title">All Topics</span>
            <span className="quiz-topic-card-count">{totalQuizCount} questions</span>
          </button>

          {/* Individual topic cards */}
          {topics.map(t => {
            const count = getTopicQuizCount(t);
            if (count === 0) return null;
            return (
              <button
                key={t.id}
                className={`quiz-topic-card ${selectedTopicId === t.id ? 'quiz-topic-card-selected' : ''}`}
                onClick={() => setSelectedTopicId(t.id)}
                style={{ borderColor: selectedTopicId === t.id ? t.color : undefined }}
              >
                <Brain size={24} style={{ color: t.color }} />
                <span className="quiz-topic-card-title">{t.title}</span>
                <span className="quiz-topic-card-count">{count} questions</span>
              </button>
            );
          })}
        </div>

        {selectedTopicId && (
          <div className="quiz-count-selector">
            <span className="quiz-count-label">Number of questions:</span>
            <div className="quiz-count-options">
              {[10, 20, 50, 'all'].map(n => (
                <button
                  key={n}
                  className={`quiz-count-btn ${questionCount === n ? 'quiz-count-btn-active' : ''}`}
                  onClick={() => setQuestionCount(n)}
                >
                  {n === 'all' ? 'All' : n}
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedTopicId && (
          <button
            className="btn btn-primary btn-lg quiz-start-btn"
            onClick={() => startQuiz(selectedTopicId, questionCount)}
          >
            Start Quiz <ChevronRight size={20} />
          </button>
        )}
      </div>
    );
  }

  // ─── ACTIVE SCREEN ────────────────────────────────────────
  if (phase === 'active' && questions.length > 0) {
    const question = questions[currentIndex];
    const labels = ['A', 'B', 'C', 'D'];
    const isAnswered = selectedAnswer !== null;
    const isCorrect = selectedAnswer === question.a;

    return (
      <div className="quiz-active">
        {/* Progress bar */}
        <div className="quiz-progress-bar">
          <div
            className="quiz-progress-fill"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
        <div className="quiz-progress-text">
          Question {currentIndex + 1} of {questions.length}
        </div>

        {/* Score tracker */}
        <div className="quiz-score-tracker">
          <Zap size={16} />
          <span>{score} / {currentIndex + (isAnswered ? 1 : 0)}</span>
        </div>

        {/* Question */}
        <div className="quiz-question-card">
          <h2 className="quiz-question-text">{question.q}</h2>
        </div>

        {/* Options */}
        <div className="quiz-options">
          {question.options.map((option, i) => {
            let optionClass = 'quiz-option';
            if (isAnswered) {
              if (option === question.a) {
                optionClass += ' quiz-option-correct';
              } else if (option === selectedAnswer) {
                optionClass += ' quiz-option-incorrect';
              } else {
                optionClass += ' quiz-option-dimmed';
              }
            }

            return (
              <button
                key={i}
                className={optionClass}
                onClick={() => handleAnswer(option)}
                disabled={isAnswered}
              >
                <span className="quiz-option-label">{labels[i]}</span>
                <span className="quiz-option-text">{option}</span>
                {isAnswered && option === question.a && (
                  <Check size={20} className="quiz-option-icon quiz-option-icon-correct" />
                )}
                {isAnswered && option === selectedAnswer && option !== question.a && (
                  <X size={20} className="quiz-option-icon quiz-option-icon-incorrect" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // ─── RESULTS SCREEN ───────────────────────────────────────
  if (phase === 'results') {
    const total = questions.length;
    const percentage = Math.round((score / total) * 100);
    const isPerfect = score === total;

    const correctXP = score * XP_ACTIONS.QUIZ_CORRECT;
    const completionXP = XP_ACTIONS.QUIZ_COMPLETE;
    const perfectXP = isPerfect ? XP_ACTIONS.QUIZ_PERFECT : 0;
    const totalXP = correctXP + completionXP + perfectXP;

    return (
      <div className="quiz-results">
        <div className="quiz-results-header">
          <Trophy size={48} className="quiz-results-icon" />
          <h1 className="quiz-results-title">
            {isPerfect ? 'Perfect!' : percentage >= 80 ? 'Great Job!' : percentage >= 60 ? 'Good Effort!' : 'Keep Practicing!'}
          </h1>
        </div>

        <div className="quiz-results-score">
          <div className="quiz-results-fraction">
            {score} / {total}
          </div>
          <div className="quiz-results-percentage">{percentage}%</div>
          <div className="quiz-results-bar">
            <div
              className="quiz-results-bar-fill"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        <div className="quiz-results-xp">
          <h3 className="quiz-results-xp-title">
            <Zap size={20} /> XP Earned
          </h3>
          <div className="quiz-results-xp-breakdown">
            <div className="quiz-results-xp-row">
              <span>Quiz Completed</span>
              <span>+{completionXP} XP</span>
            </div>
            <div className="quiz-results-xp-row">
              <span>Correct Answers ({score})</span>
              <span>+{correctXP} XP</span>
            </div>
            {isPerfect && (
              <div className="quiz-results-xp-row quiz-results-xp-bonus">
                <span>Perfect Score Bonus!</span>
                <span>+{perfectXP} XP</span>
              </div>
            )}
            <div className="quiz-results-xp-total">
              <span>Total</span>
              <span>+{totalXP} XP</span>
            </div>
          </div>
        </div>

        <div className="quiz-results-actions">
          <button
            className="btn btn-primary btn-lg"
            onClick={restartQuiz}
          >
            <RotateCcw size={18} /> Try Again
          </button>
          <button
            className="btn btn-lg"
            onClick={() => navigateTo(topic ? 'topicHub' : 'home', topic || null)}
          >
            <ArrowLeft size={18} /> Back
          </button>
        </div>
      </div>
    );
  }

  // Fallback: loading or empty state
  return (
    <div className="quiz-empty">
      <Brain size={48} />
      <p>No quiz questions available.</p>
      <button className="btn btn-primary" onClick={() => navigateTo('home')}>
        <ArrowLeft size={18} /> Back to Home
      </button>
    </div>
  );
}
