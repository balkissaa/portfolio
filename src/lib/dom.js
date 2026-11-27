/** Small DOM helpers. */

export const $ = (selector, root = document) => root.querySelector(selector);

export const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const HTML_ENTITIES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

/** Escapes a value so it can be interpolated safely into an HTML string. */
export const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (character) => HTML_ENTITIES[character]);

/** Marks the button at `activeIndex` as pressed and releases the others. */
export function setPressed(buttons, activeIndex) {
  buttons.forEach((button, index) => button.setAttribute('aria-pressed', index === activeIndex));
}
