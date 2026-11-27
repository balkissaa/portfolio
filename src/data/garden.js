/**
 * Flowers of the hero garden. Each one links to a page section.
 * Coordinates are in the SVG viewBox (1000 x 440, ground at y = 440).
 */
export const flowers = [
  {
    x: 130,
    stemHeight: 250,
    petalCount: 6,
    petalColor: '--blush',
    innerColor: '--rose',
    radius: 46,
    label: { fr: 'Qui je suis', en: 'About me' },
    target: 'moi',
  },
  {
    x: 300,
    stemHeight: 330,
    petalCount: 8,
    petalColor: '--rose',
    innerColor: '--caramel',
    radius: 56,
    label: { fr: 'Parcours', en: 'Experience' },
    target: 'parcours',
  },
  {
    x: 500,
    stemHeight: 300,
    petalCount: 5,
    petalColor: '--caramel',
    innerColor: '--rose',
    radius: 52,
    label: { fr: 'Publications', en: 'Publications' },
    target: 'publications',
  },
  {
    x: 700,
    stemHeight: 335,
    petalCount: 12,
    petalColor: '--blush',
    innerColor: '--rose',
    radius: 66,
    label: { fr: 'Recherche', en: 'Research' },
    target: 'recherche',
  },
  {
    x: 870,
    stemHeight: 340,
    petalCount: 7,
    petalColor: '--rose',
    innerColor: '--blush',
    radius: 54,
    label: { fr: 'Sur scène', en: 'Speaking' },
    target: 'scene',
  },
];
