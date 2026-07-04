import * as React from 'react';

/**
 * Divider — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Divider.stories.tsx).
 */
export interface DividerProps {
  label?: string;
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
  /** Wrapper for content when presented. */
  wrapper?: unknown;
  style?: React.CSSProperties;
  children?: any;
  id?: string;
  as?: "div";
  /** Determines the alignment of the content within the divider. */
  alignContent?: "center" | "start" | "end";
  /** A divider can have one of the preset appearances. When not specified, the divider has its default appearance. */
  appearance?: "strong" | "subtle" | "brand" | "default";
  /** Adds padding to the beginning and end of the divider. */
  inset?: boolean;
  /** A divider can be horizontal (default) or vertical. */
  vertical?: boolean;
}

export declare const Divider: React.ComponentType<DividerProps>;
