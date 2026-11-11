import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import remarkCallouts from './plugins/remark-callouts.js';
import remarkHighlightToBold from './plugins/remark-highlight-to-bold.js';
import remarkAutoSlug from './plugins/remark-auto-slug-simple.js'; 
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';
import partytown from "@astrojs/partytown";

export default defineConfig({
  site: 'https://gvpv12.github.io',
  base: '/',
  output: 'static',
  integrations: [mdx(), sitemap(), tailwind(), partytown()],
  
  // La protección anti-IA en producción la hacen public/robots.txt y la meta
  // "robots: noai, noimageai" de BaseLayout. GitHub Pages no permite cabeceras HTTP
  // personalizadas, así que un plugin de cabeceras solo afectaría a `pnpm dev`.
  vite: {
    resolve: {
      alias: {
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      },
    },
  },
  
  markdown: {
    remarkPlugins: [
      remarkAutoSlug,
      remarkCallouts, 
      remarkHighlightToBold
    ],
    extendDefaultPlugins: true,
    rehypePlugins: [[autoNewTabExternalLinks, {
      domain: 'gvpv12.github.io'
    }]]
  }
});