import * as React from 'react';

/**
 * Drawer — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Drawer.stories.tsx).
 */
export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  /** Subtitle below the title */
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  /** Footer content (typically action buttons) */
  footer?: React.ReactNode;
  position?: "start" | "end" | "bottom";
  size?: "small" | "medium" | "large" | "full";
  /** Whether clicking the overlay backdrop closes the drawer. Default: true */
  modalType?: "alert" | "modal" | "non-modal";
  /** Render as an overlay drawer (default) or an inline drawer */
  type?: "inline" | "overlay";
}

export declare const Drawer: React.ComponentType<DrawerProps>;
