import { env } from '../config/env';
import { logger } from '../utils/logger';
import type { Lead } from '../data/store';

/**
 * Notification abstraction. For the MVP this logs the lead so the owner can see
 * it in server logs / Vercel logs. Swap the body of `notify` for a real provider
 * (Resend, SendGrid, Postmark, Slack webhook, etc.) — callers don't change.
 */
export const mailer = {
  async notify(lead: Lead): Promise<void> {
    logger.info('New lead received', {
      notifyTo: env.leadsNotifyEmail,
      leadId: lead.id,
      type: lead.type,
      name: lead.name,
      email: lead.email,
      company: lead.company,
      packageId: lead.packageId,
    });
    // TODO: integrate an email/Slack provider here for production.
  },
};
