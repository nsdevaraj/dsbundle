import * as React from 'react';

/**
 * Dialog — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Dialog.stories.tsx).
 * @replaces dialog
 */
export interface DialogProps {
  /** Dialog open state */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Dialog title */
  title?: React.ReactNode;
  /** Body content */
  children?: React.ReactNode;
  /** Footer actions — renders inside DialogActions */
  actions?: React.ReactNode;
  /** Size of the dialog surface */
  size?: "small" | "max" | "medium" | "large";
  /** modal (default) | non-modal | alert (no close button, role="alertdialog") */
  modalType?: "alert" | "modal" | "non-modal";
  /** Show the X close button in the title. Default true for modal/non-modal. */
  showCloseButton?: boolean;
  /** Optional trigger element (uncontrolled mode) */
  trigger?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  className?: string;
  style?: React.CSSProperties;
  "aria-describedby"?: string;
}

export declare const Dialog: React.ComponentType<DialogProps>;
