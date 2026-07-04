import * as React from 'react';

/**
 * Rating — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Rating.stories.tsx).
 */
export interface RatingProps {
  /** Controlled value (1–max) */
  value?: number;
  defaultValue?: number;
  /** Maximum stars. Default 5. */
  max?: number;
  /** Allow half-star precision */
  step?: 0.5 | 1;
  onChange?: (value: number) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large" | "extra-large";
  color?: "brand" | "marigold" | "neutral";
  shape?: "square" | "circular";
  /** Accessible label for the rating control */
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
}

export declare const Rating: React.ComponentType<RatingProps>;
