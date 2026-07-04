CounterBadge from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.CounterBadge` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `CounterBadge.html`): Brand, Danger, Important, Informative, Overflow, Show Zero, Ghost, Dot, Small, Large.

## Props

```ts
interface CounterBadgeProps {
  /** The numeric count to display */
  count?: number;
  /** Render as a dot (ignores count) */
  dot?: boolean;
  /** Maximum count before showing overflow label. Default 99. */
  overflowCount?: number;
  /** Show the badge even when count === 0 */
  showZero?: boolean;
  color?: "brand" | "danger" | "important" | "informative";
  appearance?: "filled" | "ghost";
  size?: "small" | "medium" | "large" | "extra-small" | "extra-large";
  /** Shape — "circular" (default) or "rounded" */
  shape?: "circular" | "rounded";
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
}
```

## Examples

```jsx
// Brand
export const Brand: Story = {
  args: { count: 5, color: "brand" },
};

// Danger
export const Danger: Story = {
  args: { count: 99, color: "danger" },
};

// Important
export const Important: Story = {
  args: { count: 3, color: "important" },
};
```

### Brand

```jsx
/* Brand */ compose(S, "Brand")
```

### Danger

```jsx
/* Danger */ compose(S, "Danger")
```

### Important

```jsx
/* Important */ compose(S, "Important")
```

### Informative

```jsx
/* Informative */ compose(S, "Informative")
```

### Overflow

```jsx
/* Overflow */ compose(S, "Overflow")
```

### ShowZero

```jsx
/* Show Zero */ compose(S, "ShowZero")
```

### Ghost

```jsx
/* Ghost */ compose(S, "Ghost")
```

### Dot

```jsx
/* Dot */ compose(S, "Dot")
```

### Small

```jsx
/* Small */ compose(S, "Small")
```

### Large

```jsx
/* Large */ compose(S, "Large")
```
