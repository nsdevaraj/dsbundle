import * as React from 'react';

/**
 * Tree — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Tree.stories.tsx).
 */
export interface TreeProps {
  items: TreeItemDef[];
  /** Accessible label for the tree region */
  "aria-label": string;
  selectionMode?: "none" | "multiselect" | "single";
  /** Controlled expanded item ids */
  openItems?: Iterable<string>;
  onOpenChange?: (event: TreeOpenChangeEvent, data: TreeOpenChangeData) => void;
  /** Controlled selected ids */
  selectedItems?: Iterable<TreeSelectionValue>;
  onSelectionChange?: (selected: string[]) => void;
  /** Expand all items initially (uncontrolled) */
  defaultOpenAll?: boolean;
  size?: "small" | "medium" | "large";
  appearance?: "subtle" | "transparent";
  className?: string;
  style?: React.CSSProperties;
}

export declare const Tree: React.ComponentType<TreeProps>;
