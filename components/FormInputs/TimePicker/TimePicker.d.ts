import * as React from 'react';

/**
 * TimePicker — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/TimePicker.stories.tsx).
 */
export interface TimePickerProps {
  label?: string;
  /** Controlled selected time */
  value?: Date;
  /** Default selected time for uncontrolled scenarios */
  defaultValue?: Date;
  /** Callback when a time is selected. Receives the Date (or null) and the display time string. */
  onTimeChange?: (date: Date | null, timeString: string) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  /** 12-hour or 24-hour clock. Mapped to hourCycle h12/h23. Default: 24 */
  hourCycle?: 24 | 12;
  /** Minute increment for the dropdown options (default: 30) */
  increment?: number;
  appearance?: "filled-darker" | "outline" | "underline" | "filled-lighter";
  size?: "small" | "medium";
  validationState?: "none" | "error" | "warning" | "success";
  validationMessage?: string;
  hint?: string;
  /** Start hour (inclusive), 0–24. Default: 0 */
  startHour?: number;
  /** End hour (exclusive), 0–24. Default: 24 */
  endHour?: number;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
}

export declare const TimePicker: React.ComponentType<TimePickerProps>;
