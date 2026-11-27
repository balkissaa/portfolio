/**
 * Language state for the bilingual page.
 *
 * Static text lives twice in index.html ([lang="fr"] and [lang="en"]) and is
 * switched by CSS from the lang attribute of <html>. Text rendered from the
 * data modules is written as `{ fr, en }` objects and resolved by translate().
 */
import { DEFAULT_LANGUAGE, LANGUAGES, LANGUAGE_STORAGE_KEY } from '../config.js';

const listeners = new Set();
let currentLanguage = readStoredLanguage();

function readStoredLanguage() {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (LANGUAGES.includes(stored)) return stored;
  } catch {
    // Storage can be unavailable (private mode, blocked cookies).
  }
  return DEFAULT_LANGUAGE;
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  listeners.forEach((listener) => listener(currentLanguage));
}

export const getLanguage = () => currentLanguage;

/** Returns the text for the current language; plain strings pass through. */
export const translate = (text) => (typeof text === 'string' ? text : text[currentLanguage]);

/** Registers a callback run on start and on every language change. */
export function onLanguageChange(listener) {
  listeners.add(listener);
}

export function setLanguage(language) {
  if (!LANGUAGES.includes(language)) return;
  currentLanguage = language;
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Not being able to remember the choice is not an error.
  }
  applyLanguage();
}

/** Applies the initial language once every listener is registered. */
export function startLanguage() {
  applyLanguage();
}
