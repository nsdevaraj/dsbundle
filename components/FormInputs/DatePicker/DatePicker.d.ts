import * as React from 'react';

/**
 * DatePicker — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/DatePicker.stories.tsx).
 */
export interface DatePickerProps {
  label?: string;
  /** Controlled selected date */
  value?: Date;
  onSelectDate?: (date: Date | null | undefined) => void;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  required?: boolean;
  /** Allow the user to type a date directly */
  allowTextInput?: boolean;
  /** First day of the week (0 = Sunday, 1 = Monday, etc.) */
  firstDayOfWeek?: DayOfWeek.Sunday | DayOfWeek.Monday | DayOfWeek.Tuesday | DayOfWeek.Wednesday | DayOfWeek.Thursday | DayOfWeek.Friday | DayOfWeek.Saturday;
  validationState?: "none" | "error" | "warning" | "success";
  validationMessage?: string;
  hint?: string;
  className?: string;
}

export declare const DatePicker: React.ComponentType<DatePickerProps>;
