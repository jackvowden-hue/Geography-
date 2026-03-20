import { useState, useCallback, useMemo } from 'react';
import { getAllFlashcards, topics } from '../data/topics';
import { getDueCards, getSpacedRepData, reviewCard, addXP, XP_ACTIONS } from '../App';
import {
  Layers, RotateCcw, Check, ChevronRight, ChevronDown, Zap, Trophy,
  ArrowRight, Star, ArrowLeft, BookOpen
} from 'lucide-react';

export default function FlashcardsView({ navigateTo, showXPToast }) {
  const [mode, setMode] = useState('start');
  const [dueCards, setDueCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [sessionXP, setSessionXP] = useState(0);
  const [cardsReviewed, setCardsReviewed] = useState(0);
  const [expandedTopics, setExpandedTopics] = useState({});
  const [selectedLabel, setSelectedLabel] = useState('');

  // Build a map of due cards grouped by topicId and section
  const { allDue, dueBySectionMap } = useMemo(() => {
    const all = getDueCards();
    const map = {};
    all.forEach(card => {
      const key = `${card.topicId}::${card.section}`;
      if (!map[key]) map[key] = [];
      map[key].push(card);
    });
    return { allDue: all, dueBySectionMap: map };
  }, [mode]); // recalculate when returning to start screen

  const toggleTopic = (topicId) => {
    setExpandedTopics(prev => ({ ...prev, [topicId]: !prev[topicId] }));
  };

  const startReview = (cards, label) => {
    if (cards.length === 0) return;
    setDueCards(cards);
    setSelectedLabel(label);
    setCurrentIndex(0);
    setFlipped(false);
    setSessionXP(0);
    setCardsReviewed(0);
    setMode('review');
  };

  const startAllReview = () => {
    const cards = getDueCards();
    startReview(cards, 'All Due Cards');
  };

  const startSectionReview = (topicId, sectionTitle) => {
    const key = `${topicId}::${sectionTitle}`;
    const cards = dueBySectionMap[key] || [];
    const topic = topics.find(t => t.id === topicId);
    const label = topic ? `${topic.title} — ${sectionTitle}` : sectionTitle;
    startReview(cards, label);
  };

  const handleRate = useCallback((quality) => {
    const card = dueCards[currentIndex];
    reviewCard(card.id, quality);

    // Award XP
    let xpAmount = XP_ACTIONS.FLASHCARD_REVIEW;
    let reason = 'Flashcard reviewed';
    if (quality >= 5) {
      xpAmount = XP_ACTIONS.FLASHCARD_EASY;
      reason = 'Flashcard — Easy!';
    }
    const result = addXP(xpAmount, reason);
    showXPToast(result.gained, result.reason, result.newAchievements);

    setSessionXP(prev => prev + xpAmount);
    setCardsReviewed(prev => prev + 1);

    // Move to next card or finish
    if (currentIndex < dueCards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setFlipped(false);
    } else {
      setMode('done');
    }
  }, [dueCards, currentIndex, showXPToast]);

  const currentCard = dueCards[currentIndex];
  const progress = dueCards.length > 0 ? ((currentIndex + 1) / dueCards.length) * 100 : 0;

  // START MODE — Section Picker
  if (mode === 'start') {
    const totalDue = allDue.length;

    return (
      <div className="fc-view">
        <div className="fc-start">
          <div className="fc-start-icon">
            <Layers size={48} />
          </div>
          <h1 className="fc-start-title">Flashcard Review</h1>
          <p className="fc-start-subtitle">Spaced repetition helps you remember key terms long-term</p>

          {totalDue > 0 ? (
            <div className="fc-picker">
              {/* All Due Cards option */}
              <button className="fc-picker-all" onClick={startAllReview}>
                <div className="fc-picker-all-left">
                  <Layers size={20} />
                  <span className="fc-picker-all-label">All Due Cards</span>
                </div>
                <div className="fc-picker-all-right">
                  <span className="fc-picker-badge">{totalDue}</span>
                  <ArrowRight size={18} />
                </div>
              </button>

              {/* Topics list */}
              <div className="fc-picker-topics">
                {topics.map(topic => {
                  // Count due cards per section for this topic
                  const sectionDueCounts = topic.sections.map(section => {
                    const key = `${topic.id}::${section.title}`;
                    return {
                      title: section.title,
                      count: (dueBySectionMap[key] || []).length,
                    };
                  });
                  const topicDueTotal = sectionDueCounts.reduce((sum, s) => sum + s.count, 0);
                  const isExpanded = expandedTopics[topic.id];

                  return (
                    <div key={topic.id} className="fc-picker-topic">
                      <button
                        className="fc-picker-topic-header"
                        onClick={() => toggleTopic(topic.id)}
                      >
                        <div className="fc-picker-topic-left">
                          <span
                            className="fc-picker-topic-dot"
                            style={{ backgroundColor: topic.color }}
                          />
                          <span className="fc-picker-topic-name">{topic.title}</span>
                        </div>
                        <div className="fc-picker-topic-right">
                          {topicDueTotal > 0 && (
                            <span className="fc-picker-badge fc-picker-badge-small">
                              {topicDueTotal}
                            </span>
                          )}
                          {isExpanded ? (
                            <ChevronDown size={18} className="fc-picker-chevron" />
                          ) : (
                            <ChevronRight size={18} className="fc-picker-chevron" />
                          )}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="fc-picker-sections">
                          {sectionDueCounts.map((section, idx) => (
                            <button
                              key={idx}
                              className={`fc-picker-section${section.count === 0 ? ' fc-picker-section-empty' : ''}`}
                              onClick={() => section.count > 0 && startSectionReview(topic.id, section.title)}
                              disabled={section.count === 0}
                            >
                              <span className="fc-picker-section-name">
                                <BookOpen size={14} />
                                {section.title}
                              </span>
                              <span className={`fc-picker-badge fc-picker-badge-small${section.count === 0 ? ' fc-picker-badge-zero' : ''}`}>
                                {section.count}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="fc-caught-up">
              <Check size={32} className="fc-caught-up-icon" />
              <h2 className="fc-caught-up-title">All caught up!</h2>
              <p className="fc-caught-up-text">
                No cards are due right now. Come back later or study some notes to add more cards.
              </p>
              <button className="fc-back-btn" onClick={() => navigateTo('home')}>
                Back to Home
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // REVIEW MODE
  if (mode === 'review' && currentCard) {
    return (
      <div className="fc-view">
        {/* Progress bar */}
        <div className="fc-progress-bar">
          <div className="fc-progress-info">
            <button className="fc-back-to-picker" onClick={() => setMode('start')}>
              <ArrowLeft size={16} />
            </button>
            <span className="fc-progress-count">
              {currentIndex + 1} / {dueCards.length}
            </span>
            <span className="fc-progress-xp">
              <Zap size={14} /> +{sessionXP} XP
            </span>
          </div>
          <div className="fc-progress-track">
            <div className="fc-progress-fill" style={{ width: `${progress}%` }} />
          </div>
          {selectedLabel && (
            <div className="fc-session-label">{selectedLabel}</div>
          )}
        </div>

        {/* Topic label */}
        <div className="fc-topic-label" style={{ color: currentCard.color }}>
          {currentCard.topicTitle} — {currentCard.section}
        </div>

        {/* Flashcard */}
        <div className={`fc-card${flipped ? ' flipped' : ''}`} onClick={() => !flipped && setFlipped(true)}>
          {!flipped ? (
            <div className="fc-card-front">
              <span className="fc-card-label">Term</span>
              <h2 className="fc-card-term">{currentCard.term}</h2>
              <p className="fc-card-tap-hint">Click to reveal definition</p>
            </div>
          ) : (
            <div className="fc-card-back">
              <span className="fc-card-label">Definition</span>
              <h3 className="fc-card-term-small">{currentCard.term}</h3>
              <p className="fc-card-definition">{currentCard.definition}</p>
            </div>
          )}
        </div>

        {/* Rating buttons (only when flipped) */}
        {flipped && (
          <div className="fc-rating">
            <p className="fc-rating-label">How well did you know this?</p>
            <div className="fc-rating-buttons">
              <button className="fc-rate-btn fc-rate-again" onClick={() => handleRate(1)}>
                <RotateCcw size={16} />
                Again
              </button>
              <button className="fc-rate-btn fc-rate-hard" onClick={() => handleRate(3)}>
                Hard
              </button>
              <button className="fc-rate-btn fc-rate-good" onClick={() => handleRate(4)}>
                <Check size={16} />
                Good
              </button>
              <button className="fc-rate-btn fc-rate-easy" onClick={() => handleRate(5)}>
                <Star size={16} />
                Easy
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // DONE MODE
  return (
    <div className="fc-view">
      <div className="fc-done">
        <div className="fc-done-icon">
          <Trophy size={48} />
        </div>
        <h1 className="fc-done-title">Session Complete!</h1>
        <p className="fc-done-subtitle">Great work reviewing your flashcards</p>

        <div className="fc-done-stats">
          <div className="fc-done-stat">
            <span className="fc-done-stat-value">{cardsReviewed}</span>
            <span className="fc-done-stat-label">Cards Reviewed</span>
          </div>
          <div className="fc-done-stat">
            <span className="fc-done-stat-value fc-done-xp">+{sessionXP}</span>
            <span className="fc-done-stat-label">XP Earned</span>
          </div>
        </div>

        <div className="fc-done-actions">
          <button className="fc-start-btn" onClick={() => setMode('start')}>
            Review More
          </button>
          <button className="fc-back-btn" onClick={() => navigateTo('home')}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
