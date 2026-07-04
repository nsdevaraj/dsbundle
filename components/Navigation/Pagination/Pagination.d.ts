import * as React from 'react';

/**
 * Pagination — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Pagination.stories.tsx).
 */
export interface PaginationProps {
  /** Current page, 1-based. */
  page: number;
  /** Total number of pages (>= 1). */
  count: number;
  /** Called with the next page (1-based) when the user navigates. */
  onPageChange?: (page: number) => void;
  /** Number of page buttons to show on each side of the current page. Default 1. */
  siblingCount?: number;
  /** Number of page buttons always shown at the start and end. Default 1. */
  boundaryCount?: number;
  /** Show the jump-to-first and jump-to-last buttons. Default false. */
  showFirstLast?: boolean;
  /** Hide the previous / next buttons. Default false. */
  hidePrevNext?: boolean;
  /** Control size. Default "medium". */
  size?: "small" | "medium";
  /** Disable the entire control. */
  disabled?: boolean;
  /** Accessible label for the navigation landmark. Default "Pagination". */
  "aria-label"?: string;
  /** Additional CSS class name(s) to apply to the root `<nav>`. */
  className?: string;
}

export declare const Pagination: React.ComponentType<PaginationProps>;
