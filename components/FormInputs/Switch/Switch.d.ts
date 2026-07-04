import * as React from 'react';

/**
 * Switch — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Switch.stories.tsx).
 */
export interface SwitchProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  labelPosition?: "before" | "after";
  hint?: string;
  validationState?: "none" | "error" | "warning" | "success";
  validationMessage?: string;
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
  /** The root element of the Switch. The root slot receives the `className` and `style` specified directly on the `<Switch>`  */
  root?: unknown;
  /** Hidden input that handles the Switch's functionality. This is the PRIMARY slot: all native properties specified directly */
  input?: NonNullable<{ as?: "input"; } & Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & { ref?: React.Ref<HTMLInputElement>; }, "children"> & { children?: never; }>;
  style?: React.CSSProperties;
  children?: never;
  /** Defines whether the Switch is initially in a checked state or not when rendered. */
  defaultChecked?: boolean;
  id?: string;
  as?: "input";
  /** When set, allows the Switch to be focusable even when it has been disabled. This is used in scenarios where it is import */
  disabledFocusable?: boolean;
  /** The size of the Switch. */
  size?: "small" | "medium";
  /** The track and the thumb sliding over it indicating the on and off status of the Switch. */
  indicator?: unknown;
}

export declare const Switch: React.ComponentType<SwitchProps>;
