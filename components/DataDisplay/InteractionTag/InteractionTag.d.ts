import * as React from 'react';

/**
 * InteractionTag — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/InteractionTag.stories.tsx).
 */
export interface InteractionTagProps {
  /** Unique value for this tag (used in dismiss callback) */
  value: string;
  children: React.ReactNode;
  /** Fires when the primary (label) area is clicked */
  onPrimaryClick?: (value: string) => void;
  /** Fires when the dismiss (×) button is clicked. If omitted, dismiss button is hidden. */
  onDismiss?: (value: string) => void;
  /** Dismiss button aria-label */
  dismissAriaLabel?: string;
  size?: "small" | "medium" | "extra-small";
  shape?: "square" | "circular" | "rounded";
  appearance?: "filled" | "outline" | "brand" | "tint";
  disabled?: boolean;
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  media?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  className?: string;
  style?: React.CSSProperties;
}

export declare const InteractionTag: React.ComponentType<InteractionTagProps>;
