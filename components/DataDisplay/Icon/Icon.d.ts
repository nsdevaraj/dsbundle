import * as React from 'react';

/**
 * Icon — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Icon.stories.tsx).
 */
export interface IconProps {
  /** A rendered Fluent icon element. Must be from */
  icon: FluentIconElement;
  /** px size override — sets width and height on the wrapper */
  size?: number;
  color?: "inherit" | "warning" | "success" | "brand" | "danger" | "default" | "muted";
  /** Required for non-decorative icons */
  "aria-label"?: string;
  className?: string;
}

export declare const Icon: React.ComponentType<IconProps>;
