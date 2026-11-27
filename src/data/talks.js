/** Talks, panels, teaching and online presence. */

/** Filter categories, in display order. */
export const talkCategories = {
  talks: { fr: 'Conférences', en: 'Talks' },
  panels: { fr: 'Panels', en: 'Panels' },
  community: { fr: 'Communauté', en: 'Community' },
  teaching: { fr: 'Enseignement', en: 'Teaching' },
  online: { fr: 'En ligne', en: 'Online' },
};

export const allCategoriesLabel = { fr: 'Tout', en: 'All' };

/**
 * `award` adds a highlighted badge; `upcoming` highlights the date of an
 * event that has not happened yet.
 */
export const talks = [
  {
    category: 'talks',
    kind: { fr: 'Concours de vulgarisation', en: 'Science communication contest' },
    award: { fr: '🏆 Prix du public', en: '🏆 Audience Award' },
    title: { fr: 'Mon projet IVADO en 180 secondes', en: 'My IVADO project in 180 seconds' },
    description: {
      fr: "« L'IA est-elle sexiste et raciste ? » Trois minutes et une seule diapo pour expliquer mon mémoire au grand public. J'ai remporté le prix du public !",
      en: '"Is AI sexist and racist?" Three minutes and a single slide to explain my thesis to the public. I won the Audience Award!',
    },
    date: { fr: '26 novembre 2026', en: 'November 26, 2026' },
  },
  {
    category: 'talks',
    kind: { fr: 'Conférence de vulgarisation', en: 'Public talk' },
    title: 'CRÉ x BistroBrain',
    description: {
      fr: 'Douze minutes pour raconter mes recherches sur les biais en IA, sans jargon, dans un cadre convivial.',
      en: 'Twelve minutes on my AI bias research, jargon-free, in a relaxed setting.',
    },
    date: { fr: '9 décembre 2026', en: 'December 9, 2026' },
    upcoming: true,
  },
  {
    category: 'talks',
    kind: { fr: 'Conférencière', en: 'Speaker' },
    title: 'Women Techmakers Montréal 2025',
    description: {
      fr: "Conférencière à l'édition des 10 ans, « Redefine Possible », dans la série mondiale de Google pour la Journée internationale des femmes. Le thème : l'essor de l'IA et la façon d'éviter qu'elle amplifie les biais de genre.",
      en: 'Speaker at the 10th-anniversary edition, "Redefine Possible", part of Google\'s global International Women\'s Day series. The theme: the rise of AI and how to keep it from amplifying gender bias.',
    },
    date: { fr: '5 avril 2025', en: 'April 5, 2025' },
  },
  {
    category: 'panels',
    kind: { fr: 'Panéliste', en: 'Panelist' },
    title: {
      fr: '« Give to Gain », Society of Women Engineers',
      en: '"Give to Gain", Society of Women Engineers',
    },
    description: {
      fr: "Panel de la Journée internationale des femmes à Polytechnique Montréal, organisé par les réseaux SWE de Montréal : promouvoir la générosité pour plus d'égalité, devant 44 participantes et participants.",
      en: "International Women's Day panel at Polytechnique Montréal, hosted by the SWE Networks in Montréal: promoting generosity to achieve greater equality, with 44 attendees.",
    },
    date: { fr: 'Mars 2026', en: 'March 2026' },
  },
  {
    category: 'community',
    kind: { fr: 'Bénévole', en: 'Volunteer' },
    title: 'Women Techmakers Montréal 2026',
    description: {
      fr: "Bénévole à l'édition 2026, et ambassadrice Google Women Techmakers depuis 2024.",
      en: 'Volunteer at the 2026 edition, and Google Women Techmakers Ambassador since 2024.',
    },
    date: '2026',
  },
  {
    category: 'teaching',
    kind: { fr: 'Conférence invitée', en: 'Guest lecture' },
    title: { fr: 'Dans une classe universitaire', en: 'In a university class' },
    description: {
      fr: 'Présentation aux étudiantes et étudiants sur les biais en IA et ce que les futurs gestionnaires doivent savoir.',
      en: 'A talk to students on AI bias and what future managers need to know.',
    },
    date: { fr: 'Invitée', en: 'Guest' },
  },
  {
    category: 'teaching',
    kind: { fr: 'Accompagnement', en: 'Mentoring' },
    title: { fr: 'Mentorat et marrainage', en: 'Mentoring and sponsorship' },
    description: {
      fr: "Marraine à HEC Montréal et ancienne VP externe d'Enactus HEC : j'accompagne celles et ceux qui arrivent après moi.",
      en: 'Sponsor at HEC Montréal and former VP External of Enactus HEC: I support the people coming up after me.',
    },
    date: { fr: 'Depuis 2023', en: 'Since 2023' },
  },
  {
    category: 'online',
    kind: { fr: 'Création de contenu', en: 'Content creation' },
    title: { fr: '@bykissaa sur TikTok', en: '@bykissaa on TikTok' },
    description: {
      fr: "Tech Unpacked pour vulgariser la tech, et le quotidien d'une spécialiste en données à Montréal.",
      en: 'Tech Unpacked to demystify tech, and daily life as a data specialist in Montréal.',
    },
    date: { fr: 'En cours', en: 'Ongoing' },
  },
];
