import type { NextFunction, Request, Response } from 'express';
import type { ZodSchema } from 'zod';

/**
 * Validates and replaces req.body with the parsed/typed result.
 * Responds 422 with field-level errors on failure.
 */
export const validateBody =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = issue.path.join('.') || 'form';
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      return res.status(422).json({
        ok: false,
        error: 'Validation failed',
        fields: fieldErrors,
      });
    }
    req.body = result.data;
    return next();
  };
