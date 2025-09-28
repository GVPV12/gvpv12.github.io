import { defineConfig } from 'astro/config';
import allInOne from './plugins/remark-obsidian-all-in-one.js';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://gvpv12.github.io',
  base: '/',
  output: 'static',
  integrations: [mdx(), sitemap(), tailwind(), partytown()],
  markdown: {
    remarkPlugins: [allInOne],
    extendDefaultPlugins: true,
    rehypePlugins: [[autoNewTabExternalLinks, {
      domain: 'localhost:4321'
    }]]
  }
});