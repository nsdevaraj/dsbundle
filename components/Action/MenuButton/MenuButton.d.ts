import * as React from 'react';

/**
 * MenuButton — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/MenuButton.stories.tsx).
 */
export interface MenuButtonProps {
  /** Button label */
  label: React.ReactNode;
  /** Menu items */
  items: MenuItemDef[];
  /** Fires with selected item id */
  onSelect?: (id: string) => void;
  appearance?: "primary" | "secondary" | "subtle";
  size?: "small" | "medium";
  disabled?: boolean;
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  positioning?: "before" | "after" | PositioningProps | "above" | "above-start" | "above-end" | "below" | "below-start" | "below-end" | "before-top" | "before-bottom" | "after-top" | "after-bottom";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
}

export declare const MenuButton: React.ComponentType<MenuButtonProps>;
