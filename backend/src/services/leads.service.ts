import { leadStore, type Lead, type NewLead } from '../data/store';
import { mailer } from './mailer.service';
import type { ContactInput, QuoteInput } from '../schemas/lead.schema';

const emptyToUndefined = (value?: string) =>
  value && value.trim() ? value.trim() : undefined;

export const leadsService = {
  async submitContact(input: ContactInput): Promise<Lead> {
    const data: NewLead = {
      type: 'contact',
      name: input.name,
      email: input.email,
      company: emptyToUndefined(input.company),
      phone: emptyToUndefined(input.phone),
      message: input.message,
    };
    const lead = leadStore.create(data);
    await mailer.notify(lead);
    return lead;
  },

  async submitQuote(input: QuoteInput): Promise<Lead> {
    const data: NewLead = {
      type: 'quote',
      name: input.name,
      email: input.email,
      company: emptyToUndefined(input.company),
      phone: emptyToUndefined(input.phone),
      packageId: input.packageId,
      message: input.message,
    };
    const lead = leadStore.create(data);
    await mailer.notify(lead);
    return lead;
  },
};
