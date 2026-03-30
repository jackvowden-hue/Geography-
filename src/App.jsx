import { useState, useEffect, useCallback } from 'react';
import { topics, getAllFlashcards, getAllQuizzes } from './data/topics';
import {
  Mountain, Snowflake, Waves, Globe, Building2, Shield, Plane, Droplets, Flame,
  BookOpen, Brain, Timer, Zap, ChevronRight, ChevronLeft, X, Check, RotateCcw,
  Trophy, Target, Menu, Home, ArrowRight, Clock, Star, TrendingUp,
  ChevronDown, ChevronUp, Search, Layers, GraduationCap, BarChart3, PlayCircle,
  PauseCircle, RefreshCw, Award, FileText, Eye, EyeOff, ExternalLink, Youtube, Video,
  Moon, Sun, Map
} from 'lucide-react';
import HomeView from './components/HomeView';
import TopicHub from './components/TopicHub';
import LearnView from './components/LearnView';
import StudyView from './components/StudyView';
import QuizView from './components/QuizView';
import ExamView from './components/ExamView';
import FlashcardsView from './components/FlashcardsView';
import TimerView from './components/TimerView';
import StatsView from './components/StatsView';
import MindmapView from './components/MindmapView';
import './App.css';

// ============================================================
// ICON MAP
// ============================================================
const iconMap = { Mountain, Snowflake, Waves, Globe, Building2, Shield, Plane, Droplets, Flame };

// ============================================================
// SPACED REPETITION ENGINE
// ============================================================
function getSpacedRepData() {
  try { return JSON.parse(localStorage.getItem('geohack-sr') || '{}'); } catch { return {}; }
}

function setSpacedRepData(data) {
  localStorage.setItem('geohack-sr', JSON.stringify(data));
}

function getNextReview(cardId) {
  const data = getSpacedRepData();
  const card = data[cardId];
  if (!card) return { interval: 0, ease: 2.5, due: 0, reps: 0 };
  return card;
}

function reviewCard(cardId, quality) {
  const data = getSpacedRepData();
  const card = data[cardId] || { interval: 0, ease: 2.5, due: 0, reps: 0 };

  if (quality >= 3) {
    if (card.reps === 0) card.interval = 1;
    else if (card.reps === 1) card.interval = 6;
    else card.interval = Math.round(card.interval * card.ease);
    card.reps++;
  } else {
    card.reps = 0;
    card.interval = 1;
  }

  card.ease = Math.max(1.3, card.ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
  card.due = Date.now() + card.interval * 24 * 60 * 60 * 1000;
  data[cardId] = card;
  setSpacedRepData(data);
  return card;
}

function getDueCards() {
  const data = getSpacedRepData();
  const allCards = getAllFlashcards();
  const now = Date.now();
  const due = allCards.filter(c => {
    const sr = data[c.id];
    return !sr || sr.due <= now;
  });
  return due;
}

// ============================================================
// STATS ENGINE
// ============================================================
function getStats() {
  try { return JSON.parse(localStorage.getItem('geohack-stats') || '{}'); } catch { return {}; }
}

function saveStats(stats) {
  localStorage.setItem('geohack-stats', JSON.stringify(stats));
}

function recordStudyTime(minutes) {
  const stats = getStats();
  const today = new Date().toISOString().split('T')[0];
  if (!stats.daily) stats.daily = {};
  stats.daily[today] = (stats.daily[today] || 0) + minutes;
  stats.totalMinutes = (stats.totalMinutes || 0) + minutes;
  stats.streak = calculateStreak(stats.daily);
  saveStats(stats);
}

function recordQuizScore(topicId, score, total) {
  const stats = getStats();
  if (!stats.quizScores) stats.quizScores = {};
  if (!stats.quizScores[topicId]) stats.quizScores[topicId] = [];
  stats.quizScores[topicId].push({ score, total, date: Date.now() });
  stats.quizzesTaken = (stats.quizzesTaken || 0) + 1;
  saveStats(stats);
}

function calculateStreak(daily) {
  if (!daily) return 0;
  const today = new Date();
  let streak = 0;
  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().split('T')[0];
    if (daily[key] && daily[key] > 0) streak++;
    else if (i > 0) break;
  }
  return streak;
}

// ============================================================
// XP & GAMIFICATION ENGINE
// ============================================================
const XP_ACTIONS = {
  QUIZ_CORRECT: 10,
  QUIZ_PERFECT: 50,
  QUIZ_COMPLETE: 25,
  FLASHCARD_REVIEW: 5,
  FLASHCARD_EASY: 8,
  STUDY_MINUTE: 2,
  STREAK_BONUS: 20,
  DAILY_GOAL: 100,
};

const LEVELS = [
  { level: 1, xp: 0, title: 'FRESHMAN', color: '#888' },
  { level: 2, xp: 100, title: 'INITIATE', color: '#00d4ff' },
  { level: 3, xp: 300, title: 'SCHOLAR', color: '#10b981' },
  { level: 4, xp: 600, title: 'ANALYST', color: '#f59e0b' },
  { level: 5, xp: 1000, title: 'STRATEGIST', color: '#8b5cf6' },
  { level: 6, xp: 1500, title: 'EXPERT', color: '#ef4444' },
  { level: 7, xp: 2200, title: 'MASTER', color: '#06b6d4' },
  { level: 8, xp: 3000, title: 'COMMANDER', color: '#f97316' },
  { level: 9, xp: 4000, title: 'ELITE', color: '#8b5cf6' },
  { level: 10, xp: 5500, title: 'LEGEND', color: '#eab308' },
  { level: 11, xp: 7500, title: 'GRANDMASTER', color: '#ef4444' },
  { level: 12, xp: 10000, title: 'GEOGRAPHER', color: '#10b981' },
];

const ACHIEVEMENTS = [
  { id: 'first-quiz', title: 'FIRST BLOOD', desc: 'Complete your first quiz', icon: '\u{1F3AF}', check: s => (s.quizzesTaken || 0) >= 1 },
  { id: 'quiz-10', title: 'QUIZ MACHINE', desc: 'Complete 10 quizzes', icon: '\u{1F9E0}', check: s => (s.quizzesTaken || 0) >= 10 },
  { id: 'quiz-50', title: 'EXAM READY', desc: 'Complete 50 quizzes', icon: '\u{1F3C6}', check: s => (s.quizzesTaken || 0) >= 50 },
  { id: 'perfect', title: 'FLAWLESS', desc: 'Score 100% on a quiz', icon: '\u{1F48E}', check: s => s.perfectQuiz === true },
  { id: 'streak-3', title: 'ON FIRE', desc: '3-day study streak', icon: '\u{1F525}', check: s => (s.streak || 0) >= 3 },
  { id: 'streak-7', title: 'UNSTOPPABLE', desc: '7-day study streak', icon: '\u26A1', check: s => (s.streak || 0) >= 7 },
  { id: 'streak-14', title: 'TWO WEEKS', desc: '14-day study streak', icon: '\u{1F31F}', check: s => (s.streak || 0) >= 14 },
  { id: 'streak-30', title: 'IRON WILL', desc: '30-day study streak', icon: '\u{1F480}', check: s => (s.streak || 0) >= 30 },
  { id: 'cards-50', title: 'CARD SHARK', desc: 'Review 50 flashcards', icon: '\u{1F0CF}', check: s => Object.keys(getSpacedRepData()).length >= 50 },
  { id: 'cards-200', title: 'MEMORY PALACE', desc: 'Review 200 flashcards', icon: '\u{1F3DB}\uFE0F', check: s => Object.keys(getSpacedRepData()).length >= 200 },
  { id: 'study-60', title: 'HOUR POWER', desc: 'Study for 60 minutes total', icon: '\u23F1\uFE0F', check: s => (s.totalMinutes || 0) >= 60 },
  { id: 'study-300', title: 'MARATHON', desc: 'Study for 5 hours total', icon: '\u{1F3C3}', check: s => (s.totalMinutes || 0) >= 300 },
  { id: 'xp-1000', title: 'XP HUNTER', desc: 'Earn 1,000 XP', icon: '\u2B50', check: s => (s.xp || 0) >= 1000 },
  { id: 'xp-5000', title: 'XP LEGEND', desc: 'Earn 5,000 XP', icon: '\u{1F320}', check: s => (s.xp || 0) >= 5000 },
  { id: 'level-5', title: 'HALFWAY', desc: 'Reach Level 5', icon: '\u{1F396}\uFE0F', check: s => getLevel(s.xp || 0).level >= 5 },
  { id: 'level-10', title: 'ELITE STATUS', desc: 'Reach Level 10', icon: '\u{1F451}', check: s => getLevel(s.xp || 0).level >= 10 },
  { id: 'all-topics', title: 'WELL ROUNDED', desc: 'Quiz in all 8 topics', icon: '\u{1F30D}', check: s => Object.keys(s.quizScores || {}).length >= 8 },
  { id: 'daily-goal', title: 'DAILY GRIND', desc: 'Hit your daily XP goal', icon: '\u2705', check: s => getDailyXP(s) >= 200 },
];

function getLevel(xp) {
  let current = LEVELS[0];
  for (const lvl of LEVELS) {
    if (xp >= lvl.xp) current = lvl;
    else break;
  }
  const nextIdx = LEVELS.findIndex(l => l.level === current.level) + 1;
  const next = LEVELS[nextIdx] || null;
  const progress = next ? ((xp - current.xp) / (next.xp - current.xp)) * 100 : 100;
  return { ...current, xp: xp, xpToNext: next ? next.xp - xp : 0, progress: Math.min(progress, 100), next };
}

function getDailyXP(stats) {
  const today = new Date().toISOString().split('T')[0];
  return (stats.dailyXP && stats.dailyXP[today]) || 0;
}

function addXP(amount, reason) {
  const stats = getStats();
  stats.xp = (stats.xp || 0) + amount;
  const today = new Date().toISOString().split('T')[0];
  if (!stats.dailyXP) stats.dailyXP = {};
  stats.dailyXP[today] = (stats.dailyXP[today] || 0) + amount;
  const unlocked = stats.achievements || [];
  const newAchievements = [];
  ACHIEVEMENTS.forEach(a => {
    if (!unlocked.includes(a.id) && a.check(stats)) {
      unlocked.push(a.id);
      newAchievements.push(a);
    }
  });
  stats.achievements = unlocked;
  saveStats(stats);
  return { totalXP: stats.xp, gained: amount, reason, newAchievements };
}

function getUnlockedAchievements() {
  const stats = getStats();
  return (stats.achievements || []).map(id => ACHIEVEMENTS.find(a => a.id === id)).filter(Boolean);
}

function getTopicQuizCount(topic) {
  if (topic.quizzes && topic.quizzes.length > 0) return topic.quizzes.length;
  return (topic.sections || []).reduce((sum, s) => sum + (s.quiz ? s.quiz.length : 0), 0);
}

// ============================================================
// MAIN APP COMPONENT
// ============================================================
export default function App() {
  const [view, setView] = useState('home');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [xpToasts, setXpToasts] = useState([]);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('geo-dark-mode') === 'true');

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
    localStorage.setItem('geo-dark-mode', darkMode);
  }, [darkMode]);

  const showXPToast = useCallback((amount, reason, achievements = []) => {
    const id = Date.now();
    setXpToasts(prev => [...prev, { id, amount, reason, achievements }]);
    setTimeout(() => setXpToasts(prev => prev.filter(t => t.id !== id)), 3000);
  }, []);

  // Search functionality
  useEffect(() => {
    if (!searchQuery.trim()) { setSearchResults([]); return; }
    const q = searchQuery.toLowerCase();
    const results = [];
    topics.forEach(topic => {
      topic.sections.forEach(section => {
        section.notes.forEach(note => {
          if (note.toLowerCase().includes(q)) {
            results.push({ topic, section, note, type: 'note' });
          }
        });
        section.keyTerms.forEach(kt => {
          if (kt.term.toLowerCase().includes(q) || kt.def.toLowerCase().includes(q)) {
            results.push({ topic, section, term: kt, type: 'term' });
          }
        });
      });
    });
    setSearchResults(results.slice(0, 20));
  }, [searchQuery]);

  const navigateTo = useCallback((v, topic = null, section = null) => {
    setView(v);
    setSelectedTopic(topic);
    setSelectedSection(section);
    setMobileMenuOpen(false);
    setShowSearch(false);
    window.scrollTo(0, 0);
  }, []);

  const navItems = [
    { v: 'home', label: 'Home', icon: <Home size={16} /> },
    { v: 'flashcards', label: 'Flashcards', icon: <Layers size={16} /> },
    { v: 'quiz', label: 'Quiz', icon: <Brain size={16} /> },
    { v: 'timer', label: 'Timer', icon: <Timer size={16} /> },
    { v: 'mindmaps', label: 'Mindmaps', icon: <Map size={16} /> },
    { v: 'stats', label: 'Stats', icon: <BarChart3 size={16} /> },
  ];

  return (
    <div className="app">
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <button className="nav-brand" onClick={() => navigateTo('home')}>
            GeoRevise
          </button>

          <div className="nav-links">
            {navItems.map(item => (
              <button
                key={item.v}
                className={`nav-link${view === item.v ? ' active' : ''}`}
                onClick={() => navigateTo(item.v)}
              >
                {item.icon} <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="nav-right">
            <button className="nav-theme-btn" onClick={() => setDarkMode(d => !d)} aria-label="Toggle dark mode">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="nav-search-btn" onClick={() => setShowSearch(!showSearch)}>
              <Search size={18} />
            </button>
            <button className="nav-mobile-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Search bar */}
        {showSearch && (
          <div className="search-bar">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search topics, terms, case studies..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button onClick={() => { setShowSearch(false); setSearchQuery(''); }}>
              <X size={16} />
            </button>
            {searchResults.length > 0 && (
              <div className="search-results">
                {searchResults.map((r, i) => (
                  <button key={i} className="search-result" onClick={() => {
                    navigateTo('study', r.topic, r.section);
                    setSearchQuery('');
                  }}>
                    <span className="sr-topic" style={{ color: r.topic.color }}>{r.topic.title}</span>
                    <span className="sr-section">{r.section.title}</span>
                    <span className="sr-text">
                      {r.type === 'term' ? `${r.term.term}: ${r.term.def}` : r.note.substring(0, 100) + '...'}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            {navItems.map(item => (
              <button
                key={item.v}
                className={view === item.v ? 'active' : ''}
                onClick={() => navigateTo(item.v)}
              >
                {item.icon} {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* MAIN CONTENT */}
      <main className="main">
        {view === 'home' && <HomeView navigateTo={navigateTo} />}
        {view === 'topicHub' && selectedTopic && (
          <TopicHub topic={selectedTopic} navigateTo={navigateTo} />
        )}
        {view === 'learn' && selectedTopic && (
          <LearnView topic={selectedTopic} navigateTo={navigateTo} showXPToast={showXPToast} />
        )}
        {view === 'study' && selectedTopic && selectedSection && (
          <StudyView topic={selectedTopic} section={selectedSection} navigateTo={navigateTo} />
        )}
        {view === 'quiz' && (
          <QuizView
            topic={selectedTopic}
            navigateTo={navigateTo}
            showXPToast={showXPToast}
          />
        )}
        {view === 'exam' && selectedTopic && (
          <ExamView topic={selectedTopic} navigateTo={navigateTo} showXPToast={showXPToast} />
        )}
        {view === 'mindmaps' && <MindmapView navigateTo={navigateTo} />}
        {view === 'flashcards' && <FlashcardsView navigateTo={navigateTo} showXPToast={showXPToast} />}
        {view === 'timer' && <TimerView />}
        {view === 'stats' && <StatsView />}
      </main>

      {/* XP Toast Notifications */}
      <div className="xp-toast-container">
        {xpToasts.map(toast => (
          <div key={toast.id} className="xp-toast">
            <Zap size={18} className="xp-toast-icon" />
            <span className="xp-toast-amount">+{toast.amount} XP</span>
            <span className="xp-toast-reason">{toast.reason}</span>
            {toast.achievements.map(a => (
              <div key={a.id} className="xp-toast-achievement">
                <span>{a.icon}</span> {a.title} UNLOCKED!
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// EXPORTS
// ============================================================
export {
  getStats,
  saveStats,
  recordStudyTime,
  recordQuizScore,
  calculateStreak,
  getSpacedRepData,
  setSpacedRepData,
  getNextReview,
  reviewCard,
  getDueCards,
  XP_ACTIONS,
  LEVELS,
  ACHIEVEMENTS,
  getLevel,
  getDailyXP,
  addXP,
  getUnlockedAchievements,
  getTopicQuizCount,
  getAllFlashcards,
  getAllQuizzes,
  topics,
  iconMap,
};
