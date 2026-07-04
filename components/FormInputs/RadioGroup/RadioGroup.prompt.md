RadioGroup from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.RadioGroup` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `RadioGroup.html`): Vertical, Horizontal, With Default, Required.

## Props

```ts
interface RadioGroupProps {
  label?: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  layout?: "horizontal" | "vertical";
  hint?: string;
  validationState?: "none" | "error" | "warning" | "success";
  validationMessage?: string;
  required?: boolean;
  style?: React.CSSProperties;
  className?: string;
  children?: any;
  id?: string;
  as?: "div";
  /** Disable all Radio items in this group. */
  disabled?: boolean;
  /** The name of this radio group. This name is applied to all Radio items inside this group. If no name is provided, one wil */
  name?: string;
}
```

## Examples

```jsx
// Vertical
export const Vertical: Story = {
  args: { label: "T-shirt size", options, layout: "vertical" },
};

// Horizontal
export const Horizontal: Story = {
  args: { label: "T-shirt size", options: options.slice(0, 3), layout: "horizontal" },
};

// With Default
export const WithDefault: Story = {
  args: { label: "Plan", options, defaultValue: "md" },
};
```

### Vertical

```jsx
/* Vertical */ compose(S, "Vertical")
```

### Horizontal

```jsx
/* Horizontal */ compose(S, "Horizontal")
```

### WithDefault

```jsx
/* With Default */ compose(S, "WithDefault")
```

### Required

```jsx
/* Required */ compose(S, "Required")
```
