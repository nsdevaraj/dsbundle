import * as React from 'react';

/**
 * Breadcrumb — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Breadcrumb.stories.tsx).
 */
export interface BreadcrumbProps {
  items: BreadcrumbItemDef[];
  size?: "small" | "medium";
  /** aria-label for the breadcrumb nav landmark */
  "aria-label"?: string;
  className?: string;
  style?: React.CSSProperties;
}

export declare const Breadcrumb: React.ComponentType<BreadcrumbProps>;
