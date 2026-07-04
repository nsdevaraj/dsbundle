import * as React from 'react';

/**
 * ProgressBar — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/ProgressBar.stories.tsx).
 */
export interface ProgressBarProps {
  /** Visible label shown above the bar */
  label?: string;
  /** Current progress, 0–1. Omit (or undefined) for indeterminate animation. */
  value?: number;
  /** Show percentage text alongside the label */
  showPercentage?: boolean;
  color?: "error" | "warning" | "success" | "brand";
  thickness?: "medium" | "large";
  /** Hint text shown below the bar */
  hint?: string;
}

export declare const ProgressBar: React.ComponentType<ProgressBarProps>;
