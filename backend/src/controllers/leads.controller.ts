import type { Request, Response } from 'express';
import { leadsService } from '../services/leads.service';
import type { ContactInput, QuoteInput } from '../schemas/lead.schema';

export const leadsController = {
  async createContact(req: Request, res: Response) {
    const lead = await leadsService.submitContact(req.body as ContactInput);
    res.status(201).json({
      ok: true,
      message: "Thanks! Your message has been received. We'll reply within 1 business day.",
      data: { id: lead.id },
    });
  },

  async createQuote(req: Request, res: Response) {
    const lead = await leadsService.submitQuote(req.body as QuoteInput);
    res.status(201).json({
      ok: true,
      message: "Thanks! Your quote request is in. We'll get back to you within 1 business day.",
      data: { id: lead.id },
    });
  },
};
