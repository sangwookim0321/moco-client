import { z } from 'zod';

export const RecommendedTestSchema = z.object({
  data: z.object({
    id: z.number(),
    title: z.string(),
    sub_title: z.string().optional(),
    description: z.string().optional(),
    img_url: z.string().url(),
    views: z.number(),
    created_at: z.string(),
    category: z.string(),
  }),
  message: z.string(),
  status: z.number(),
});

export type RecommendedTestSchemaType = z.infer<typeof RecommendedTestSchema>;
