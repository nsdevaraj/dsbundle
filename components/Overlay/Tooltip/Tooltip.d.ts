import * as React from 'react';

/**
 * Tooltip — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Tooltip.stories.tsx).
 */
export interface TooltipProps {
  /** Tooltip text or content */
  content: React.ReactNode;
  /** The trigger element — must be a single focusable element */
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  /** "label" — tooltip IS the accessible name (use for icon-only buttons) "description"— tooltip supplements the accessible n */
  relationship?: "label" | "description" | "inaccessible";
  positioning?: "before" | "after" | PositioningProps | "above" | "above-start" | "above-end" | "below" | "below-start" | "below-end" | "before-top" | "before-bottom" | "after-top" | "after-bottom";
  /** Delay before showing tooltip, ms. Default 250 */
  showDelay?: number;
  /** Delay before hiding tooltip, ms. Default 250 */
  hideDelay?: number;
  withArrow?: boolean;
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
}

export declare const Tooltip: React.ComponentType<TooltipProps>;
