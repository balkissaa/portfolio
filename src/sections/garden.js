/**
 * Hero garden: an SVG scene whose flowers are links to the page sections.
 * The grass and the small blooms are placed by a seeded generator, so the
 * garden looks the same on every visit.
 */
import { flowers } from '../data/garden.js';
import { $, $$, escapeHtml } from '../lib/dom.js';
import { translate } from '../lib/i18n.js';

const VIEW_WIDTH = 1000;
const GROUND_Y = 440;
const RANDOM_SEED = 7;
const GRASS_BLADES = 34;
const SMALL_BLOOMS = 22;
const LABEL_MAX_Y = 420;

/** Park-Miller generator: deterministic numbers between 0 and 1. */
function createRandom(seed) {
  let state = seed;
  return () => {
    state = (state * 16807) % 2147483647;
    return state / 2147483647;
  };
}

function grassMarkup(random) {
  let markup = '';
  for (let index = 0; index < GRASS_BLADES; index++) {
    const x = random() * VIEW_WIDTH;
    const height = 30 + random() * 70;
    const controlX = x + (random() - 0.5) * 30;
    const tipX = x + (random() - 0.5) * 24;
    markup += `<path d="M${x.toFixed(0)} ${GROUND_Y} Q${controlX.toFixed(0)} ${GROUND_Y - height / 2} ${tipX.toFixed(0)} ${(GROUND_Y - height).toFixed(0)}" stroke="var(--leaf)" stroke-width="3" fill="none" opacity=".55"/>`;
  }
  return markup;
}

function smallBloomsMarkup(random) {
  let markup = '';
  for (let index = 0; index < SMALL_BLOOMS; index++) {
    const x = (random() * VIEW_WIDTH).toFixed(0);
    const y = (360 + random() * 70).toFixed(0);
    const radius = 5 + random() * 6;
    const color = random() > 0.5 ? '--blush' : '--caramel';
    markup += `<g opacity=".8"><circle cx="${x}" cy="${y}" r="${radius.toFixed(1)}" fill="var(${color})"/><circle cx="${x}" cy="${y}" r="${(radius / 2.6).toFixed(1)}" fill="var(--bg)"/></g>`;
  }
  return markup;
}

/** Dashed arrow pointing from the hint text to the first flower. */
function arrowMarkup() {
  return (
    '<path class="garden__arrow" d="M40 20 C 40 90, 70 120, 80 160"/>' +
    '<path class="garden__arrow garden__arrow--head" d="M68 148 L 80 160 L 88 140"/>'
  );
}

function petalsMarkup({ petalCount, petalColor, innerColor, radius }) {
  const step = 360 / petalCount;
  const outerWidth = radius * (petalCount > 8 ? 0.24 : 0.36);
  let outer = '';
  let inner = '';
  for (let index = 0; index < petalCount; index++) {
    outer += `<ellipse cx="0" cy="${-radius * 0.55}" rx="${outerWidth.toFixed(1)}" ry="${(radius * 0.58).toFixed(1)}" transform="rotate(${step * index})" fill="var(${petalColor})"/>`;
    inner += `<ellipse cx="0" cy="${-radius * 0.36}" rx="${(radius * 0.18).toFixed(1)}" ry="${(radius * 0.36).toFixed(1)}" transform="rotate(${step * index + step / 2})" fill="var(${innerColor})" opacity=".75"/>`;
  }
  return outer + inner;
}

function flowerMarkup(flower, index) {
  const { x, stemHeight, radius } = flower;
  const top = GROUND_Y - stemHeight;
  // Stems and leaves alternate sides so the garden does not look combed.
  const side = index % 2 ? -1 : 1;
  const stemControlX = x - side * 28;
  const leafY = top + stemHeight * 0.72;
  const labelY = Math.min(top + radius + 44, LABEL_MAX_Y);
  const label = escapeHtml(translate(flower.label));

  return `<g class="flower" tabindex="0" role="link" aria-label="${label}" data-target="${flower.target}">
    <g class="flower__sway" style="transform-origin:${x}px ${GROUND_Y}px;animation-delay:${-index * 1.3}s">
      <path d="M${x} ${GROUND_Y} Q${stemControlX} ${GROUND_Y - stemHeight / 2} ${x} ${top}" stroke="var(--leaf)" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M${x - side * 4} ${leafY} q${side * 46} -18 ${side * 58} -50 q${-side * 40} 4 ${-side * 58} 50z" fill="var(--leaf)"/>
      <g transform="translate(${x} ${top})">
        <circle class="flower__pulse" r="${radius * 1.05}" style="animation-delay:${index * 0.45}s"/>
        <g class="flower__head">
          <g class="flower__bloom" style="animation-delay:${0.15 + index * 0.18}s">
            ${petalsMarkup(flower)}
            <circle r="${(radius * 0.26).toFixed(1)}" fill="var(--caramel)"/>
            <circle r="${(radius * 0.12).toFixed(1)}" cx="${-radius * 0.06}" cy="${-radius * 0.06}" fill="var(--bg)" opacity=".5"/>
          </g>
        </g>
      </g>
    </g>
    <rect class="flower__pill" rx="20"/>
    <text class="flower__label" x="${x}" y="${labelY}" text-anchor="middle">${label}</text>
  </g>`;
}

export function setupGarden() {
  const garden = $('#garden');

  /** Wraps each label in a pill sized from the rendered text. */
  const sizePills = () => {
    $$('.flower', garden).forEach((flower) => {
      const pill = $('.flower__pill', flower);
      try {
        const box = $('.flower__label', flower).getBBox();
        pill.setAttribute('x', box.x - 16);
        pill.setAttribute('y', box.y - 4);
        pill.setAttribute('width', box.width + 32);
        pill.setAttribute('height', box.height + 8);
        pill.setAttribute('rx', (box.height + 8) / 2);
      } catch {
        // getBBox() throws while the SVG is not rendered; the next resize retries.
      }
    });
  };

  const visit = (flower) => {
    document.getElementById(flower.dataset.target)?.scrollIntoView({ behavior: 'smooth' });
  };

  garden.addEventListener('click', (event) => {
    const flower = event.target.closest('.flower');
    if (flower) visit(flower);
  });
  garden.addEventListener('keydown', (event) => {
    const flower = event.target.closest('.flower');
    if (flower && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      visit(flower);
    }
  });

  // Labels change size once the web font is loaded and when the layout changes.
  document.fonts?.ready.then(sizePills);
  new ResizeObserver(sizePills).observe(garden);

  return function render() {
    const random = createRandom(RANDOM_SEED);
    garden.innerHTML =
      grassMarkup(random) +
      smallBloomsMarkup(random) +
      arrowMarkup() +
      flowers.map(flowerMarkup).join('');
    sizePills();
  };
}
