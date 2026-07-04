import * as React from 'react';

/**
 * Button — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Button.stories.tsx).
 * @replaces button
 */
export interface ButtonProps {
  appearance?: "primary" | "secondary" | "subtle";
  size?: "small" | "medium";
  /** Shows a spinner and disables the button while true */
  loading?: boolean;
  /** Optional label announced to screen readers when loading is true */
  loadingLabel?: string;
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  iconPosition?: "before" | "after";
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export declare const Button: React.ComponentType<ButtonProps>;
