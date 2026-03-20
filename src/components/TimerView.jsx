import { useState, useEffect, useRef, useCallback } from 'react';
import { Timer, PlayCircle, PauseCircle, RotateCcw, Coffee, Brain, Sunset } from 'lucide-react';

const MODES = [
  { key: 'focus', label: 'Focus', duration: 25 * 60, icon: Brain, color: '#10b981' },
  { key: 'short', label: 'Short Break', duration: 5 * 60, icon: Coffee, color: '#8b5cf6' },
  { key: 'long', label: 'Long Break', duration: 15 * 60, icon: Sunset, color: '#3b82f6' },
];

export default function TimerView() {
  const [modeIndex, setModeIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(MODES[0].duration);
  const [isRunning, setIsRunning] = useState(false);
  const [sessions, setSessions] = useState(0);
  const intervalRef = useRef(null);

  const currentMode = MODES[modeIndex];
  const totalDuration = currentMode.duration;
  const progress = ((totalDuration - timeLeft) / totalDuration) * 100;

  // Timer countdown
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            // If focus session complete, increment session count
            if (currentMode.key === 'focus') {
              setSessions(prev => prev + 1);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, timeLeft, currentMode.key]);

  const toggleTimer = () => {
    setIsRunning(prev => !prev);
  };

  const resetTimer = useCallback(() => {
    setIsRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimeLeft(currentMode.duration);
  }, [currentMode.duration]);

  const switchMode = (index) => {
    setIsRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setModeIndex(index);
    setTimeLeft(MODES[index].duration);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeDisplay = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  // Circular progress calculations
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const cycleProgress = sessions % 4;

  return (
    <div className="timer-view">
      <div className="timer-header">
        <Timer size={24} />
        <h1 className="timer-title">Pomodoro Timer</h1>
      </div>

      {/* Mode Tabs */}
      <div className="timer-modes">
        {MODES.map((mode, i) => {
          const ModeIcon = mode.icon;
          return (
            <button
              key={mode.key}
              className={`timer-mode-btn${modeIndex === i ? ' active' : ''}`}
              style={modeIndex === i ? { backgroundColor: `${mode.color}18`, color: mode.color, borderColor: mode.color } : {}}
              onClick={() => switchMode(i)}
            >
              <ModeIcon size={16} />
              {mode.label}
            </button>
          );
        })}
      </div>

      {/* Circular Timer */}
      <div className="timer-circle-container">
        <svg className="timer-circle-svg" viewBox="0 0 280 280" width="280" height="280">
          {/* Background circle */}
          <circle
            cx="140"
            cy="140"
            r={radius}
            fill="none"
            stroke="#1e2030"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <circle
            cx="140"
            cy="140"
            r={radius}
            fill="none"
            stroke={currentMode.color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 140 140)"
            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
          />
        </svg>
        <div className="timer-circle-text">
          <span className="timer-time" style={{ color: currentMode.color }}>{timeDisplay}</span>
          <span className="timer-mode-label">{currentMode.label}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="timer-controls">
        <button className="timer-control-btn timer-reset-btn" onClick={resetTimer}>
          <RotateCcw size={20} />
        </button>
        <button
          className="timer-control-btn timer-play-btn"
          style={{ backgroundColor: currentMode.color }}
          onClick={toggleTimer}
        >
          {isRunning ? <PauseCircle size={28} /> : <PlayCircle size={28} />}
        </button>
        <div className="timer-control-spacer" />
      </div>

      {/* Session Counter */}
      <div className="timer-sessions">
        <h3 className="timer-sessions-title">Sessions</h3>
        <div className="timer-session-dots">
          {[0, 1, 2, 3].map(i => (
            <div
              key={i}
              className={`timer-session-dot${i < cycleProgress ? ' completed' : ''}`}
              style={i < cycleProgress ? { backgroundColor: '#10b981' } : {}}
            />
          ))}
        </div>
        <p className="timer-sessions-info">
          {sessions} session{sessions !== 1 ? 's' : ''} completed
          {sessions > 0 && ` (${Math.floor(sessions / 4)} full cycle${Math.floor(sessions / 4) !== 1 ? 's' : ''})`}
        </p>
      </div>

      {/* Completed message */}
      {timeLeft === 0 && (
        <div className="timer-complete-msg" style={{ borderColor: currentMode.color }}>
          <p className="timer-complete-text">
            {currentMode.key === 'focus'
              ? 'Focus session complete! Take a break.'
              : 'Break is over! Ready for another focus session?'}
          </p>
          <button
            className="timer-complete-btn"
            style={{ backgroundColor: currentMode.color }}
            onClick={() => {
              if (currentMode.key === 'focus') {
                // After focus, suggest break
                const breakType = cycleProgress === 0 ? 2 : 1; // long break every 4 sessions
                switchMode(breakType);
              } else {
                switchMode(0); // back to focus
              }
            }}
          >
            {currentMode.key === 'focus' ? 'Start Break' : 'Start Focus'}
          </button>
        </div>
      )}
    </div>
  );
}
