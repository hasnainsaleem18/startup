/**
 * Vercel serverless entry point.
 *
 * Vercel's @vercel/node runtime accepts an Express app as the default export and
 * adapts it to the serverless request/response lifecycle. The same `createApp()`
 * is used locally (src/index.ts) and in production here — one codebase, two runtimes.
 */
import { createApp } from '../src/app';

const app = createApp();

export default app;
