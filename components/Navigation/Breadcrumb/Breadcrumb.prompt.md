Breadcrumb from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Breadcrumb` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Breadcrumb.html`): Default, Small, Two Levels, Many Levels.

## Props

```ts
interface BreadcrumbProps {
  items: BreadcrumbItemDef[];
  size?: "small" | "medium";
  /** aria-label for the breadcrumb nav landmark */
  "aria-label"?: string;
  className?: string;
  style?: React.CSSProperties;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { items },
};

// Small
export const Small: Story = {
  args: { items, size: "small" },
};

// Two Levels
export const TwoLevels: Story = {
  args: {
    items: [
      { key: "home",    text: "Home",    href: "/" },
      { key: "current", text: "Settings" },
    ],
  },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### Small

```jsx
/* Small */ compose(S, "Small")
```

### TwoLevels

```jsx
/* Two Levels */ compose(S, "TwoLevels")
```

### ManyLevels

```jsx
/* Many Levels */ compose(S, "ManyLevels")
```
