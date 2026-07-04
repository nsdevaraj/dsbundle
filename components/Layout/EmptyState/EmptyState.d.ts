import * as React from 'react';

/**
 * EmptyState — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/EmptyState.stories.tsx).
 */
export interface EmptyStateProps {
  /** A Fluent icon element, e.g. <Search48Regular /> */
  icon?: React.ReactNode;
  title: string;
  description?: string;
  /** Optional CTA button or link */
  action?: React.ReactNode;
}

export declare const EmptyState: React.ComponentType<EmptyStateProps>;
