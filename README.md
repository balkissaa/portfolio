# balkissatoure.com

Bilingual (French and English) portfolio of Balkissa Touré, data engineering
specialist and responsible AI researcher. Live at <https://balkissatoure.com>.

A single static page: plain HTML, CSS and JavaScript modules, bundled with
[Vite](https://vite.dev) and published to GitHub Pages by GitHub Actions.

## Getting started

Requires Node.js 22 or later.

```bash
npm install
npm run dev        # local server with live reload, http://localhost:5173
```

| Command           | What it does                                    |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Start the development server                    |
| `npm run build`   | Build the production site into `dist/`          |
| `npm run preview` | Serve the built site locally                    |
| `npm run lint`    | Check the JavaScript with ESLint                |
| `npm run format`  | Format every file with Prettier                 |
| `npm run check`   | Lint, check formatting and build (what CI runs) |

## Project layout

```
index.html             Page structure and all static text, in both languages
public/                Files copied as-is to the site root (og.jpg, favicon, robots.txt, sitemap.xml)
src/
  main.js              Entry point: starts every section
  config.js            Contact e-mail, form endpoint, languages
  assets/              Images bundled with the page
  data/                Content rendered by JavaScript, as { fr, en } objects
  lib/                 Shared helpers (DOM, language state)
  sections/            One module per interactive section
  styles/              One stylesheet per section, imported by main.css
.github/workflows/     CI and deployment
```

## Editing content

Static text is in `index.html`. Every sentence is written twice, side by side:

```html
<span lang="fr">Mon parcours</span> <span lang="en">My journey</span>
```

The stylesheet hides the language that does not match the `lang` attribute of
`<html>`, which the FR / EN switch updates.

Content that is rendered by JavaScript lives in `src/data/`:

| File          | Content                                                                 |
| ------------- | ----------------------------------------------------------------------- |
| `journey.js`  | Jobs of the career timeline                                             |
| `research.js` | Experiment steps, lab results, proxy cards, glossary, field-audit data  |
| `talks.js`    | Talks, panels, teaching and online presence, with their filter category |
| `garden.js`   | Flowers of the hero garden and the section each one links to            |
| `contact.js`  | Contact form topics and status messages                                 |

Each text is a `{ fr: '…', en: '…' }` object; a plain string is used when both
languages share the same wording.

The portrait is `src/assets/photo.jpg`; the image used for link previews is
`public/og.jpg` (1200 x 630).

## Contact form

The form posts to [FormSubmit](https://formsubmit.co), which forwards the
message to the address set in `src/config.js`. FormSubmit asks that address to
confirm the form once, by e-mail, the first time a message is sent from a new
site address.

## Deployment

`.github/workflows/deploy.yml` lints and builds every push and pull request.
A push to `main` is then published to GitHub Pages.

Work happens on `dev` (or a branch opened from it); `main` only moves through a
pull request from `dev`.

One-time repository settings (Settings → Pages):

- **Source**: GitHub Actions
- **Custom domain**: `balkissatoure.com`, with **Enforce HTTPS** ticked

DNS records of `balkissatoure.com` (managed at Hostinger):

| Name  | Type  | Value                                                                                      |
| ----- | ----- | ------------------------------------------------------------------------------------------ |
| `@`   | A     | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`                 |
| `@`   | AAAA  | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |
| `www` | CNAME | `balkissaa.github.io`                                                                      |

The `CNAME` file at the root records the custom domain. GitHub Pages reads it
only when the site is published from a branch; with the GitHub Actions source
the domain comes from the repository settings.

## Design notes

- **Idea**: a garden. Each flower is a chapter of the page, and the research
  section shows the mechanism that grows underneath.
- **Voice**: personal and warm, but rigorous: a researcher who explains.
- **Colour**: latte beige, chocolate, powder pink, deep rose, olive foliage,
  with a dark variant picked from the visitor's system preference.
- **Type**: Yeseva One for headings, Figtree for text, Caveat for handwritten
  notes.
- **Layout**: name on the left, portrait badge on the right, full-width
  garden; alternating beige and pink bands; everything stacks under 760 px.
