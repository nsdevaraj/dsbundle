import * as React from 'react';

/**
 * ConfirmDialog — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/ConfirmDialog.stories.tsx).
 */
export interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  /** Appearance of the confirm button */
  confirmAppearance?: "primary" | "secondary" | "subtle";
  onConfirm: () => void;
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
}

export declare const ConfirmDialog: React.ComponentType<ConfirmDialogProps>;
