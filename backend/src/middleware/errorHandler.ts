import type { NextFunction, Request, Response } from 'express';
import { logger } from '../utils/logger';

export const notFound = (_req: Request, res: Response) => {
  res.status(404).json({ ok: false, error: 'Route not found' });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const message = err instanceof Error ? err.message : 'Unexpected server error';
  logger.error('Unhandled error', { message });
  res.status(500).json({ ok: false, error: 'Something went wrong. Please try again.' });
};
