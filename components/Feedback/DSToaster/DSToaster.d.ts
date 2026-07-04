import * as React from 'react';

/**
 * DSToaster — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Toast.stories.tsx).
 */
export interface DSToasterProps {
  /** Position on screen. Default: "top-end" */
  position?: "bottom" | "top" | "top-start" | "top-end" | "bottom-start" | "bottom-end";
  /** Max toasts visible at once. Default: 5 */
  limit?: number;
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
}

export declare const DSToaster: React.ComponentType<DSToasterProps>;
