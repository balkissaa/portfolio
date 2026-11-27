/** Content of the research section. Figures come from the master's thesis. */

/** The six steps of the experiment. */
export const pipelineSteps = [
  {
    title: { fr: '24 000 CV', en: '24,000 résumés' },
    description: {
      fr: 'CV synthétiques de la base FairCVdb : 19 200 pour apprendre, 4 800 pour valider. Chaque profil a un genre et une origine (noire, asiatique ou caucasienne).',
      en: 'Synthetic résumés from the FairCVdb dataset: 19,200 to learn, 4,800 to validate. Each profile has a gender and an ethnicity (Black, Asian or Caucasian).',
    },
  },
  {
    title: { fr: 'Deux lectures', en: 'Two readers' },
    description: {
      fr: 'La biographie est lue par un réseau LSTM bidirectionnel, qui lit le texte dans les deux sens. Les infos chiffrées passent par une couche dense.',
      en: 'The bio is read by a bidirectional LSTM network, which reads the text in both directions. Numeric fields go through a dense layer.',
    },
  },
  {
    title: { fr: 'Fusion', en: 'Fusion' },
    description: {
      fr: 'Les deux lectures sont combinées dans des couches de neurones pour former une seule représentation du candidat.',
      en: 'Both readings are combined in neural layers into a single representation of the candidate.',
    },
  },
  {
    title: { fr: 'Un score', en: 'A score' },
    description: {
      fr: "Le modèle sort un score d'employabilité entre 0 et 1, comme un outil de présélection automatique.",
      en: 'The model outputs an employability score between 0 and 1, like an automated screening tool.',
    },
  },
  {
    title: { fr: '6 mesures', en: '6 metrics' },
    description: {
      fr: "Parité statistique, égalité des chances, chances moyennes, taux d'erreur, impact disparate et précision : on mesure qui gagne et qui perd.",
      en: 'Statistical parity, equal opportunity, average odds, error rate, disparate impact and accuracy: who wins and who loses.',
    },
  },
  {
    title: { fr: '3 corrections', en: '3 corrections' },
    description: {
      fr: "Avant l'entraînement (Reweighing), pendant (Adversarial Debiasing) et après (Reject Option). Chaque méthode est répétée sur 10 essais.",
      en: 'Before training (Reweighing), during (Adversarial Debiasing) and after (Reject Option). Each method is repeated over 10 runs.',
    },
  },
];

/**
 * Scenarios of the lab, in tab order.
 * - disparateImpact: selection rate of women divided by the rate of men.
 * - accuracy: share of correct predictions.
 * - shortName: label in the before/after chart (correction methods only).
 * - resumeScore: what the biased model says about the second résumé.
 */
export const labScenarios = [
  {
    name: { fr: 'Avant correction', en: 'No correction' },
    disparateImpact: 0.5313,
    accuracy: 0.8258,
    resumeScore: 'lower',
    verdict: {
      fr: 'Le modèle a appris le biais des données : pour 100 hommes retenus, seulement 53 femmes au profil identique.',
      en: 'The model learned the bias in the data: for every 100 men selected, only 53 women with the same profile.',
    },
  },
  {
    name: { fr: "Avant l'entraînement", en: 'Before training' },
    shortName: { fr: 'Corriger avant', en: 'Fix before' },
    disparateImpact: 0.6929,
    accuracy: 0.8425,
    resumeScore: 'reduced',
    verdict: {
      fr: "On rééquilibre le poids des exemples. L'écart baisse et la précision monte un peu : le meilleur compromis.",
      en: 'We rebalance the weight of examples. The gap shrinks and accuracy even rises a little: the best trade-off.',
    },
  },
  {
    name: { fr: "Pendant l'entraînement", en: 'During training' },
    shortName: { fr: 'Corriger pendant', en: 'Fix during' },
    disparateImpact: 0.6573,
    accuracy: 0.7761,
    resumeScore: 'reduced',
    verdict: {
      fr: "Un second réseau tente de deviner le genre et le modèle apprend à l'en empêcher. Gain réel, précision un peu en baisse.",
      en: 'A second network tries to guess gender and the model learns to stop it. A real gain, with slightly lower accuracy.',
    },
  },
  {
    name: { fr: "Après l'entraînement", en: 'After training' },
    shortName: { fr: 'Corriger après', en: 'Fix after' },
    disparateImpact: 0.8826,
    accuracy: 0.5681,
    resumeScore: 'reduced',
    verdict: {
      fr: "On corrige les décisions proches du seuil. Seule méthode sous les 20 % d'écart, mais la précision chute à 57 %.",
      en: 'We adjust decisions close to the threshold. The only method under a 20% gap, but accuracy drops to 57%.',
    },
  },
  {
    name: { fr: 'Données neutres', en: 'Neutral data' },
    disparateImpact: 1.0008,
    accuracy: 0.9187,
    resumeScore: 'high',
    verdict: {
      fr: 'Pour comparer : entraîné sur des données sans biais, le modèle traite tout le monde pareil.',
      en: 'For comparison: trained on unbiased data, the model treats everyone the same.',
    },
  },
];

/** Score stamped on the two résumés of the intro. */
export const resumeScoreLabels = {
  high: { fr: 'Score : élevé', en: 'Score: high' },
  lower: { fr: 'Score : plus bas', en: 'Score: lower' },
  reduced: { fr: 'Score : écart réduit', en: 'Score: gap reduced' },
};

/** How each correction resists proxy variables. */
export const proxyResults = [
  {
    method: { fr: 'Corriger avant', en: 'Fix before' },
    result: { fr: 'Tient bien', en: 'Holds up' },
    description: {
      fr: "Même avec des proxies forts, les résultats restent meilleurs qu'au départ.",
      en: 'Even with strong proxies, results stay better than at the start.',
    },
  },
  {
    method: { fr: 'Corriger pendant', en: 'Fix during' },
    result: { fr: 'Le plus stable', en: 'Most stable' },
    description: {
      fr: "C'est la méthode qui résiste le mieux quand le genre se cache ailleurs.",
      en: 'The method that resists best when gender hides elsewhere.',
    },
  },
  {
    method: { fr: 'Corriger après', en: 'Fix after' },
    result: { fr: 'Fragile', en: 'Fragile' },
    description: {
      fr: 'Elle perd son efficacité dès une corrélation de 0,3 : elle corrige les sorties sans toucher aux causes.',
      en: 'It loses its effect from a 0.3 correlation: it fixes outputs without touching causes.',
    },
  },
];

/** Jargon cards: term on the front, plain-language definition on the back. */
export const glossary = [
  {
    term: { fr: 'Réseau de neurones', en: 'Neural network' },
    category: { fr: 'modèle', en: 'model' },
    definition: {
      fr: "Un programme qui apprend à partir d'exemples en ajustant des milliers de petits réglages, un peu comme on règle une recette en goûtant.",
      en: 'A program that learns from examples by adjusting thousands of tiny settings, a bit like tuning a recipe by tasting.',
    },
  },
  {
    term: { fr: 'LSTM bidirectionnel', en: 'Bidirectional LSTM' },
    category: { fr: 'modèle', en: 'model' },
    definition: {
      fr: 'Un réseau qui lit un texte dans les deux sens pour comprendre chaque mot selon ce qui vient avant et après.',
      en: 'A network that reads text in both directions to understand each word from what comes before and after.',
    },
  },
  {
    term: { fr: 'Parité statistique', en: 'Statistical parity' },
    category: { fr: 'mesure', en: 'metric' },
    definition: {
      fr: "Les hommes et les femmes sont-ils retenus au même taux ? Si oui, l'écart vaut zéro.",
      en: 'Are men and women selected at the same rate? If so, the gap is zero.',
    },
  },
  {
    term: { fr: 'Impact disparate', en: 'Disparate impact' },
    category: { fr: 'mesure', en: 'metric' },
    definition: {
      fr: 'Le rapport entre ces deux taux. Sous 0,8, on parle de discrimination indirecte probable.',
      en: 'The ratio between those two rates. Below 0.8, indirect discrimination is likely.',
    },
  },
  {
    term: { fr: 'Égalité des chances', en: 'Equal opportunity' },
    category: { fr: 'mesure', en: 'metric' },
    definition: {
      fr: "Parmi les bons profils seulement, chaque groupe a-t-il autant de chances d'être reconnu ?",
      en: 'Among qualified profiles only, does each group have the same chance of being recognized?',
    },
  },
  {
    term: { fr: 'Variable proxy', en: 'Proxy variable' },
    category: { fr: 'piège', en: 'trap' },
    definition: {
      fr: "Une info qui semble neutre mais trahit le genre ou l'origine : un prénom, un sport, un quartier.",
      en: 'Information that looks neutral but gives away gender or ethnicity: a first name, a sport, a neighbourhood.',
    },
  },
  {
    term: { fr: 'Reweighing', en: 'Reweighing' },
    category: { fr: 'correction', en: 'correction' },
    definition: {
      fr: "Avant d'apprendre, on donne plus de poids aux exemples sous-représentés pour rééquilibrer.",
      en: 'Before learning, under-represented examples get more weight to rebalance the data.',
    },
  },
  {
    term: { fr: 'Adversarial Debiasing', en: 'Adversarial Debiasing' },
    category: { fr: 'correction', en: 'correction' },
    definition: {
      fr: "Pendant l'apprentissage, un second réseau joue l'adversaire : s'il devine le genre, le premier est pénalisé.",
      en: 'During learning, a second network plays the adversary: if it guesses gender, the first one is penalized.',
    },
  },
  {
    term: { fr: 'Reject Option', en: 'Reject Option' },
    category: { fr: 'correction', en: 'correction' },
    definition: {
      fr: 'Après coup, on revoit les décisions trop proches du seuil, en faveur du groupe désavantagé.',
      en: 'Afterwards, decisions too close to the threshold are revisited in favour of the disadvantaged group.',
    },
  },
];

export const glossaryHint = { fr: 'Toucher pour traduire', en: 'Tap to translate' };

/**
 * Bias signals found in a field audit. `strength` is a qualitative reading on
 * a 0-100 scale, not a figure from the engagement.
 */
export const biasSignals = [
  {
    attribute: { fr: 'Âge', en: 'Age' },
    strength: 92,
    color: '--rose',
    level: { fr: 'Fort', en: 'Strong' },
    description: {
      fr: 'Le signal le plus robuste : les 65 ans et plus sont plus souvent prédits en échec, et le modèle est moins fiable pour eux.',
      en: 'The most robust signal: people 65 and over are more often predicted to fail, and the model is less reliable for them.',
    },
  },
  {
    attribute: { fr: 'Établissement de formation', en: 'Where people studied' },
    strength: 68,
    color: '--caramel',
    level: { fr: 'Préoccupant', en: 'Concerning' },
    description: {
      fr: "Des motifs inquiétants pour les personnes diplômées d'établissements anglophones.",
      en: 'Worrying patterns for graduates of English-language institutions.',
    },
  },
  {
    attribute: { fr: 'Niveau de diplôme', en: 'Degree level' },
    strength: 62,
    color: '--caramel',
    level: { fr: 'Préoccupant', en: 'Concerning' },
    description: {
      fr: 'Des motifs inquiétants pour les personnes sans diplôme déclaré.',
      en: 'Worrying patterns for people with no declared degree.',
    },
  },
  {
    attribute: { fr: 'Sexe', en: 'Sex' },
    strength: 22,
    color: '--leaf',
    level: { fr: 'Faible', en: 'Weak' },
    description: {
      fr: 'Un biais faible, cohérent avec la population réelle.',
      en: 'A weak bias, consistent with the real population.',
    },
  },
];

/**
 * Illustrative example of the audit-tool trap: the same model measured two
 * ways. Values are the scores of group A and group B, in percent.
 */
export const trapModes = [
  { name: { fr: 'Moyenne pondérée', en: 'Weighted average' }, groupA: 91, groupB: 88 },
  { name: { fr: 'Classe « échec » ciblée', en: 'Targeted "fail" class' }, groupA: 80, groupB: 55 },
];

export const trapGapUnit = { fr: ' points', en: ' pts' };
