import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.any().optional(),
    updatedDate: z.any().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    slug: z.string().optional(),
    heroImage: z.string().optional(),
    author: z.string().optional(),
    draft: z.boolean().optional(),
    // оставь прочие поля как у тебя было, все optional
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(), // храним как ISO-строку, не Date
    category: z.enum(['web','ai','infrastructure','culture','method']),
    type: z.enum(['experiment','tutorial','note','method','essay']),
    tags: z.array(z.string()).default([]),
    lang: z.string().default('ru'),
    status: z.enum(['draft','review','published']).default('draft'),
    summary: z.string().max(250),
    version: z.number().default(1),
    id: z.string(),
  })
});

const studio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    type: z.enum(['concept','experiment','tutorial','note','method','essay']),
    tags: z.array(z.string()).default([]),
    lang: z.string().default('ru'),
    status: z.enum(['draft','review','published']).default('draft'),
    summary: z.string(),
    version: z.string().default('v1'),
    id: z.string(),
  })
});

export const collections = { blog, articles, studio };
