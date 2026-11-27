/**
 * Entry point. Each section module sets up its event listeners once and
 * returns a render function, called on start and on every language change.
 */
import { onLanguageChange, startLanguage } from './lib/i18n.js';
import { setupAudit } from './sections/audit.js';
import { setupContact } from './sections/contact.js';
import { setupGarden } from './sections/garden.js';
import { setupGlossary } from './sections/glossary.js';
import { setupJourney } from './sections/journey.js';
import { setupLab } from './sections/lab.js';
import { setupLanguageSwitch } from './sections/language-switch.js';
import { setupPipeline } from './sections/pipeline.js';
import { setupPortrait } from './sections/portrait.js';
import { setupProxyCards } from './sections/proxy-cards.js';
import { setupTalks } from './sections/talks.js';

const sections = [
  setupLanguageSwitch,
  setupPortrait,
  setupGarden,
  setupJourney,
  setupPipeline,
  setupLab,
  setupProxyCards,
  setupGlossary,
  setupAudit,
  setupTalks,
  setupContact,
];

sections.forEach((setup) => onLanguageChange(setup()));
startLanguage();
