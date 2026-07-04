Button from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Button` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Button.html`): Primary, Secondary, Subtle, With Icon, Icon After, Loading, Disabled, Small, Icon Only, Dark Mode, RTL.

## Props

```ts
interface ButtonProps {
  appearance?: "primary" | "secondary" | "subtle";
  size?: "small" | "medium";
  /** Shows a spinner and disables the button while true */
  loading?: boolean;
  /** Optional label announced to screen readers when loading is true */
  loadingLabel?: string;
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  iconPosition?: "before" | "after";
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  id?: string;
}
```

## Examples

```jsx
// Primary
export const Primary: Story = {
  args: { appearance: "primary", children: "Primary button" },
};

// Secondary
export const Secondary: Story = {
  args: { appearance: "secondary", children: "Secondary button" },
};

// Subtle
export const Subtle: Story = {
  args: { appearance: "subtle", children: "Subtle button" },
};
```

### Primary

```jsx
/* Primary */ compose(S, "Primary")
```

### Secondary

```jsx
/* Secondary */ compose(S, "Secondary")
```

### Subtle

```jsx
/* Subtle */ compose(S, "Subtle")
```

### WithIcon

```jsx
/* With Icon */ compose(S, "WithIcon")
```

### IconAfter

```jsx
/* Icon After */ compose(S, "IconAfter")
```

### Loading

```jsx
/* Loading */ compose(S, "Loading")
```

### Disabled

```jsx
/* Disabled */ compose(S, "Disabled")
```

### Small

```jsx
/* Small */ compose(S, "Small")
```

### IconOnly

```jsx
/* Icon Only */ compose(S, "IconOnly")
```

### DarkMode

```jsx
/* Dark Mode */ compose(S, "DarkMode")
```

### RTL

```jsx
/* RTL */ compose(S, "RTL")
```
