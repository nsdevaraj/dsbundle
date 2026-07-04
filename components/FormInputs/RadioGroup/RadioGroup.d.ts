import * as React from 'react';

/**
 * RadioGroup — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/RadioGroup.stories.tsx).
 */
export interface RadioGroupProps {
  label?: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  layout?: "horizontal" | "vertical";
  hint?: string;
  validationState?: "none" | "error" | "warning" | "success";
  validationMessage?: string;
  required?: boolean;
  style?: React.CSSProperties;
  className?: string;
  children?: any;
  id?: string;
  as?: "div";
  /** Disable all Radio items in this group. */
  disabled?: boolean;
  /** The name of this radio group. This name is applied to all Radio items inside this group. If no name is provided, one wil */
  name?: string;
}

export declare const RadioGroup: React.ComponentType<RadioGroupProps>;
