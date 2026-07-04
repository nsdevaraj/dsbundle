import * as React from 'react';

/**
 * Menu — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Menu.stories.tsx).
 */
export interface MenuProps {
  /** The trigger element (button, icon-button, etc.) */
  trigger: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  /** Menu items */
  items: MenuItemDef[];
  /** Fires with the selected item id */
  onSelect?: (id: string) => void;
  /** Popover positioning */
  positioning?: "before" | "after" | PositioningProps | "above" | "above-start" | "above-end" | "below" | "below-start" | "below-end" | "before-top" | "before-bottom" | "after-top" | "after-bottom";
  /** Open state — omit for uncontrolled */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export declare const Menu: React.ComponentType<MenuProps>;
