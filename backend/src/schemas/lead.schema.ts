import { z } from 'zod';

const trimmedString = (min: number, max: number) =>
  z.string().trim().min(min).max(max);

export const contactSchema = z.object({
  name: trimmedString(2, 80),
  email: z.string().trim().email().max(120),
  company: trimmedString(1, 120).optional().or(z.literal('')),
  phone: trimmedString(5, 30).optional().or(z.literal('')),
  message: trimmedString(10, 2000),
});

export const quoteSchema = contactSchema.extend({
  packageId: z.enum(['basic', 'standard', 'premium', 'custom']),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type QuoteInput = z.infer<typeof quoteSchema>;
