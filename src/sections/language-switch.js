/** FR / EN buttons of the navigation bar. */
import { $$ } from '../lib/dom.js';
import { getLanguage, setLanguage } from '../lib/i18n.js';

export function setupLanguageSwitch() {
  const buttons = $$('.language-switch [data-language]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });

  return function render() {
    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', button.dataset.language === getLanguage());
    });
  };
}
