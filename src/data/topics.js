// ========================================
// GEOHACK - Complete Edexcel A-Level Geography Data
// Restructured by Enquiry Questions
// ========================================

import { topicTectonics } from './topic-tectonics.js';
import { topicCoastal } from './topic-coastal.js';
import { topicGlobalisation } from './topic-globalisation.js';
import { topicDiversePlaces } from './topic-diverse-places.js';
import { topicWater } from './topic-water.js';
import { topicCarbon } from './topic-carbon.js';
import { topicSuperpowers } from './topic-superpowers.js';
import { topicMigration } from './topic-migration.js';

export const topics = [
  topicTectonics,
  topicCoastal,
  topicGlobalisation,
  topicDiversePlaces,
  topicWater,
  topicCarbon,
  topicSuperpowers,
  topicMigration,
];

export function getAllFlashcards() {
  const cards = [];
  topics.forEach(topic => {
    topic.sections.forEach(section => {
      section.keyTerms.forEach(kt => {
        cards.push({
          id: `${section.id}-${kt.term.replace(/\s/g, '-').toLowerCase()}`,
          term: kt.term,
          definition: kt.def,
          topicId: topic.id,
          topicTitle: topic.title,
          section: section.title,
          color: topic.color,
        });
      });
    });
  });
  return cards;
}

export function getAllQuizzes() {
  const quizzes = [];
  topics.forEach(topic => {
    // Collect from top-level quizzes array
    const topLevel = topic.quizzes || [];
    // Also collect from section-level quiz arrays
    const sectionLevel = (topic.sections || []).flatMap(s => s.quiz || []);
    // Merge, avoiding duplicates (prefer top-level if both exist)
    const allQs = topLevel.length > 0 ? topLevel : sectionLevel;
    allQs.forEach((quiz, i) => {
      quizzes.push({
        ...quiz,
        id: `${topic.id}-q${i}`,
        topicId: topic.id,
        topicTitle: topic.title,
        color: topic.color,
      });
    });
  });
  return quizzes;
}
