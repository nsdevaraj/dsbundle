Tree from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Tree` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Tree.html`): Default, Single Select, Multi Select, Small, Flat List.

## Props

```ts
interface TreeProps {
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
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { items: fileTree, "aria-label": "File tree" },
};

// Single Select
export const SingleSelect: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return (
      <Tree
        items={fileTree}
        aria-label="Single-select file tree"
        selectionMode="single"
        onSelectionChange={setSelected}
      />
    );
  },
};

// Multi Select
export const MultiSelect: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return (
      <div>
        <Tree
          items={fileTree}
          aria-label="Multi-select file tree"
          selectionMode="multiselect"
          onSelectionChange={setSelected}
        />
        {selected.length > 0 && (
          <p style={{ marginTop: 8, fontSize: 13 }}>Selected: {selected.join(", ")}</p>
        )}
      </div>
    );
  },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### SingleSelect

```jsx
/* Single Select */ compose(S, "SingleSelect")
```

### MultiSelect

```jsx
/* Multi Select */ compose(S, "MultiSelect")
```

### Small

```jsx
/* Small */ compose(S, "Small")
```

### FlatList

```jsx
/* Flat List */ compose(S, "FlatList")
```
