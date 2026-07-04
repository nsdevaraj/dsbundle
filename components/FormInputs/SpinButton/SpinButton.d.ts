import * as React from 'react';

/**
 * SpinButton — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/SpinButton.stories.tsx).
 */
export interface SpinButtonProps {
  label?: string;
  /** Controlled value */
  value?: number;
  /** Uncontrolled default */
  defaultValue?: number;
  min?: number;
  max?: number;
  /** Step per click/arrow key. Default 1. */
  step?: number;
  /** Step multiplier when Shift is held. Default 10. */
  stepPage?: number;
  /** Decimal precision for display */
  precision?: number;
  /** Prefix text (e.g. "$") */
  prefix?: string;
  /** Suffix text (e.g. "kg") */
  suffix?: string;
  disabled?: boolean;
  required?: boolean;
  validationState?: "none" | "error" | "warning" | "success";
  validationMessage?: string;
  hint?: string;
  appearance?: "filled-darker" | "outline" | "underline" | "filled-lighter";
  onChange?: (value: number | null) => void;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
}

export declare const SpinButton: React.ComponentType<SpinButtonProps>;
