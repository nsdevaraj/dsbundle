import * as React from 'react';

/**
 * Toolbar — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Toolbar.stories.tsx).
 */
export interface ToolbarProps {
  /** All toolbar items in order */
  items: ToolbarItem[];
  /** Accessible label for the toolbar region */
  "aria-label": string;
  size?: "small" | "medium";
  checkedValues?: Record<string, string[]>;
  onCheckedValueChange?: (name: string, values: string[]) => void;
  className?: string;
  style?: React.CSSProperties;
  /** Vertical orientation (default: horizontal) */
  vertical?: boolean;
}

export declare const Toolbar: React.ComponentType<ToolbarProps>;
