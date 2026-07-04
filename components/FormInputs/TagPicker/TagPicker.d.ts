import * as React from 'react';

/**
 * TagPicker — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/TagPicker.stories.tsx).
 */
export interface TagPickerProps {
  label?: string;
  options: TagPickerOption[];
  /** Controlled selected values */
  selectedValues?: string[];
  /** Callback when selection changes */
  onChange?: (values: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  validationState?: "none" | "error" | "warning" | "success";
  validationMessage?: string;
  hint?: string;
  /** Allow typing values not in the options list */
  freeform?: boolean;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
}

export declare const TagPicker: React.ComponentType<TagPickerProps>;
