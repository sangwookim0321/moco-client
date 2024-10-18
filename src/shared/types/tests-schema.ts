import { z } from 'zod';

export const TestsQuerySchema = z.object({
  page: z.number().optional(),
  limit: z.number().optional(),
  search: z.string().optional(),
  creation_date: z.string().optional(),
  views: z.string().optional(),
});

export const TestsSchema = z.object({
  data: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      sub_title: z.string().optional(),
      description: z.string().optional(),
      img_url: z.string().url(),
      views: z.number(),
      created_at: z.string(),
      category: z.string(),
    })
  ),
  message: z.string(),
  status: z.number(),
  page: z.number(),
  limit: z.number(),
  total: z.number(),
});

export type TestsQuerySchemaType = z.infer<typeof TestsQuerySchema>;
export type TestsSchemaType = z.infer<typeof TestsSchema>;
