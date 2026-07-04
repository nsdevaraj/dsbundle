import * as React from 'react';

/**
 * SplitButton — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/SplitButton.stories.tsx).
 */
export interface SplitButtonProps {
  /** Primary button label */
  label: React.ReactNode;
  /** Fires when the primary (left) button is clicked */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Dropdown menu items */
  items: MenuItemDef[];
  /** Fires with selected dropdown item id */
  onSelect?: (id: string) => void;
  appearance?: "primary" | "secondary" | "subtle";
  size?: "small" | "medium";
  disabled?: boolean;
  /** Icon shown in the primary button */
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  positioning?: "before" | "after" | PositioningProps | "above" | "above-start" | "above-end" | "below" | "below-start" | "below-end" | "before-top" | "before-bottom" | "after-top" | "after-bottom";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  /** aria-label for the primary button zone */
  "aria-label"?: string;
  /** aria-label for the chevron/dropdown zone */
  menuAriaLabel?: string;
}

export declare const SplitButton: React.ComponentType<SplitButtonProps>;
