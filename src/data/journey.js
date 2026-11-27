/**
 * Career timeline, most recent first.
 * A highlight is either a string or `{ text, items }` for a nested list.
 */
export const jobs = [
  {
    current: true,
    period: { fr: 'Depuis mai 2026', en: 'Since May 2026' },
    title: 'Data Engineer, Business Intelligence',
    organisation: 'Cogeco Média, Montréal',
    highlights: {
      fr: [
        "Première personne en ingénierie de données de l'entreprise, aujourd'hui lead technique de l'équipe Données.",
        "Je fais le pont entre les équipes d'affaires, de produit et de TI, et les fournisseurs externes de données et de technologie.",
        "Je recueille les besoins, rédige les exigences fonctionnelles et techniques et dessine les schémas d'architecture avant chaque chantier.",
        "J'ai conçu seule l'architecture et le MVP de la Customer Data Platform sur GCP, de l'idée à la mise en production : plus de 20 propriétés numériques, des dizaines de sources, plus de 2 M de profils unifiés.",
        'Pipelines ETL et ELT en Python et SQL, entrepôt BigQuery en couches raw, staging et curated, automatisés avec Cloud Functions et Cloud Run Jobs.',
        "Segmentation d'audience propriétaire qui transforme les données first-party en produits publicitaires, avec un potentiel estimé à environ 2 M$ de revenus additionnels.",
        {
          text: 'Je développe des agents IA, notamment sur un kit interne basé sur Google ADK. Deux exemples :',
          items: [
            'Un agent qui génère des DAGs Airflow à partir de la documentation : découpage, embeddings Vertex AI, recherche vectorielle dans AlloyDB avec pgvector.',
            "Un agent qui lit des PDF avec l'API Gemini, en extrait des tables et les charge automatiquement dans BigQuery via Cloud Function et Cloud Run Job.",
          ],
        },
      ],
      en: [
        'First data engineering hire at the company, now technical lead of the data team.',
        'I bridge business, product and IT teams with external data and technology vendors.',
        'I gather requirements, write functional and technical specifications and draw the architecture diagrams before each project.',
        'I single-handedly designed the architecture and MVP of the Customer Data Platform on GCP, from idea to production: 20+ digital properties, dozens of sources, 2M+ unified profiles.',
        'ETL and ELT pipelines in Python and SQL, a layered BigQuery warehouse (raw, staging, curated), automated with Cloud Functions and Cloud Run Jobs.',
        'Proprietary audience segmentation that turns first-party data into advertising products, with an estimated potential of about $2M in additional revenue.',
        {
          text: 'I build AI agents, including on an internal kit based on Google ADK. Two examples:',
          items: [
            'An agent that generates Airflow DAGs from documentation: chunking, Vertex AI embeddings, vector search in AlloyDB with pgvector.',
            'An agent that reads PDFs with the Gemini API, extracts tables and loads them automatically into BigQuery through a Cloud Function and a Cloud Run Job.',
          ],
        },
      ],
    },
    stack: [
      'BigQuery',
      'Python',
      'SQL',
      'Airflow',
      'Cloud Run',
      'Vertex AI',
      'AlloyDB',
      'Google ADK',
      'Gemini',
    ],
  },
  {
    current: true,
    period: { fr: 'Depuis janv. 2025', en: 'Since Jan. 2025' },
    title: {
      fr: 'Chercheuse et consultante principale en IA responsable',
      en: 'Senior Consultant and Applied AI Researcher, Responsible AI',
    },
    organisation: {
      fr: "Chaire d'éthique et de gouvernance de l'IA, HEC Montréal",
      en: 'Chair in AI Ethics and Governance, HEC Montréal',
    },
    highlights: {
      fr: [
        "Côté technique : audits d'équité de modèles prédictifs (XGBoost, forêts aléatoires, régression logistique, réseaux de neurones), revue de code d'outils d'audit en Python, calcul et interprétation des métriques d'équité avec AIF360 et Fairlearn.",
        "Côté conseil : rapports d'audit, analyses de risques, plans d'action et présentations aux directions; gouvernance des modèles alignée sur le NIST AI RMF, ISO/IEC 42001, l'EU AI Act et la Directive canadienne.",
        'Côté transmission : formations et ateliers de sensibilisation, rapports scientifiques et articles de vulgarisation.',
        'Pour des organisations publiques, parapubliques et privées.',
      ],
      en: [
        'Technical side: fairness audits of predictive models (XGBoost, random forests, logistic regression, neural networks), code review of Python audit tools, computing and interpreting fairness metrics with AIF360 and Fairlearn.',
        "Advisory side: audit reports, risk analyses, action plans and executive presentations; model governance aligned with NIST AI RMF, ISO/IEC 42001, the EU AI Act and Canada's Directive on Automated Decision-Making.",
        'Teaching side: training and awareness workshops, scientific reports and popular-science articles.',
        'For public, para-public and private organizations.',
      ],
    },
    stack: [
      'Python',
      'XGBoost',
      'Random Forest',
      'scikit-learn',
      'AIF360',
      'Fairlearn',
      'NIST AI RMF',
      'ISO/IEC 42001',
    ],
  },
  {
    period: { fr: 'Juil. 2025 à mai 2026', en: 'Jul. 2025 to May 2026' },
    title: 'Data Analyst, Business Intelligence',
    organisation: 'Cogeco Média',
    highlights: {
      fr: [
        "Couche analytique BigQuery devenue la source de vérité pour les revenus, l'audience et la consommation.",
        "Modélisation en schéma en étoile et architecture en couches pour l'entrepôt de données.",
        "Tableaux de bord Tableau et Looker Studio pour les équipes d'affaires.",
        'Documentation des données, réduction de la dette technique et cadre de gouvernance des données.',
        'Automatisation des ingestions mensuelles.',
      ],
      en: [
        'BigQuery analytics layer that became the source of truth for revenue, audience and consumption.',
        'Star schema modelling and a layered architecture for the data warehouse.',
        'Tableau and Looker Studio dashboards for business teams.',
        'Data documentation, technical debt reduction and a data governance framework.',
        'Automated monthly ingestions.',
      ],
    },
    stack: ['BigQuery', 'SQL', 'Schéma en étoile', 'Tableau', 'Looker Studio'],
  },
  {
    period: { fr: 'Août 2022 à juil. 2025', en: 'Aug. 2022 to Jul. 2025' },
    title: 'Systems Engineer',
    organisation: 'Infosys Public Services, Ottawa',
    highlights: {
      fr: [
        "Pipelines ETL en Python et traitements SQL pour CanadaBuys, la plateforme d'approvisionnement du gouvernement fédéral.",
        'Monitoring automatisé : analyse des logs et alertes.',
        'Composants Drupal, PHP, Twig, JavaScript et Apache Solr maintenus en environnements Dev, Test, UAT et Production.',
        'Tableaux de bord Power BI et Google Analytics; Scrum Master sur plusieurs sprints.',
      ],
      en: [
        "Python ETL pipelines and SQL processing for CanadaBuys, the federal government's procurement platform.",
        'Automated monitoring: log analysis and alerting.',
        'Drupal, PHP, Twig, JavaScript and Apache Solr components maintained across Dev, Test, UAT and Production.',
        'Power BI and Google Analytics dashboards; Scrum Master over several sprints.',
      ],
    },
    stack: ['Python', 'SQL', 'Drupal', 'PHP', 'Twig', 'JavaScript', 'Apache Solr', 'Power BI'],
  },
  {
    period: '2022',
    title: 'Technical Project Lead, LMS',
    organisation: {
      fr: 'Institut Africain de Technologies et de Management (ITMA)',
      en: 'African Institute of Technology and Management (ITMA)',
    },
    highlights: {
      fr: [
        "Déploiement international d'une plateforme d'apprentissage en ligne pour plus de 10 000 utilisateurs, avec des équipes sur trois fuseaux horaires.",
        'Intégration cloud AWS et personnalisation technique de Moodle avec React, PHP et MySQL.',
        "Gouvernance des données et tableaux de bord Power BI sur l'engagement et la performance.",
        "Encadrement d'équipes développement, QA, DevOps et architecture en Agile Scrum avec Jira.",
      ],
      en: [
        'International rollout of a learning platform for 10,000+ users, with teams across three time zones.',
        'AWS cloud integration and technical customization of Moodle with React, PHP and MySQL.',
        'Data governance and Power BI dashboards on engagement and performance.',
        'Led development, QA, DevOps and architecture teams in Agile Scrum with Jira.',
      ],
    },
    stack: ['AWS', 'Moodle', 'React', 'PHP', 'MySQL', 'Jira'],
  },
  {
    period: { fr: 'Avant', en: 'Before' },
    title: { fr: 'Données, recherche et matériel', en: 'Data, research and hardware' },
    organisation: { fr: "Université d'Ottawa et Matrox", en: 'University of Ottawa and Matrox' },
    highlights: {
      fr: [
        "Ingénierie de données et analyse de logiciels de recherche à l'Université d'Ottawa.",
        "Assistante d'enseignement en systèmes numériques : VHDL, FPGA et C++ pour plus de 50 étudiants.",
        'Validation FPGA chez Matrox.',
      ],
      en: [
        'Data engineering and research software analysis at the University of Ottawa.',
        'Teaching assistant in digital systems: VHDL, FPGA and C++ for 50+ students.',
        'FPGA validation at Matrox.',
      ],
    },
  },
];
