import type { Request, Response } from 'express';
import { contentService } from '../services/content.service';

export const contentController = {
  getAll(_req: Request, res: Response) {
    res.json({ ok: true, data: contentService.getAll() });
  },
  getServices(_req: Request, res: Response) {
    res.json({ ok: true, data: contentService.getServices() });
  },
  getPackages(_req: Request, res: Response) {
    res.json({ ok: true, data: contentService.getPackages() });
  },
};
