import { useState } from 'react';
import { getTopicQuizCount } from '../App';
import {
  Mountain, Snowflake, Waves, Globe, Building2, Shield, Plane, Droplets, Flame,
  Lightbulb, BookOpen, Brain, FileText, ArrowLeft, ChevronRight, ChevronDown,
  ChevronUp, ExternalLink, Youtube, Layers, Hash
} from 'lucide-react';

const iconMap = { Mountain, Snowflake, Waves, Globe, Building2, Shield, Plane, Droplets, Flame };

export default function TopicHub({ topic, navigateTo }) {
  const [expandedSection, setExpandedSection] = useState(null);

  if (!topic) return null;

  const IconComponent = iconMap[topic.icon];
  const quizCount = getTopicQuizCount(topic);
  const sections = topic.sections || [];
  const totalTerms = sections.reduce(
    (sum, s) => sum + (s.keyTerms ? s.keyTerms.length : 0),
    0
  );
  const totalNotes = sections.reduce(
    (sum, s) => sum + (s.notes ? s.notes.length : 0),
    0
  );

  const modes = [
    {
      key: 'learn',
      title: 'Learn',
      subtitle: 'Guided Learning',
      description: 'Work through content step by step',
      icon: Lightbulb,
      action: () => navigateTo('learn', topic),
    },
    {
      key: 'study',
      title: 'Study',
      subtitle: 'Notes & Key Terms',
      description: `${sections.length} sections, ${totalTerms} terms`,
      icon: BookOpen,
      action: () => {
        if (sections.length > 0) navigateTo('study', topic, sections[0]);
      },
    },
    {
      key: 'quiz',
      title: 'Quiz',
      subtitle: 'Multiple Choice',
      description: `${quizCount} questions`,
      icon: Brain,
      action: () => navigateTo('quiz', topic),
    },
    {
      key: 'exam',
      title: 'Exam Practice',
      subtitle: 'Written Questions',
      description: '6, 12 & 20 mark questions',
      icon: FileText,
      action: () => navigateTo('exam', topic),
    },
  ];

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="topic-hub" style={{ '--topic-color': topic.color }}>
      {/* Topic Header */}
      <div className="topic-hub-header">
        <button
          className="topic-hub-back"
          onClick={() => navigateTo('home')}
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>
        <div className="topic-hub-title-row">
          <div
            className="topic-hub-icon-wrap"
            style={{ backgroundColor: `${topic.color}15`, color: topic.color }}
          >
            {IconComponent && <IconComponent size={24} />}
          </div>
          <div className="topic-hub-title-text">
            <h1 className="topic-hub-title">{topic.title}</h1>
            <span
              className="topic-hub-unit-badge"
              style={{
                backgroundColor: `${topic.color}15`,
                color: topic.color,
                borderColor: `${topic.color}30`,
              }}
            >
              {topic.unit}
            </span>
          </div>
        </div>
        <div className="topic-hub-meta">
          <span>{sections.length} sections</span>
          <span className="topic-hub-meta-dot" />
          <span>{totalTerms} key terms</span>
          <span className="topic-hub-meta-dot" />
          <span>{totalNotes} notes</span>
        </div>
      </div>

      {/* Study Mode Cards */}
      <div className="topic-hub-section-label">Study Modes</div>
      <div className="topic-hub-modes-grid">
        {modes.map((mode) => {
          const ModeIcon = mode.icon;
          return (
            <button
              key={mode.key}
              className="topic-hub-mode-card"
              onClick={mode.action}
            >
              <div className="topic-hub-mode-accent" />
              <div className="topic-hub-mode-content">
                <div className="topic-hub-mode-icon-row">
                  <div
                    className="topic-hub-mode-icon-wrap"
                    style={{
                      backgroundColor: `${topic.color}15`,
                      color: topic.color,
                    }}
                  >
                    <ModeIcon size={20} />
                  </div>
                </div>
                <h3 className="topic-hub-mode-title">{mode.title}</h3>
                <p className="topic-hub-mode-subtitle">{mode.subtitle}</p>
                <p className="topic-hub-mode-desc">{mode.description}</p>
              </div>
              <ChevronRight size={16} className="topic-hub-mode-arrow" />
            </button>
          );
        })}
      </div>

      {/* Section List Accordion */}
      <div className="topic-hub-section-label">Sections</div>
      <div className="topic-hub-sections-list">
        {sections.map((section, idx) => {
          const isExpanded = expandedSection === section.id;
          const termCount = section.keyTerms ? section.keyTerms.length : 0;
          const noteCount = section.notes ? section.notes.length : 0;

          return (
            <div key={section.id} className="topic-hub-section-item">
              <button
                className="topic-hub-section-header"
                onClick={() => toggleSection(section.id)}
              >
                <div className="topic-hub-section-header-left">
                  <span
                    className="topic-hub-section-number"
                    style={{ color: topic.color }}
                  >
                    {idx + 1}
                  </span>
                  <div className="topic-hub-section-info">
                    <h4 className="topic-hub-section-title">{section.title}</h4>
                    <div className="topic-hub-section-counts">
                      <span>
                        <Hash size={12} />
                        {termCount} terms
                      </span>
                      <span>
                        <Layers size={12} />
                        {noteCount} notes
                      </span>
                    </div>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronUp size={16} className="topic-hub-section-chevron" />
                ) : (
                  <ChevronDown size={16} className="topic-hub-section-chevron" />
                )}
              </button>
              {isExpanded && (
                <div className="topic-hub-section-expanded">
                  {termCount > 0 && (
                    <div className="topic-hub-section-terms-preview">
                      <p className="topic-hub-section-terms-label">Key Terms</p>
                      <div className="topic-hub-section-term-chips">
                        {section.keyTerms.slice(0, 6).map((kt) => (
                          <span key={kt.term} className="topic-hub-term-chip">
                            {kt.term}
                          </span>
                        ))}
                        {termCount > 6 && (
                          <span className="topic-hub-term-chip topic-hub-term-more">
                            +{termCount - 6} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  <button
                    className="topic-hub-section-study-btn"
                    style={{
                      backgroundColor: `${topic.color}15`,
                      color: topic.color,
                      borderColor: `${topic.color}30`,
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateTo('study', topic, section);
                    }}
                  >
                    <BookOpen size={14} />
                    Study this section
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* YouTube Resources */}
      {topic.youtubeLinks && topic.youtubeLinks.length > 0 && (
        <>
          <div className="topic-hub-section-label">
            <Youtube size={16} />
            Video Resources
          </div>
          <div className="topic-hub-youtube-list">
            {topic.youtubeLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="topic-hub-youtube-card"
              >
                <div className="topic-hub-youtube-icon">
                  <Youtube size={18} />
                </div>
                <div className="topic-hub-youtube-info">
                  <h4 className="topic-hub-youtube-title">{link.title}</h4>
                  {link.duration && (
                    <span className="topic-hub-youtube-duration">
                      {link.duration}
                    </span>
                  )}
                </div>
                <ExternalLink size={14} className="topic-hub-youtube-external" />
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
