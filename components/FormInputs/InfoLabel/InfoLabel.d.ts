import * as React from 'react';

/**
 * InfoLabel — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/InfoLabel.stories.tsx).
 */
export interface InfoLabelProps {
  /** The visible label text */
  label: React.ReactNode;
  /** Content for the info popover. If omitted, no info button is rendered. */
  info?: React.ReactNode;
  /** Mark label as required (adds asterisk) */
  required?: boolean;
  /** Mark label as disabled */
  disabled?: boolean;
  size?: "small" | "medium";
  weight?: "regular" | "semibold";
  /** htmlFor — links the label to a form control */
  htmlFor?: string;
  infoPositioning?: "before" | "after" | PositioningProps | "above" | "above-start" | "above-end" | "below" | "below-start" | "below-end" | "before-top" | "before-bottom" | "after-top" | "after-bottom";
  className?: string;
  style?: React.CSSProperties;
}

export declare const InfoLabel: React.ComponentType<InfoLabelProps>;
