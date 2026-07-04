Rating from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Rating` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Rating.html`): Default, Controlled, Read Only, Small, Large, Ten Stars, Disabled, With Label.

## Props

```ts
interface RatingProps {
  /** Controlled value (1–max) */
  value?: number;
  defaultValue?: number;
  /** Maximum stars. Default 5. */
  max?: number;
  /** Allow half-star precision */
  step?: 0.5 | 1;
  onChange?: (value: number) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large" | "extra-large";
  color?: "brand" | "marigold" | "neutral";
  shape?: "square" | "circular";
  /** Accessible label for the rating control */
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { value: 3, count: 5 },
};

// Controlled
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return <Rating value={value} count={5} onChange={setValue} />;
  },
};

// Read Only
export const ReadOnly: Story = {
  args: { value: 4.5, count: 5, readOnly: true },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### Controlled

```jsx
/* Controlled */ compose(S, "Controlled")
```

### ReadOnly

```jsx
/* Read Only */ compose(S, "ReadOnly")
```

### Small

```jsx
/* Small */ compose(S, "Small")
```

### Large

```jsx
/* Large */ compose(S, "Large")
```

### TenStars

```jsx
/* Ten Stars */ compose(S, "TenStars")
```

### Disabled

```jsx
/* Disabled */ compose(S, "Disabled")
```

### WithLabel

```jsx
/* With Label */ compose(S, "WithLabel")
```
