import * as React from 'react';

/**
 * Dropdown — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Dropdown.stories.tsx).
 */
export interface DropdownProps {
  /** Options list (flat). Use `groups` instead for grouped options. */
  options?: DropdownOption[];
  /** Grouped options. Use instead of `options`. */
  groups?: DropdownOptionGroup[];
  /** Selected value(s) for controlled mode. */
  value?: string | string[];
  /** Default selected value(s) for uncontrolled mode. */
  defaultValue?: string | string[];
  /** Fires when the selection changes. Receives the last-clicked value and the full selected array. */
  onValueChange?: (value: string, selectedOptions: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  /** Allow multiple selection. */
  multiselect?: boolean;
  appearance?: "filled-darker" | "outline" | "underline" | "filled-lighter";
  size?: "small" | "medium" | "large";
  /** Accessible label (prefer this over aria-labelledby when there is no visible label element). */
  "aria-label"?: string;
  "aria-labelledby"?: string;
  className?: string;
  style?: React.CSSProperties;
}

export declare const Dropdown: React.ComponentType<DropdownProps>;
