import * as React from 'react';

/**
 * ToggleButton — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/ToggleButton.stories.tsx).
 */
export interface ToggleButtonProps {
  /** Whether the button is in the pressed/active state */
  checked?: boolean;
  /** Callback when toggled */
  onChange?: (checked: boolean) => void;
  appearance?: "primary" | "secondary" | "subtle";
  size?: "small" | "medium";
  disabled?: boolean;
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  iconPosition?: "before" | "after";
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
  /** Controlled — omit to use uncontrolled behaviour */
  defaultChecked?: boolean;
}

export declare const ToggleButton: React.ComponentType<ToggleButtonProps>;
