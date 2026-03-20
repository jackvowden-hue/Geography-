import { useMemo } from 'react';
import { getStats, getLevel, getSpacedRepData, ACHIEVEMENTS, getUnlockedAchievements } from '../App';
import { topics } from '../data/topics';
import {
  TrendingUp, Zap, Flame, Clock, Layers, Brain,
  BarChart3, Trophy, Lock, Award, Star
} from 'lucide-react';

export default function StatsView() {
  const stats = getStats();
  const level = getLevel(stats.xp || 0);
  const srData = getSpacedRepData();
  const unlockedAchievements = getUnlockedAchievements();
  const unlockedIds = new Set(unlockedAchievements.map(a => a.id));

  // Weekly study data (last 7 days)
  const weeklyData = useMemo(() => {
    const days = [];
    const daily = stats.daily || {};
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toISOString().split('T')[0];
      const dayLabel = d.toLocaleDateString('en-GB', { weekday: 'short' });
      days.push({
        label: dayLabel,
        date: key,
        minutes: daily[key] || 0,
      });
    }
    return days;
  }, [stats.daily]);

  const maxMinutes = Math.max(...weeklyData.map(d => d.minutes), 1);

  // Per-topic quiz averages
  const topicAverages = useMemo(() => {
    const quizScores = stats.quizScores || {};
    return topics.map(topic => {
      const scores = quizScores[topic.id] || [];
      if (scores.length === 0) return { topic, average: 0, attempts: 0 };
      const avg = scores.reduce((sum, s) => sum + (s.score / s.total) * 100, 0) / scores.length;
      return { topic, average: Math.round(avg), attempts: scores.length };
    });
  }, [stats.quizScores]);

  const cardsReviewed = Object.keys(srData).length;
  const quizzesTaken = stats.quizzesTaken || 0;
  const totalMinutes = stats.totalMinutes || 0;
  const streak = stats.streak || 0;

  return (
    <div className="stats-view">
      <div className="stats-header">
        <BarChart3 size={24} />
        <h1 className="stats-title">Your Progress</h1>
      </div>

      {/* Level Card */}
      <div className="stats-level-card">
        <div className="stats-level-top">
          <div className="stats-level-info">
            <div className="stats-level-badge" style={{ borderColor: level.color, color: level.color }}>
              Lv {level.level}
            </div>
            <div>
              <h2 className="stats-level-title" style={{ color: level.color }}>{level.title}</h2>
              <p className="stats-level-xp">{(stats.xp || 0).toLocaleString()} XP total</p>
            </div>
          </div>
          <Zap size={24} style={{ color: level.color }} />
        </div>
        <div className="stats-level-progress">
          <div className="stats-level-bar-track">
            <div
              className="stats-level-bar-fill"
              style={{ width: `${level.progress}%`, backgroundColor: level.color }}
            />
          </div>
          {level.next && (
            <p className="stats-level-next">
              {level.xpToNext.toLocaleString()} XP to Level {level.next.level} — {level.next.title}
            </p>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stats-card">
          <div className="stats-card-icon" style={{ backgroundColor: '#f59e0b18', color: '#f59e0b' }}>
            <Flame size={20} />
          </div>
          <div className="stats-card-content">
            <span className="stats-card-value">{streak}</span>
            <span className="stats-card-label">Day Streak</span>
          </div>
        </div>
        <div className="stats-card">
          <div className="stats-card-icon" style={{ backgroundColor: '#3b82f618', color: '#3b82f6' }}>
            <Clock size={20} />
          </div>
          <div className="stats-card-content">
            <span className="stats-card-value">{totalMinutes}</span>
            <span className="stats-card-label">Total Minutes</span>
          </div>
        </div>
        <div className="stats-card">
          <div className="stats-card-icon" style={{ backgroundColor: '#8b5cf618', color: '#8b5cf6' }}>
            <Layers size={20} />
          </div>
          <div className="stats-card-content">
            <span className="stats-card-value">{cardsReviewed}</span>
            <span className="stats-card-label">Cards Reviewed</span>
          </div>
        </div>
        <div className="stats-card">
          <div className="stats-card-icon" style={{ backgroundColor: '#10b98118', color: '#10b981' }}>
            <Brain size={20} />
          </div>
          <div className="stats-card-content">
            <span className="stats-card-value">{quizzesTaken}</span>
            <span className="stats-card-label">Quizzes Taken</span>
          </div>
        </div>
      </div>

      {/* Weekly Study Chart */}
      <div className="stats-section">
        <div className="stats-section-header">
          <TrendingUp size={18} />
          <h2 className="stats-section-title">Weekly Study Time</h2>
        </div>
        <div className="stats-chart">
          <div className="stats-chart-bars">
            {weeklyData.map((day, i) => (
              <div key={i} className="stats-chart-col">
                <span className="stats-chart-value">
                  {day.minutes > 0 ? `${day.minutes}m` : ''}
                </span>
                <div className="stats-chart-bar-container">
                  <div
                    className="stats-chart-bar"
                    style={{
                      height: `${day.minutes > 0 ? Math.max((day.minutes / maxMinutes) * 100, 8) : 4}%`,
                      backgroundColor: day.minutes > 0 ? '#10b981' : '#1e2030',
                    }}
                  />
                </div>
                <span className="stats-chart-label">{day.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quiz Performance */}
      <div className="stats-section">
        <div className="stats-section-header">
          <Brain size={18} />
          <h2 className="stats-section-title">Quiz Performance</h2>
        </div>
        <div className="stats-quiz-list">
          {topicAverages.map(({ topic, average, attempts }) => (
            <div key={topic.id} className="stats-quiz-row">
              <div className="stats-quiz-info">
                <span className="stats-quiz-topic" style={{ color: topic.color }}>
                  {topic.title}
                </span>
                <span className="stats-quiz-attempts">
                  {attempts > 0 ? `${attempts} attempt${attempts !== 1 ? 's' : ''}` : 'No attempts'}
                </span>
              </div>
              <div className="stats-quiz-bar-wrap">
                <div className="stats-quiz-bar-track">
                  <div
                    className="stats-quiz-bar-fill"
                    style={{
                      width: `${average}%`,
                      backgroundColor: topic.color,
                    }}
                  />
                </div>
                <span className="stats-quiz-percent" style={{ color: attempts > 0 ? topic.color : '#555' }}>
                  {attempts > 0 ? `${average}%` : '--'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="stats-section">
        <div className="stats-section-header">
          <Trophy size={18} />
          <h2 className="stats-section-title">Achievements</h2>
          <span className="stats-section-count">
            {unlockedAchievements.length} / {ACHIEVEMENTS.length}
          </span>
        </div>
        <div className="stats-achievements-grid">
          {ACHIEVEMENTS.map(achievement => {
            const isUnlocked = unlockedIds.has(achievement.id);
            return (
              <div
                key={achievement.id}
                className={`stats-achievement-card${isUnlocked ? ' unlocked' : ' locked'}`}
              >
                <div className="stats-achievement-icon">
                  {isUnlocked ? (
                    <span className="stats-achievement-emoji">{achievement.icon}</span>
                  ) : (
                    <Lock size={20} className="stats-achievement-lock" />
                  )}
                </div>
                <div className="stats-achievement-info">
                  <span className={`stats-achievement-title${isUnlocked ? ' unlocked' : ''}`}>
                    {achievement.title}
                  </span>
                  <span className="stats-achievement-desc">{achievement.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
