import * as React from 'react';

/**
 * Slider — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Slider.stories.tsx).
 * @replaces input[type=range]
 */
export interface SliderProps {
  label?: string;
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
  size?: "small" | "medium";
  /** Show the current value alongside the label */
  showValue?: boolean;
  /** Format function for the displayed value */
  formatValue?: (value: number) => string;
  required?: boolean;
  validationState?: "none" | "error" | "warning" | "success";
  validationMessage?: string;
  hint?: string;
  /** Render the slider vertically */
  vertical?: boolean;
}

export declare const Slider: React.ComponentType<SliderProps>;
