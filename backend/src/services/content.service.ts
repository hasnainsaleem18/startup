import {
  services,
  packages,
  valueProps,
  testimonials,
  processSteps,
  faqs,
  stats,
} from '../data/content';

/**
 * Aggregates all marketing content. The frontend fetches this so copy and
 * pricing can change server-side without a frontend redeploy.
 */
export const contentService = {
  getAll() {
    return {
      services,
      packages,
      valueProps,
      testimonials,
      processSteps,
      faqs,
      stats,
    };
  },
  getServices() {
    return services;
  },
  getPackages() {
    return packages;
  },
};
