import * as React from 'react';

/**
 * CounterBadge — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/CounterBadge.stories.tsx).
 */
export interface CounterBadgeProps {
  /** The numeric count to display */
  count?: number;
  /** Render as a dot (ignores count) */
  dot?: boolean;
  /** Maximum count before showing overflow label. Default 99. */
  overflowCount?: number;
  /** Show the badge even when count === 0 */
  showZero?: boolean;
  color?: "brand" | "danger" | "important" | "informative";
  appearance?: "filled" | "ghost";
  size?: "small" | "medium" | "large" | "extra-small" | "extra-large";
  /** Shape — "circular" (default) or "rounded" */
  shape?: "circular" | "rounded";
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
}

export declare const CounterBadge: React.ComponentType<CounterBadgeProps>;
