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

export const collections = { blog };
