/** Site-wide settings. */

export const CONTACT_EMAIL = 'baalkissatoure@gmail.com';

/** FormSubmit relays the contact form to the address above, no backend needed. */
export const CONTACT_FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export const LANGUAGES = ['fr', 'en'];
export const DEFAULT_LANGUAGE = 'fr';

/** localStorage key that remembers the visitor's language. */
export const LANGUAGE_STORAGE_KEY = 'bt-lang';
