// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'IT-WO – Технологический блог и портфолио';
export const SITE_DESCRIPTION = 'Заметки о веб-разработке, фронтенде, SEO и AI. Кейсы, эксперименты и проекты по современным технологиям.';

import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string().min(1),
    tags: z.array(z.string().min(1)).default([]), // <— пустые строки запрещаем
  }),
});

export const collections = { blog };
