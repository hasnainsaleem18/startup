import { createApp } from './app';
import { env } from './config/env';
import { logger } from './utils/logger';

const app = createApp();

app.listen(env.port, () => {
  logger.info('API server started', {
    port: env.port,
    env: env.nodeEnv,
    corsOrigins: env.corsOrigins,
  });
});
