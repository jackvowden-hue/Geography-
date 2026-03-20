import { useState, useEffect, useRef } from 'react';
import { examQuestions } from '../data/exam-questions';
import { addXP, XP_ACTIONS } from '../App';
import {
  FileText, Clock, ChevronRight, Check, ArrowLeft,
  CheckSquare, Square, Award, Send, BookOpen, Target, Zap
} from 'lucide-react';

export default function ExamView({ topic, navigateTo, showXPToast }) {
  const [mode, setMode] = useState('select'); // 'select' | 'answer' | 'review'
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answer, setAnswer] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [selfMarks, setSelfMarks] = useState(0);
  const [checkedPoints, setCheckedPoints] = useState({});
  const timerRef = useRef(null);

  // Filter questions for this topic
  const topicQuestions = examQuestions.filter(q => q.topicId === topic.id);
  const grouped = {
    6: topicQuestions.filter(q => q.marks === 6),
    12: topicQuestions.filter(q => q.marks === 12),
    20: topicQuestions.filter(q => q.marks === 20),
  };

  // Timer for answer mode
  useEffect(() => {
    if (mode === 'answer' && startTime) {
      timerRef.current = setInterval(() => {
        setElapsed(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [mode, startTime]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const wordCount = answer.trim() ? answer.trim().split(/\s+/).length : 0;

  const startQuestion = (question) => {
    setSelectedQuestion(question);
    setAnswer('');
    setElapsed(0);
    setStartTime(Date.now());
    setCheckedPoints({});
    setSelfMarks(0);
    setMode('answer');
  };

  const submitAnswer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setMode('review');
  };

  const togglePoint = (index) => {
    setCheckedPoints(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const saveAndContinue = () => {
    const xpEarned = selfMarks * 3;
    if (xpEarned > 0) {
      addXP(xpEarned, 'Exam: ' + selectedQuestion.marks + '-marker');
      if (showXPToast) {
        showXPToast(xpEarned, 'Exam: ' + selectedQuestion.marks + '-marker');
      }
    }
    setMode('select');
    setSelectedQuestion(null);
    setAnswer('');
    setCheckedPoints({});
    setSelfMarks(0);
  };

  const getMinHeight = (marks) => {
    if (marks >= 20) return 400;
    if (marks >= 12) return 300;
    return 200;
  };

  const getRecommendedTime = (marks) => {
    if (marks >= 20) return '25-30 min';
    if (marks >= 12) return '15-18 min';
    return '8-10 min';
  };

  const getMarkBadgeClass = (marks) => {
    if (marks >= 20) return 'exam-mark-badge-20';
    if (marks >= 12) return 'exam-mark-badge-12';
    return 'exam-mark-badge-6';
  };

  // ==================== SELECT MODE ====================
  if (mode === 'select') {
    return (
      <div className="exam-view">
        <div className="exam-header">
          <button className="exam-back-btn" onClick={() => navigateTo('topicHub', topic)}>
            <ArrowLeft size={18} />
            Back to {topic.title}
          </button>
          <h2 className="exam-title">
            <FileText size={24} />
            Exam Practice
          </h2>
          <p className="exam-subtitle">
            Choose a question to practise. Write your answer, then self-assess against the model answer and mark scheme.
          </p>
        </div>

        {[6, 12, 20].map(marks => {
          const questions = grouped[marks];
          if (!questions || questions.length === 0) return null;
          return (
            <div key={marks} className="exam-section">
              <h3 className="exam-section-title">
                <span className={`exam-mark-badge ${getMarkBadgeClass(marks)}`}>
                  {marks} marks
                </span>
                <span className="exam-section-time">
                  <Clock size={14} />
                  {getRecommendedTime(marks)}
                </span>
              </h3>
              <div className="exam-question-grid">
                {questions.map((q, i) => (
                  <button
                    key={`${q.topicId}-${marks}-${i}`}
                    className="exam-question-card"
                    onClick={() => startQuestion(q)}
                  >
                    <div className="exam-card-top">
                      <span className={`exam-card-badge ${getMarkBadgeClass(marks)}`}>
                        {marks}
                      </span>
                      <span className="exam-card-command">{q.command}</span>
                    </div>
                    <p className="exam-card-question">{q.question}</p>
                    <div className="exam-card-footer">
                      <ChevronRight size={16} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          );
        })}

        {topicQuestions.length === 0 && (
          <div className="exam-empty">
            <FileText size={48} />
            <p>No exam questions available for this topic yet.</p>
          </div>
        )}
      </div>
    );
  }

  // ==================== ANSWER MODE ====================
  if (mode === 'answer') {
    return (
      <div className="exam-view">
        <div className="exam-header">
          <button className="exam-back-btn" onClick={() => setMode('select')}>
            <ArrowLeft size={18} />
            Back to questions
          </button>
        </div>

        <div className="exam-question-display">
          <div className="exam-question-top-row">
            <span className={`exam-mark-badge ${getMarkBadgeClass(selectedQuestion.marks)}`}>
              {selectedQuestion.marks} marks
            </span>
            <span className="exam-timer">
              <Clock size={16} />
              {formatTime(elapsed)}
            </span>
          </div>
          <p className="exam-question-text">{selectedQuestion.question}</p>
          {selectedQuestion.guidance && (
            <div className="exam-guidance">
              <Target size={14} />
              <span>{selectedQuestion.guidance}</span>
            </div>
          )}
        </div>

        <div className="exam-answer-area">
          <textarea
            className="exam-textarea"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Write your answer here..."
            style={{ minHeight: getMinHeight(selectedQuestion.marks) }}
            autoFocus
          />
          <div className="exam-answer-meta">
            <span className="exam-word-count">
              {wordCount} {wordCount === 1 ? 'word' : 'words'}
            </span>
            <span className="exam-time-hint">
              Recommended: {getRecommendedTime(selectedQuestion.marks)}
            </span>
          </div>
        </div>

        <button
          className="exam-submit-btn"
          onClick={submitAnswer}
          disabled={!answer.trim()}
        >
          <Send size={18} />
          Submit Answer
        </button>
      </div>
    );
  }

  // ==================== REVIEW MODE ====================
  if (mode === 'review') {
    return (
      <div className="exam-view">
        <div className="exam-header">
          <button className="exam-back-btn" onClick={() => setMode('select')}>
            <ArrowLeft size={18} />
            Back to questions
          </button>
        </div>

        {/* Question reminder */}
        <div className="exam-question-display exam-question-display-compact">
          <div className="exam-question-top-row">
            <span className={`exam-mark-badge ${getMarkBadgeClass(selectedQuestion.marks)}`}>
              {selectedQuestion.marks} marks
            </span>
            <span className="exam-review-time">
              <Clock size={14} />
              Completed in {formatTime(elapsed)}
            </span>
          </div>
          <p className="exam-question-text-sm">{selectedQuestion.question}</p>
        </div>

        {/* Student's answer */}
        <div className="exam-review-section">
          <h3 className="exam-review-heading">
            <FileText size={18} />
            Your Answer
          </h3>
          <div className="exam-your-answer">
            <p>{answer}</p>
            <div className="exam-your-answer-meta">{wordCount} words</div>
          </div>
        </div>

        {/* Model answer */}
        <div className="exam-review-section">
          <h3 className="exam-review-heading">
            <BookOpen size={18} />
            Model Answer
          </h3>
          <div className="exam-model-answer">
            {selectedQuestion.modelAnswer.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Mark scheme checklist */}
        <div className="exam-review-section">
          <h3 className="exam-review-heading">
            <Check size={18} />
            Mark Scheme — Tick the points you included
          </h3>
          <div className="exam-mark-scheme">
            {selectedQuestion.markScheme.map((point, i) => (
              <button
                key={i}
                className={`exam-mark-item ${checkedPoints[i] ? 'exam-mark-item-checked' : ''}`}
                onClick={() => togglePoint(i)}
              >
                {checkedPoints[i] ? <CheckSquare size={18} /> : <Square size={18} />}
                <span>{point}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Self assessment */}
        <div className="exam-review-section">
          <h3 className="exam-review-heading">
            <Award size={18} />
            Self Assessment
          </h3>
          <div className="exam-self-assess">
            <label className="exam-assess-label">
              How many marks would you give yourself?
            </label>
            <div className="exam-assess-control">
              <input
                type="range"
                min="0"
                max={selectedQuestion.marks}
                value={selfMarks}
                onChange={(e) => setSelfMarks(parseInt(e.target.value))}
                className="exam-assess-slider"
              />
              <div className="exam-assess-value">
                <span className="exam-assess-number">{selfMarks}</span>
                <span className="exam-assess-max">/ {selectedQuestion.marks}</span>
              </div>
            </div>
            <div className="exam-assess-xp">
              <Zap size={14} />
              <span>You'll earn <strong>{selfMarks * 3} XP</strong> for this answer</span>
            </div>
          </div>
        </div>

        <button className="exam-save-btn" onClick={saveAndContinue}>
          <Check size={18} />
          Save & Continue
        </button>
      </div>
    );
  }

  return null;
}
