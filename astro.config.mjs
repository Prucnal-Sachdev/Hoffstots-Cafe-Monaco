import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production values. The GitHub Pages preview workflow (.github/workflows/pages.yml)
// overrides both so the site can be served from https://prucnal-sachdev.github.io/Hoffstots-Cafe-Monaco/.
const site = process.env.SITE_URL ?? 'https://hoffstots.com';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !/\/(thank-you|privacy)\/$/.test(page),
    }),
  ],
});
