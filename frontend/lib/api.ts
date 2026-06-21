import type { ApiResponse, SiteContent } from './types';
import { fallbackContent } from './fallbackContent';

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') ?? 'http://localhost:4000';

/**
 * Server-side fetch of all site content from the backend.
 * Falls back to bundled content if the API is briefly unreachable so the
 * marketing page never renders empty.
 */
export async function getSiteContent(): Promise<SiteContent> {
  try {
    const res = await fetch(`${API_URL}/api/content`, {
      // Revalidate periodically; content rarely changes but stays backend-driven.
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`Content request failed: ${res.status}`);
    const json = (await res.json()) as ApiResponse<SiteContent>;
    if (!json.ok || !json.data) throw new Error('Malformed content response');
    return json.data;
  } catch {
    return fallbackContent;
  }
}

export interface LeadPayload {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  packageId?: string;
}

/** Client-side submit of the contact / quote form. */
export async function submitLead(
  endpoint: 'contact' | 'quote',
  payload: LeadPayload
): Promise<ApiResponse<{ id: string }>> {
  const res = await fetch(`${API_URL}/api/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return (await res.json()) as ApiResponse<{ id: string }>;
}
