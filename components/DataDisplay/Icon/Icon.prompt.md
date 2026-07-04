Icon from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Icon` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Icon.html`): Decorative, Meaningful, Brand, Warning, Danger, Large.

## Props

```ts
interface IconProps {
  /** A rendered Fluent icon element. Must be from */
  icon: FluentIconElement;
  /** px size override — sets width and height on the wrapper */
  size?: number;
  color?: "inherit" | "warning" | "success" | "brand" | "danger" | "default" | "muted";
  /** Required for non-decorative icons */
  "aria-label"?: string;
  className?: string;
}
```

## Examples

```jsx
// Decorative
export const Decorative: Story   = { args: { icon: <Add20Regular />, color: "default" } };

// Meaningful
export const Meaningful: Story   = { args: { icon: <Add20Regular />, "aria-label": "Add item" } };

// Brand
export const Brand: Story        = { args: { icon: <Heart20Regular />, color: "brand" } };
```

### Decorative

```jsx
/* Decorative */ compose(S, "Decorative")
```

### Meaningful

```jsx
/* Meaningful */ compose(S, "Meaningful")
```

### Brand

```jsx
/* Brand */ compose(S, "Brand")
```

### Warning

```jsx
/* Warning */ compose(S, "Warning")
```

### Danger

```jsx
/* Danger */ compose(S, "Danger")
```

### Large

```jsx
/* Large */ compose(S, "Large")
```
