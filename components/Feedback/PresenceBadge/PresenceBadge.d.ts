import * as React from 'react';

/**
 * PresenceBadge — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/PresenceBadge.stories.tsx).
 */
export interface PresenceBadgeProps {
  status: "available" | "away" | "busy" | "do-not-disturb" | "offline" | "out-of-office" | "unknown" | "blocked";
  size?: "small" | "medium" | "large" | "extra-small" | "extra-large";
  /** "regular" (default) — solid fill. "out-of-office" — striped pattern. */
  outOfOffice?: boolean;
  className?: string;
  style?: React.CSSProperties;
  /** Overrides the auto-generated aria-label */
  "aria-label"?: string;
}

export declare const PresenceBadge: React.ComponentType<PresenceBadgeProps>;
