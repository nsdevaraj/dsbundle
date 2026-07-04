DataTable from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.DataTable` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `DataTable.html`): Default, With Selection, With Pagination, Loading, Empty, Dark Mode.

## Props

```ts
interface DataTableProps {
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
```

## Examples

```jsx
// Default
export const Default: Story = {
  render: () => <DataTable items={users} columns={columns} />,
};

// With Selection
export const WithSelection: Story = {
  render: () => <DataTable items={users} columns={columns} selectionMode="multiselect" />,
};

// With Pagination
export const WithPagination: Story = {
  render: () => <DataTable items={users} columns={columns} pageSize={2} />,
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### WithSelection

```jsx
/* With Selection */ compose(S, "WithSelection")
```

### WithPagination

```jsx
/* With Pagination */ compose(S, "WithPagination")
```

### Loading

```jsx
/* Loading */ compose(S, "Loading")
```

### Empty

```jsx
/* Empty */ compose(S, "Empty")
```

### DarkMode

```jsx
/* Dark Mode */ compose(S, "DarkMode")
```
