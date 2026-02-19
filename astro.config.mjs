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
  
  // --- CONFIGURACIÓN DEL ALIAS + PROTECCIÓN ANTI-IA ---
  vite: {
    resolve: {
      alias: {
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      },
    },
    // 🔒 Headers de protección anti-IA
    plugins: [
      {
        name: 'ai-protection-headers',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            // Headers anti-IA
            res.setHeader('X-Robots-Tag', 'noai, noimageai');
            res.setHeader('X-AI-Crawl', 'none');
            next();
          });
        }
      }
    ]
  },
  // ------------------------------------------------------
  
  markdown: {
    remarkPlugins: [
      remarkAutoSlug,
      remarkCallouts, 
      remarkHighlightToBold
    ],
    extendDefaultPlugins: true,
    rehypePlugins: [[autoNewTabExternalLinks, {
      domain: 'localhost:4321'
    }]]
  }
});