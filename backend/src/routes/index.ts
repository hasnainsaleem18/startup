import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { contentController } from '../controllers/content.controller';
import { leadsController } from '../controllers/leads.controller';
import { validateBody } from '../middleware/validate';
import { contactSchema, quoteSchema } from '../schemas/lead.schema';
import { asyncHandler } from '../utils/asyncHandler';

export const apiRouter = Router();

// Protect write endpoints from abuse (scales fine; tune per environment).
const leadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: 'Too many requests. Please try again in a few minutes.' },
});

// Health
apiRouter.get('/health', (_req, res) => {
  res.json({ ok: true, status: 'healthy', timestamp: new Date().toISOString() });
});

// Content (read)
apiRouter.get('/content', contentController.getAll);
apiRouter.get('/services', contentController.getServices);
apiRouter.get('/packages', contentController.getPackages);

// Leads (write)
apiRouter.post(
  '/contact',
  leadLimiter,
  validateBody(contactSchema),
  asyncHandler(leadsController.createContact)
);
apiRouter.post(
  '/quote',
  leadLimiter,
  validateBody(quoteSchema),
  asyncHandler(leadsController.createQuote)
);
