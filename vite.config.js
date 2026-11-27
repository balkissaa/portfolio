import { defineConfig } from 'vite';

export default defineConfig({
  // Relative asset URLs: the build works at the root of the custom domain
  // and under any sub-path (for example a GitHub Pages project URL).
  base: './',
  build: {
    // The stylesheet relies on light-dark() and color-mix(); target browsers
    // that support them natively so the build does not rewrite them.
    target: ['chrome123', 'edge123', 'firefox120', 'safari17.5'],
  },
});
