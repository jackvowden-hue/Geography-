import { useState, useMemo } from 'react';
import { topics } from '../data/topics';
import {
  ChevronRight, ChevronLeft, BookOpen, Eye, EyeOff,
  ExternalLink, Youtube, Layers,
  Mountain, Snowflake, Waves, Globe, Building2, Shield, Plane, Droplets, Flame
} from 'lucide-react';

const iconMap = { Mountain, Snowflake, Waves, Globe, Building2, Shield, Plane, Droplets, Flame };

export default function StudyView({ topic, section, navigateTo }) {
  const [revealedTerms, setRevealedTerms] = useState({});

  // Build flat list of all sections across all topics for prev/next navigation
  const allSections = useMemo(() => {
    const list = [];
    topics.forEach(t => {
      (t.sections || []).forEach(s => {
        list.push({ topic: t, section: s });
      });
    });
    return list;
  }, []);

  const currentIndex = allSections.findIndex(
    item => item.topic.id === topic.id && item.section.id === section.id
  );
  const prevSection = currentIndex > 0 ? allSections[currentIndex - 1] : null;
  const nextSection = currentIndex < allSections.length - 1 ? allSections[currentIndex + 1] : null;

  const toggleTerm = (term) => {
    setRevealedTerms(prev => ({ ...prev, [term]: !prev[term] }));
  };

  const IconComponent = iconMap[topic.icon];

  return (
    <div className="study-view">
      {/* Breadcrumb */}
      <div className="study-breadcrumb">
        <button className="study-breadcrumb-link" onClick={() => navigateTo('home')}>
          Home
        </button>
        <ChevronRight size={14} className="study-breadcrumb-sep" />
        <button
          className="study-breadcrumb-link"
          style={{ color: topic.color }}
          onClick={() => navigateTo('topicHub', topic)}
        >
          {topic.title}
        </button>
        <ChevronRight size={14} className="study-breadcrumb-sep" />
        <span className="study-breadcrumb-current">{section.title}</span>
      </div>

      {/* Section Header */}
      <div className="study-header">
        <div className="study-header-icon" style={{ backgroundColor: `${topic.color}15`, color: topic.color }}>
          {IconComponent && <IconComponent size={28} />}
        </div>
        <div className="study-header-text">
          <h1 className="study-title">{section.title}</h1>
          <p className="study-subtitle" style={{ color: topic.color }}>{topic.title}</p>
        </div>
      </div>

      {/* Notes Section */}
      {section.notes && section.notes.length > 0 && (
        <div className="study-section">
          <div className="study-section-header">
            <BookOpen size={18} />
            <h2 className="study-section-title">Notes</h2>
            <span className="study-section-count">{section.notes.length} notes</span>
          </div>
          <div className="study-notes-list">
            {section.notes.map((note, i) => (
              <div key={i} className="study-note-card">
                <p className="study-note-text">{note}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Key Terms Section */}
      {section.keyTerms && section.keyTerms.length > 0 && (
        <div className="study-section">
          <div className="study-section-header">
            <Layers size={18} />
            <h2 className="study-section-title">Key Terms</h2>
            <span className="study-section-count">{section.keyTerms.length} terms</span>
          </div>
          <div className="study-terms-grid">
            {section.keyTerms.map((kt, i) => {
              const isRevealed = revealedTerms[kt.term];
              return (
                <button
                  key={i}
                  className={`study-term-card${isRevealed ? ' revealed' : ''}`}
                  onClick={() => toggleTerm(kt.term)}
                >
                  <div className="study-term-top">
                    <span className="study-term-name">{kt.term}</span>
                    {isRevealed ? (
                      <EyeOff size={16} className="study-term-icon" />
                    ) : (
                      <Eye size={16} className="study-term-icon" />
                    )}
                  </div>
                  {isRevealed ? (
                    <p className="study-term-def">{kt.def}</p>
                  ) : (
                    <p className="study-term-hint">Click to reveal definition</p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* YouTube Links */}
      {topic.youtubeLinks && topic.youtubeLinks.length > 0 && (
        <div className="study-section">
          <div className="study-section-header">
            <Youtube size={18} />
            <h2 className="study-section-title">Video Resources</h2>
          </div>
          <div className="study-youtube-list">
            {topic.youtubeLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="study-youtube-card"
              >
                <div className="study-youtube-icon">
                  <Youtube size={20} />
                </div>
                <div className="study-youtube-info">
                  <span className="study-youtube-title">{link.title}</span>
                  {link.duration && (
                    <span className="study-youtube-duration">{link.duration}</span>
                  )}
                </div>
                <ExternalLink size={14} className="study-youtube-ext" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Prev / Next Navigation */}
      <div className="study-nav-footer">
        {prevSection ? (
          <button
            className="study-nav-btn study-nav-prev"
            onClick={() => navigateTo('study', prevSection.topic, prevSection.section)}
          >
            <ChevronLeft size={18} />
            <div className="study-nav-btn-text">
              <span className="study-nav-label">Previous</span>
              <span className="study-nav-name">{prevSection.section.title}</span>
            </div>
          </button>
        ) : (
          <div />
        )}
        {nextSection ? (
          <button
            className="study-nav-btn study-nav-next"
            onClick={() => navigateTo('study', nextSection.topic, nextSection.section)}
          >
            <div className="study-nav-btn-text" style={{ textAlign: 'right' }}>
              <span className="study-nav-label">Next</span>
              <span className="study-nav-name">{nextSection.section.title}</span>
            </div>
            <ChevronRight size={18} />
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
