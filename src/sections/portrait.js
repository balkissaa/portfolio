/** Portrait badge of the hero: a ring of petals around the photo. */
import { $ } from '../lib/dom.js';
import { translate } from '../lib/i18n.js';

const PORTRAIT_LABEL = { fr: 'Photo de Balkissa Touré', en: 'Photo of Balkissa Touré' };
const PETAL_COUNT = 12;
const PETAL_ANGLE = 360 / PETAL_COUNT;

function ringMarkup() {
  let petals = '';
  let dots = '';
  for (let index = 0; index < PETAL_COUNT; index++) {
    const color = index % 2 ? '--rose' : '--blush';
    petals += `<ellipse cx="0" cy="-80" rx="13" ry="20" transform="rotate(${index * PETAL_ANGLE})" fill="var(${color})"/>`;
    dots += `<circle cx="0" cy="-93" r="4" transform="rotate(${index * PETAL_ANGLE + PETAL_ANGLE / 2})" fill="var(--caramel)"/>`;
  }
  return petals + dots;
}

export function setupPortrait() {
  const portrait = $('#portrait');
  const image = $('#portrait-image');

  $('#portrait-ring').innerHTML = ringMarkup();

  // Restart the entrance animation when the badge is clicked.
  const replayHop = () => {
    portrait.style.animation = 'none';
    void portrait.offsetWidth; // Force a reflow so the animation restarts.
    portrait.style.animation = '';
  };
  portrait.addEventListener('click', replayHop);
  portrait.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') replayHop();
  });

  // Without the photo, the gradient behind it stays visible.
  const removeBrokenImage = () => image.remove();
  if (image.complete && image.naturalWidth === 0) removeBrokenImage();
  else image.addEventListener('error', removeBrokenImage);

  return function render() {
    portrait.setAttribute('aria-label', translate(PORTRAIT_LABEL));
  };
}
