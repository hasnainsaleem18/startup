import express, { type Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from './config/env';
import { apiRouter } from './routes';
import { errorHandler, notFound } from './middleware/errorHandler';
import { logger } from './utils/logger';

export const createApp = (): Express => {
  const app = express();

  app.set('trust proxy', 1); // correct client IPs behind Vercel/proxies (rate limiting)
  app.use(helmet());
  app.use(express.json({ limit: '100kb' }));

  app.use(
    cors({
      origin(origin, callback) {
        // Allow same-origin / server-to-server (no origin) and whitelisted origins.
        if (!origin || env.corsOrigins.includes(origin)) {
          return callback(null, true);
        }
        logger.warn('Blocked CORS origin', { origin });
        return callback(new Error('Not allowed by CORS'));
      },
      methods: ['GET', 'POST'],
    })
  );

  app.get('/', (_req, res) => {
    res.json({ ok: true, service: 'bookkeeping-api', docs: '/api/health' });
  });

  app.use('/api', apiRouter);

  app.use(notFound);
  app.use(errorHandler);

  return app;
};
