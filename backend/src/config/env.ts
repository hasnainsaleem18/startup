import dotenv from 'dotenv';

dotenv.config();

const parseOrigins = (value: string | undefined): string[] => {
  if (!value) return ['http://localhost:3000'];
  return value
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
};

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 4000),
  corsOrigins: parseOrigins(process.env.CORS_ORIGINS),
  leadsNotifyEmail: process.env.LEADS_NOTIFY_EMAIL ?? 'owner@example.com',
  isProduction: (process.env.NODE_ENV ?? 'development') === 'production',
};

export type Env = typeof env;
