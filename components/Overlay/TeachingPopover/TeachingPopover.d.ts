import * as React from 'react';

/**
 * TeachingPopover — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/TeachingPopover.stories.tsx).
 */
export interface TeachingPopoverProps {
  /** The element that triggers the popover */
  trigger: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  /** Popover title (single-step mode) */
  title?: string;
  /** Popover body (single-step mode) */
  body?: React.ReactNode;
  /** Steps for carousel mode — takes priority over title/body */
  steps?: TeachingPopoverStep[];
  /** Primary CTA (e.g. "Got it", "Try it") */
  primaryAction?: TeachingPopoverAction;
  /** Secondary / dismiss action */
  secondaryAction?: TeachingPopoverAction;
  positioning?: "before" | "after" | PositioningProps | "above" | "above-start" | "above-end" | "below" | "below-start" | "below-end" | "before-top" | "before-bottom" | "after-top" | "after-bottom";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Dismiss button in header */
  withDismiss?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export declare const TeachingPopover: React.ComponentType<TeachingPopoverProps>;
