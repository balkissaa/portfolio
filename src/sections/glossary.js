/** Jargon cards: click a card to flip it; only one stays flipped. */
import { glossary, glossaryHint } from '../data/research.js';
import { $, $$, escapeHtml } from '../lib/dom.js';
import { translate } from '../lib/i18n.js';

function cardMarkup(entry) {
  return `<button type="button" class="flip-card" aria-pressed="false">
    <span class="flip-card__inner">
      <span class="flip-card__front">
        <span class="flip-card__tag">${escapeHtml(translate(entry.category))}</span>
        <b>${escapeHtml(translate(entry.term))}</b>
        <small>${escapeHtml(translate(glossaryHint))}</small>
      </span>
      <span class="flip-card__back">${escapeHtml(translate(entry.definition))}</span>
    </span>
  </button>`;
}

export function setupGlossary() {
  const container = $('#glossary');

  const setFlipped = (card, isFlipped) => {
    card.classList.toggle('is-flipped', isFlipped);
    card.setAttribute('aria-pressed', isFlipped);
  };

  container.addEventListener('click', (event) => {
    const card = event.target.closest('.flip-card');
    if (!card) return;
    const isFlipped = !card.classList.contains('is-flipped');
    $$('.flip-card.is-flipped', container).forEach((other) => setFlipped(other, false));
    setFlipped(card, isFlipped);
  });

  return function render() {
    container.innerHTML = glossary.map(cardMarkup).join('');
  };
}
