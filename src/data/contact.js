/** Contact form: topics and interface messages. */
import { CONTACT_EMAIL } from '../config.js';

/** Options of the "It's about" select. */
export const contactTopics = [
  { fr: 'Un poste', en: 'A job' },
  { fr: "Un audit d'équité", en: 'A fairness audit' },
  { fr: 'Une conférence ou un atelier', en: 'A talk or workshop' },
  { fr: 'Autre chose', en: 'Something else' },
];

export const subjectPrefix = { fr: 'Portfolio : ', en: 'Portfolio: ' };

export const contactMessages = {
  incomplete: {
    fr: 'Ajoute ton nom, ton courriel et un message.',
    en: 'Add your name, email and a message.',
  },
  sending: { fr: 'Envoi en cours…', en: 'Sending…' },
  sent: {
    fr: 'Merci ! Ton message est bien parti, je te réponds vite.',
    en: 'Thank you! Your message was sent, I will reply soon.',
  },
  failed: {
    fr: `L'envoi a échoué. Copie le message et écris à ${CONTACT_EMAIL}.`,
    en: `Sending failed. Copy the message and write to ${CONTACT_EMAIL}.`,
  },
  copied: {
    fr: `Message copié. Colle-le dans un courriel à ${CONTACT_EMAIL}.`,
    en: `Message copied. Paste it into an email to ${CONTACT_EMAIL}.`,
  },
  copyBlocked: {
    fr: `La copie est bloquée ici : écris directement à ${CONTACT_EMAIL}.`,
    en: `Copying is blocked here: write directly to ${CONTACT_EMAIL}.`,
  },
};
