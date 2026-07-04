import * as React from 'react';

/**
 * StatusBadge — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/StatusBadge.stories.tsx).
 */
export interface StatusBadgeProps {
  status: "warning" | "blocked" | "completed" | "in-progress" | "pending" | "paused" | "draft" | "cancelled";
  /** Override the default label */
  label?: string;
  size?: "small" | "medium" | "large";
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
}

export declare const StatusBadge: React.ComponentType<StatusBadgeProps>;
