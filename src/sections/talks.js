/** Talk cards with a category filter. */
import { allCategoriesLabel, talkCategories, talks } from '../data/talks.js';
import { $, $$, escapeHtml, setPressed } from '../lib/dom.js';
import { translate } from '../lib/i18n.js';

const ALL = 'all';

/** Decorative flower drawn in the corner of every card. */
const CARD_FLOWER = `<svg viewBox="-40 -40 80 80" aria-hidden="true">${Array.from(
  { length: 6 },
  (_, index) =>
    `<ellipse cx="0" cy="-18" rx="10" ry="18" transform="rotate(${index * 60})" fill="var(--blush)"/>`,
).join('')}<circle r="9" fill="var(--caramel)"/></svg>`;

function talkMarkup(talk) {
  const award = talk.award
    ? `<span class="talk__award">${escapeHtml(translate(talk.award))}</span>`
    : '';
  const dateClass = talk.upcoming ? 'talk__date talk__date--upcoming' : 'talk__date';

  return `<article class="talk" data-category="${talk.category}">
    ${CARD_FLOWER}
    <span class="talk__kind">${escapeHtml(translate(talk.kind))}</span>
    ${award}
    <h3>${escapeHtml(translate(talk.title))}</h3>
    <p>${escapeHtml(translate(talk.description))}</p>
    <span class="${dateClass}">${escapeHtml(translate(talk.date))}</span>
  </article>`;
}

export function setupTalks() {
  const filters = $('#talk-filters');
  const list = $('#talks');
  const categories = [ALL, ...Object.keys(talkCategories)];
  let activeCategory = ALL;

  const applyFilter = () => {
    setPressed($$('.tab', filters), categories.indexOf(activeCategory));
    $$('.talk', list).forEach((card) => {
      card.hidden = activeCategory !== ALL && card.dataset.category !== activeCategory;
    });
  };

  filters.addEventListener('click', (event) => {
    const tab = event.target.closest('.tab');
    if (!tab) return;
    activeCategory = tab.dataset.category;
    applyFilter();
  });

  return function render() {
    list.innerHTML = talks.map(talkMarkup).join('');
    filters.innerHTML = categories
      .map((category) => {
        const label = category === ALL ? allCategoriesLabel : talkCategories[category];
        return `<button type="button" class="tab" data-category="${category}" aria-pressed="false">${escapeHtml(translate(label))}</button>`;
      })
      .join('');
    applyFilter();
  };
}
