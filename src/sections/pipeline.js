/** Experiment pipeline: six steps, the selected one is explained below. */
import { pipelineSteps } from '../data/research.js';
import { $, $$, escapeHtml, setPressed } from '../lib/dom.js';
import { translate } from '../lib/i18n.js';

export function setupPipeline() {
  const pipeline = $('#pipeline');
  const info = $('#pipeline-info');
  let activeStep = 0;

  const showStep = (index) => {
    activeStep = index;
    const step = pipelineSteps[index];
    setPressed($$('.pipeline__step', pipeline), index);
    info.innerHTML = `<b>${escapeHtml(translate(step.title))}</b><p>${escapeHtml(translate(step.description))}</p>`;
  };

  pipeline.addEventListener('click', (event) => {
    const step = event.target.closest('.pipeline__step');
    if (step) showStep(Number(step.dataset.index));
  });

  return function render() {
    pipeline.innerHTML = pipelineSteps
      .map(
        (step, index) =>
          `<button type="button" class="pipeline__step" data-index="${index}" aria-pressed="false"><b>${index + 1}</b><span>${escapeHtml(translate(step.title))}</span></button>`,
      )
      .join('');
    showStep(activeStep);
  };
}
