import * as React from 'react';

/**
 * DataTable — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/DataTable.stories.tsx).
 */
export interface DataTableProps<T extends {
    id: string | number;
}> {
  columns: DataTableColumn<T>[];
  items: T[];
  /** Enable row selection */
  selectionMode?: "multiselect" | "single";
  /** Controlled selected row IDs */
  selectedItems?: Set<string | number>;
  onSelectionChange?: (selectedIds: Set<string | number>) => void;
  /** Items per page. Omit to disable pagination. */
  pageSize?: number;
  /** Loading skeleton rows count */
  loading?: boolean;
  /** Message shown when items array is empty */
  emptyMessage?: React.ReactNode;
  /** Default sort column */
  defaultSortColumn?: string;
  defaultSortDirection?: "ascending" | "descending";
  /** Group items by a key. Pass a function that returns the group label for each item. Rows with the same label are grouped t */
  groupBy?: (item: T) => string;
  /** Render group headers in a sticky position when scrolling */
  stickyHeader?: boolean;
  /** Max height of the table scroll container (CSS value, e.g. "400px"). Required for stickyHeader to work. */
  maxHeight?: string;
  /** Forward a ref to the root container element */
  innerRef?: React.Ref;
}

export declare const DataTable: React.ComponentType<DataTableProps>;
