import * as React from 'react';

/**
 * Popover — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Popover.stories.tsx).
 */
export interface PopoverProps {
  /** The element that triggers the popover */
  trigger: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  /** Popover content */
  content: React.ReactNode;
  /** Optional heading inside the popover */
  heading?: React.ReactNode;
  /** Controlled open state */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  positioning?: "before" | "after" | PositioningProps | "above" | "above-start" | "above-end" | "below" | "below-start" | "below-end" | "before-top" | "before-bottom" | "after-top" | "after-bottom";
  /** Show an arrow pointing to the trigger. Default: true */
  withArrow?: boolean;
  /** Whether the popover traps focus (true = modal, false = non-modal). Default: false */
  trapFocus?: boolean;
  /** Close on outside click. Default: true */
  closeOnScroll?: boolean;
}

export declare const Popover: React.ComponentType<PopoverProps>;
