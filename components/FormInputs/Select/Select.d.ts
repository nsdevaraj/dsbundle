import * as React from 'react';

/**
 * Select — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Select.stories.tsx).
 * @replaces select
 */
export interface SelectProps {
  label?: string;
  hint?: string;
  options: SelectOption[] | SelectGroup[];
  placeholder?: string;
  validationState?: "none" | "error" | "warning" | "success";
  validationMessage?: string;
  required?: boolean;
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
  appearance?: "filled-darker" | "outline" | "underline" | "filled-lighter";
  root?: unknown;
  /** Primary slot: the actual `<select>` element */
  select?: unknown;
  style?: React.CSSProperties;
  id?: string;
  as?: "select";
  /** the icon, typically a down arrow */
  icon?: unknown;
  /** Matches the Input sizes */
  size?: "small" | "medium" | "large";
}

export declare const Select: React.ComponentType<SelectProps>;
