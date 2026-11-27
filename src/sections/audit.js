/** Field audit: bias signals by attribute, and the audit-tool trap demo. */
import { biasSignals, trapGapUnit, trapModes } from '../data/research.js';
import { $, $$, escapeHtml, setPressed } from '../lib/dom.js';
import { translate } from '../lib/i18n.js';

function signalMarkup(signal) {
  const color = `var(${signal.color})`;
  return `<div class="signal">
    <b>${escapeHtml(translate(signal.attribute))}</b>
    <em style="color:${color}">${escapeHtml(translate(signal.level))}</em>
    <div class="signal__bar"><span class="signal__fill" style="width:${signal.strength}%;background:${color}"></span></div>
    <span class="note signal__note">${escapeHtml(translate(signal.description))}</span>
  </div>`;
}

export function setupAudit() {
  const signals = $('#signals');
  const tabs = $('#trap-modes');
  let activeMode = 0;

  const showMode = (index) => {
    activeMode = index;
    const mode = trapModes[index];
    setPressed($$('.tab', tabs), index);
    $('#trap-bar-a').style.height = `${mode.groupA}%`;
    $('#trap-bar-b').style.height = `${mode.groupB}%`;
    $('#trap-gap').textContent = mode.groupA - mode.groupB + translate(trapGapUnit);
  };

  tabs.addEventListener('click', (event) => {
    const tab = event.target.closest('.tab');
    if (tab) showMode(Number(tab.dataset.index));
  });

  return function render() {
    signals.innerHTML = biasSignals.map(signalMarkup).join('');
    tabs.innerHTML = trapModes
      .map(
        (mode, index) =>
          `<button type="button" class="tab" data-index="${index}" aria-pressed="false">${escapeHtml(translate(mode.name))}</button>`,
      )
      .join('');
    showMode(activeMode);
  };
}
