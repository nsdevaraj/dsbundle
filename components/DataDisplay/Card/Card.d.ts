import * as React from 'react';

/**
 * Card — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Card.stories.tsx).
 */
export interface CardProps {
  header?: CardHeaderConfig;
  /** Preview image or media above the header */
  preview?: React.ReactNode;
  /** Card body content */
  children?: React.ReactNode;
  /** Footer actions or metadata */
  footer?: React.ReactNode;
  /** Makes the card itself clickable */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  appearance?: "filled-alternative" | "subtle" | "filled" | "outline";
  size?: "small" | "medium" | "large";
  /** Orientation of header + preview layout */
  orientation?: "horizontal" | "vertical";
  /** Enables selection mode on the card */
  selectable?: boolean;
  /** Controlled selected state (use with selectable) */
  selected?: boolean;
  /** Callback fired when the card's selection state changes */
  onSelectionChange?: (selected: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
}

export declare const Card: React.ComponentType<CardProps>;
