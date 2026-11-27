/**
 * Contact section: e-mail link and a message form. The form is sent through
 * FormSubmit; if that fails, the visitor can copy the message instead.
 */
import { CONTACT_EMAIL, CONTACT_FORM_ENDPOINT } from '../config.js';
import { contactMessages, contactTopics, subjectPrefix } from '../data/contact.js';
import { $, escapeHtml } from '../lib/dom.js';
import { translate } from '../lib/i18n.js';

export function setupContact() {
  const form = $('#contact-form');
  const nameInput = $('#contact-name');
  const emailInput = $('#contact-mail');
  const topicSelect = $('#contact-topic');
  const messageInput = $('#contact-message');
  const status = $('#contact-status');
  let topicIndex = 0;

  $('#contact-email').href = `mailto:${CONTACT_EMAIL}`;
  $('#contact-email-address').textContent = CONTACT_EMAIL;

  const say = (message) => {
    status.textContent = translate(message);
  };

  const renderTopics = () => {
    topicSelect.innerHTML = contactTopics
      .map(
        (topic, index) =>
          `<option value="${index}"${index === topicIndex ? ' selected' : ''}>${escapeHtml(translate(topic))}</option>`,
      )
      .join('');
  };

  /** Reads the form into the pieces of an e-mail. */
  const compose = () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const topic = translate(contactTopics[topicIndex]);
    return {
      name,
      email,
      message,
      topic,
      subject: `${translate(subjectPrefix)}${topic}${name ? ` (${name})` : ''}`,
      body: `${message}\n\n${name}${email ? `\n${email}` : ''}`,
      isComplete: Boolean(name && email && message),
    };
  };

  const send = async ({ name, email, message, topic, subject }) => {
    const response = await fetch(CONTACT_FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name,
        email,
        _replyto: email,
        _subject: subject,
        sujet: topic,
        message,
        _template: 'table',
        _captcha: 'false',
      }),
    });
    const result = await response.json();
    if (result.success === 'false' || result.success === false) {
      throw new Error('The form service rejected the message.');
    }
  };

  topicSelect.addEventListener('change', (event) => {
    topicIndex = Number(event.target.value);
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const draft = compose();
    if (!draft.isComplete) {
      say(contactMessages.incomplete);
      return;
    }
    say(contactMessages.sending);
    try {
      await send(draft);
      form.reset();
      topicIndex = 0;
      renderTopics();
      say(contactMessages.sent);
    } catch {
      say(contactMessages.failed);
    }
  });

  $('#contact-copy').addEventListener('click', async () => {
    const { subject, body } = compose();
    try {
      await navigator.clipboard.writeText(`${subject}\n\n${body}`);
      say(contactMessages.copied);
    } catch {
      say(contactMessages.copyBlocked);
    }
  });

  return renderTopics;
}
