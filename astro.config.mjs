import tailwindcss from "@tailwindcss/vite";
// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://it-wo.ru',
  integrations: [mdx({
    remarkPlugins: [remarkToc],
  }), sitemap({
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
  })],

  vite: {
    plugins: [tailwindcss()],
  },
});