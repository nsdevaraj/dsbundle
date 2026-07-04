Slider from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Slider` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Slider.html`): Default, With Value, Custom Range, Small, Disabled, With Validation.

## Props

```ts
interface SliderProps {
  label?: string;
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
  size?: "small" | "medium";
  /** Show the current value alongside the label */
  showValue?: boolean;
  /** Format function for the displayed value */
  formatValue?: (value: number) => string;
  required?: boolean;
  validationState?: "none" | "error" | "warning" | "success";
  validationMessage?: string;
  hint?: string;
  /** Render the slider vertically */
  vertical?: boolean;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { label: "Volume", defaultValue: 50 },
};

// With Value
export const WithValue: Story = {
  args: { label: "Brightness", defaultValue: 75, showValue: true },
};

// Custom Range
export const CustomRange: Story = {
  args: { label: "Zoom", min: 50, max: 200, step: 10, defaultValue: 100, showValue: true, formatValue: (v) => `${v}%` },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### WithValue

```jsx
/* With Value */ compose(S, "WithValue")
```

### CustomRange

```jsx
/* Custom Range */ compose(S, "CustomRange")
```

### Small

```jsx
/* Small */ compose(S, "Small")
```

### Disabled

```jsx
/* Disabled */ compose(S, "Disabled")
```

### WithValidation

```jsx
/* With Validation */ compose(S, "WithValidation")
```
