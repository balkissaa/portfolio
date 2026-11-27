/**
 * Lab: pick a bias-correction method and see its effect on the selection gap
 * between men and women, and on the accuracy of the model.
 */
import { labScenarios, resumeScoreLabels } from '../data/research.js';
import { $, $$, escapeHtml, setPressed } from '../lib/dom.js';
import { translate } from '../lib/i18n.js';

const PEOPLE = 100;
/** Four-fifths rule: under 80 women per 100 men, indirect discrimination is likely. */
const THRESHOLD = 80;

const percent = (ratio) => `${Math.round(ratio * 100)} %`;

/** Selection gap between men and women, as a share of the men's rate. */
const selectionGap = (scenario) => Math.max(0, 1 - scenario.disparateImpact);

function dumbbellMarkup() {
  const [uncorrected, ...others] = labScenarios;
  const before = selectionGap(uncorrected);
  // The track spans gaps from 0 to 50 %, hence the factor 200.
  const position = (gap) => gap * 200;

  return others
    .filter((scenario) => scenario.shortName)
    .map((scenario) => {
      const after = selectionGap(scenario);
      return `<div class="dumbbell__row">
        <span>${escapeHtml(translate(scenario.shortName))}</span>
        <div class="dumbbell__track">
          <span class="dumbbell__threshold" style="left:40%"></span>
          <span class="dumbbell__segment" style="left:${position(after)}%;width:${position(before) - position(after)}%"></span>
          <span class="dumbbell__dot dumbbell__dot--before" style="left:${position(before)}%"></span>
          <span class="dumbbell__dot dumbbell__dot--after" style="left:${position(after)}%"></span>
        </div>
        <span class="dumbbell__value">${Math.round(before * 100)} → ${Math.round((1 - scenario.disparateImpact) * 100)} %</span>
      </div>`;
    })
    .join('');
}

export function setupLab() {
  const tabs = $('#lab-methods');
  const womenGrid = $('#grid-women');
  let activeScenario = 0;

  $('#grid-men').innerHTML = '<span class="is-on"></span>'.repeat(PEOPLE);
  womenGrid.innerHTML = '<span></span>'.repeat(PEOPLE);
  const womenDots = $$('span', womenGrid);

  const showScenario = (index) => {
    activeScenario = index;
    const scenario = labScenarios[index];
    const womenSelected = Math.min(PEOPLE, Math.round(scenario.disparateImpact * 100));

    setPressed($$('.tab', tabs), index);
    womenDots.forEach((dot, position) => {
      dot.classList.toggle('is-on', position < womenSelected);
      dot.classList.toggle('is-threshold', position === THRESHOLD - 1);
    });
    $('#women-count').textContent = womenSelected;
    $('#lab-gap').textContent = percent(selectionGap(scenario));
    $('#accuracy-bar').style.width = `${Math.round(scenario.accuracy * 100)}%`;
    $('#accuracy-value').textContent = percent(scenario.accuracy);
    $('#lab-verdict').textContent = translate(scenario.verdict);
    $('#score-lucas').textContent = translate(resumeScoreLabels.high);
    $('#score-aminata').textContent = translate(resumeScoreLabels[scenario.resumeScore]);
  };

  tabs.addEventListener('click', (event) => {
    const tab = event.target.closest('.tab');
    if (tab) showScenario(Number(tab.dataset.index));
  });

  return function render() {
    tabs.innerHTML = labScenarios
      .map(
        (scenario, index) =>
          `<button type="button" class="tab" data-index="${index}" aria-pressed="false">${escapeHtml(translate(scenario.name))}</button>`,
      )
      .join('');
    showScenario(activeScenario);
    $('#dumbbell').innerHTML = dumbbellMarkup();
  };
}
