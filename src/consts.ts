// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Site Author – Personal Blog & Portfolio';
export const SITE_DESCRIPTION = 'Growth engineering, analytics, and product marketing notes. Case studies, experiments, and projects by Site Author.';

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
