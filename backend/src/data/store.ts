/**
 * In-memory persistence for the MVP.
 *
 * Intentionally isolated behind this module so it can be swapped for a real
 * database (Postgres/Neon, Mongo, Supabase, etc.) without touching services.
 * NOTE: serverless functions are stateless — in production, point these methods
 * at a managed database. The interface stays the same.
 */
import { randomUUID } from 'crypto';

export interface Lead {
  id: string;
  type: 'contact' | 'quote';
  name: string;
  email: string;
  company?: string;
  phone?: string;
  packageId?: string;
  message: string;
  createdAt: string;
}

export type NewLead = Omit<Lead, 'id' | 'createdAt'>;

const leads: Lead[] = [];

export const leadStore = {
  create(data: NewLead): Lead {
    const lead: Lead = {
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      ...data,
    };
    leads.push(lead);
    return lead;
  },
  list(): Lead[] {
    return [...leads].reverse();
  },
  count(): number {
    return leads.length;
  },
};
