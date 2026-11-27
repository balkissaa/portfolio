/** Cards showing how each correction resists proxy variables. */
import { proxyResults } from '../data/research.js';
import { $, escapeHtml } from '../lib/dom.js';
import { translate } from '../lib/i18n.js';

export function setupProxyCards() {
  const container = $('#proxy-cards');

  return function render() {
    container.innerHTML = proxyResults
      .map(
        (proxy) =>
          `<div class="fact"><span class="fact__tag">${escapeHtml(translate(proxy.method))}</span><b>${escapeHtml(translate(proxy.result))}</b><span>${escapeHtml(translate(proxy.description))}</span></div>`,
      )
      .join('');
  };
}
