import * as React from 'react';

/**
 * Spinner — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Spinner.stories.tsx).
 */
export interface SpinnerProps {
  size?: "small" | "medium" | "large" | "extra-small" | "extra-large" | "huge" | "tiny";
  label?: string;
  labelPosition?: "before" | "after" | "above" | "below";
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
  style?: React.CSSProperties;
  children?: any;
  id?: string;
  as?: "div" | "span";
  /** The appearance of the Spinner. */
  appearance?: "primary" | "inverted";
  /** The animated spinning ring. */
  spinner?: unknown;
  /** The part of the spinner that rotates. */
  spinnerTail?: unknown;
  /** Time in milliseconds after component mount before spinner is visible. */
  delay?: number;
}

export declare const Spinner: React.ComponentType<SpinnerProps>;
