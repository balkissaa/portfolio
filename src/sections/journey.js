/** Career timeline: each job is a card that expands to show its details. */
import { jobs } from '../data/journey.js';
import { $, escapeHtml } from '../lib/dom.js';
import { translate } from '../lib/i18n.js';

function highlightMarkup(highlight) {
  if (typeof highlight === 'string') return `<li>${escapeHtml(highlight)}</li>`;
  const items = highlight.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  return `<li>${escapeHtml(highlight.text)}<ul>${items}</ul></li>`;
}

function jobMarkup(job, index, isOpen) {
  const classes = ['job', job.current && 'job--current', isOpen && 'is-open'].filter(Boolean);
  const highlights = translate(job.highlights).map(highlightMarkup).join('');
  const stack = job.stack
    ? `<div class="job__stack">${job.stack.map((tool) => `<span>${escapeHtml(tool)}</span>`).join('')}</div>`
    : '';

  return `<div class="${classes.join(' ')}" data-index="${index}">
    <div class="job__card">
      <button type="button" class="job__header" aria-expanded="${isOpen}">
        <span class="job__toggle-icon" aria-hidden="true">+</span>
        <span class="job__period">${escapeHtml(translate(job.period))}</span>
        <span class="job__title">${escapeHtml(translate(job.title))}</span>
        <span class="job__org">${escapeHtml(translate(job.organisation))}</span>
      </button>
      <div class="job__details"><div><ul>${highlights}</ul>${stack}</div></div>
    </div>
  </div>`;
}

export function setupJourney() {
  const timeline = $('#timeline');
  // The most recent job starts expanded.
  const openJobs = new Set([0]);

  timeline.addEventListener('click', (event) => {
    const header = event.target.closest('.job__header');
    if (!header) return;
    const job = header.closest('.job');
    const index = Number(job.dataset.index);
    const isOpen = !openJobs.has(index);
    if (isOpen) openJobs.add(index);
    else openJobs.delete(index);
    job.classList.toggle('is-open', isOpen);
    header.setAttribute('aria-expanded', isOpen);
  });

  return function render() {
    timeline.innerHTML = jobs
      .map((job, index) => jobMarkup(job, index, openJobs.has(index)))
      .join('');
  };
}
