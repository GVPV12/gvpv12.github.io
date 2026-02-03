import { defineConfig } from 'astro/config';
import remarkCallouts from './plugins/remark-callouts.js';
import remarkHighlightToBold from './plugins/remark-highlight-to-bold.js';
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
  markdown: {
    remarkPlugins: [remarkCallouts, remarkHighlightToBold],
    extendDefaultPlugins: true,
    rehypePlugins: [[autoNewTabExternalLinks, {
      domain: 'localhost:4321'
    }]]
  }
});