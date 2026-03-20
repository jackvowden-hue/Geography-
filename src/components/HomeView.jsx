import { topics } from '../data/topics';
import { getStats, getLevel, getDailyXP, ACHIEVEMENTS, getDueCards, getSpacedRepData, getTopicQuizCount } from '../App';
import {
  Mountain, Snowflake, Waves, Globe, Building2, Shield, Plane, Droplets, Flame,
  Zap, Brain, Timer, BarChart3, ChevronRight, Layers, Target, Sparkles
} from 'lucide-react';

const iconMap = { Mountain, Snowflake, Waves, Globe, Building2, Shield, Plane, Droplets, Flame };

const DAILY_GOAL = 200;

export default function HomeView({ navigateTo }) {
  const stats = getStats();
  const level = getLevel(stats.xp || 0);
  const dailyXP = getDailyXP(stats);
  const dueCards = getDueCards();
  const dailyProgress = Math.min((dailyXP / DAILY_GOAL) * 100, 100);
  const unlockedCount = (stats.achievements || []).length;

  return (
    <div className="home-view">
      {/* Welcome Header */}
      <div className="home-header">
        <div className="home-header-text">
          <h1 className="home-title">Welcome back</h1>
          <p className="home-subtitle">Continue your A-Level Geography revision</p>
        </div>
        <div className="home-level-badge" style={{ borderColor: level.color }}>
          <span className="home-level-number" style={{ color: level.color }}>
            Lv {level.level}
          </span>
          <span className="home-level-title">{level.title}</span>
        </div>
      </div>

      {/* XP Progress Bar */}
      <div className="home-xp-bar-container">
        <div className="home-xp-bar-info">
          <span className="home-xp-label">
            <Sparkles size={14} />
            {(stats.xp || 0).toLocaleString()} XP
          </span>
          {level.next && (
            <span className="home-xp-next">
              {level.xpToNext.toLocaleString()} XP to Level {level.next.level}
            </span>
          )}
        </div>
        <div className="home-xp-bar-track">
          <div
            className="home-xp-bar-fill"
            style={{ width: `${level.progress}%`, backgroundColor: level.color }}
          />
        </div>
      </div>

      {/* Daily Progress Card */}
      <div className="home-daily-card">
        <div className="home-daily-header">
          <div className="home-daily-title-row">
            <Target size={18} className="home-daily-icon" />
            <h3 className="home-daily-title">Daily Progress</h3>
          </div>
          <span className="home-daily-xp-count">
            {dailyXP} / {DAILY_GOAL} XP
          </span>
        </div>
        <div className="home-daily-bar-track">
          <div
            className="home-daily-bar-fill"
            style={{ width: `${dailyProgress}%` }}
          />
        </div>
        <div className="home-daily-stats">
          <div className="home-daily-stat">
            <Layers size={14} />
            <span>{dueCards.length} cards due for review</span>
          </div>
          <div className="home-daily-stat">
            <Zap size={14} />
            <span>{stats.streak || 0} day streak</span>
          </div>
        </div>
      </div>

      {/* Topic Grid */}
      <div className="home-section-header">
        <h2 className="home-section-title">Topics</h2>
        <span className="home-section-count">{topics.length} topics</span>
      </div>
      <div className="home-topic-grid">
        {topics.map((topic) => {
          const IconComponent = iconMap[topic.icon];
          const quizCount = getTopicQuizCount(topic);
          const sectionCount = topic.sections ? topic.sections.length : 0;
          const termCount = (topic.sections || []).reduce(
            (sum, s) => sum + (s.keyTerms ? s.keyTerms.length : 0),
            0
          );
          // Calculate topic progress from quiz scores
          const topicScores = (stats.quizScores && stats.quizScores[topic.id]) || [];
          const hasProgress = topicScores.length > 0;
          const bestPercent = hasProgress
            ? Math.round(
                Math.max(...topicScores.map((s) => (s.score / s.total) * 100))
              )
            : 0;

          return (
            <button
              key={topic.id}
              className="home-topic-card"
              style={{ '--topic-color': topic.color }}
              onClick={() => navigateTo('topicHub', topic)}
            >
              <div className="home-topic-card-accent" />
              <div className="home-topic-card-content">
                <div className="home-topic-card-top">
                  <div
                    className="home-topic-icon-wrap"
                    style={{ backgroundColor: `${topic.color}15`, color: topic.color }}
                  >
                    {IconComponent && <IconComponent size={20} />}
                  </div>
                  <span className="home-topic-unit-tag">
                    {topic.unit === 'Physical Geography' ? 'Physical' : 'Human'}
                  </span>
                </div>
                <h3 className="home-topic-card-title">{topic.title}</h3>
                <div className="home-topic-card-meta">
                  <span>{sectionCount} sections</span>
                  <span className="home-topic-meta-dot" />
                  <span>{quizCount} questions</span>
                </div>
                {hasProgress && (
                  <div className="home-topic-progress">
                    <div className="home-topic-progress-track">
                      <div
                        className="home-topic-progress-fill"
                        style={{
                          width: `${bestPercent}%`,
                          backgroundColor: topic.color,
                        }}
                      />
                    </div>
                    <span
                      className="home-topic-progress-label"
                      style={{ color: topic.color }}
                    >
                      {bestPercent}%
                    </span>
                  </div>
                )}
              </div>
              <ChevronRight size={16} className="home-topic-card-arrow" />
            </button>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="home-section-header">
        <h2 className="home-section-title">Quick Actions</h2>
      </div>
      <div className="home-quick-actions">
        <button
          className="home-action-btn"
          onClick={() => navigateTo('quiz')}
        >
          <Brain size={18} />
          <span>Quick Quiz</span>
        </button>
        <button
          className="home-action-btn"
          onClick={() => navigateTo('flashcards')}
        >
          <Layers size={18} />
          <span>Flashcards</span>
          {dueCards.length > 0 && (
            <span className="home-action-badge">{dueCards.length}</span>
          )}
        </button>
        <button
          className="home-action-btn"
          onClick={() => navigateTo('timer')}
        >
          <Timer size={18} />
          <span>Timer</span>
        </button>
        <button
          className="home-action-btn"
          onClick={() => navigateTo('stats')}
        >
          <BarChart3 size={18} />
          <span>Stats</span>
        </button>
      </div>
    </div>
  );
}
