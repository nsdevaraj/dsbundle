SpinButton from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.SpinButton` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `SpinButton.html`): Default, With Precision, With Suffix, Bounded, Disabled, With Validation, Small, Medium.

## Props

```ts
interface SpinButtonProps {
  label?: string;
  /** Controlled value */
  value?: number;
  /** Uncontrolled default */
  defaultValue?: number;
  min?: number;
  max?: number;
  /** Step per click/arrow key. Default 1. */
  step?: number;
  /** Step multiplier when Shift is held. Default 10. */
  stepPage?: number;
  /** Decimal precision for display */
  precision?: number;
  /** Prefix text (e.g. "$") */
  prefix?: string;
  /** Suffix text (e.g. "kg") */
  suffix?: string;
  disabled?: boolean;
  required?: boolean;
  validationState?: "none" | "error" | "warning" | "success";
  validationMessage?: string;
  hint?: string;
  appearance?: "filled-darker" | "outline" | "underline" | "filled-lighter";
  onChange?: (value: number | null) => void;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { label: "Quantity", defaultValue: 1, min: 0, max: 100 },
};

// With Precision
export const WithPrecision: Story = {
  args: { label: "Price", defaultValue: 9.99, step: 0.01, precision: 2, prefix: "$" },
};

// With Suffix
export const WithSuffix: Story = {
  args: { label: "Weight", defaultValue: 10, step: 0.5, suffix: " kg" },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### WithPrecision

```jsx
/* With Precision */ compose(S, "WithPrecision")
```

### WithSuffix

```jsx
/* With Suffix */ compose(S, "WithSuffix")
```

### Bounded

```jsx
/* Bounded */ compose(S, "Bounded")
```

### Disabled

```jsx
/* Disabled */ compose(S, "Disabled")
```

### WithValidation

```jsx
/* With Validation */ compose(S, "WithValidation")
```

### Small

```jsx
/* Small */ compose(S, "Small")
```

### Medium

```jsx
/* Medium */ compose(S, "Medium")
```
