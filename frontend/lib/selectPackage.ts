export const SELECT_PACKAGE_EVENT = 'ledgerly:select-package';

/**
 * Decoupled bridge between the Pricing cards and the Contact form.
 * Pricing dispatches the chosen package id; the form listens and pre-selects it,
 * then we scroll the form into view.
 */
export function selectPackage(packageId: string) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent(SELECT_PACKAGE_EVENT, { detail: { packageId } })
  );
  const el = document.getElementById('contact');
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
