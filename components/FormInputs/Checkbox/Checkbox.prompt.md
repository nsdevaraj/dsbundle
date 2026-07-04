Checkbox from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Checkbox` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Checkbox.html`): Default, Checked, Indeterminate, Disabled, With Hint.

## Props

```ts
interface CheckboxProps {
  label: string;
  /** true = checked, false = unchecked, "mixed" = indeterminate */
  checked?: boolean | "mixed";
  onChange?: (checked: boolean) => void;
  hint?: string;
  validationState?: "none" | "error" | "warning" | "success";
  validationMessage?: string;
  required?: boolean;
  /** Shape of the checkbox indicator — "square" (default) or "circular" */
  shape?: "square" | "circular";
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
  /** The root element of the Checkbox. The root slot receives the `className` and `style` specified directly on the `<Checkbo */
  root?: unknown;
  /** Hidden input that handles the checkbox's functionality. This is the PRIMARY slot: all native properties specified direct */
  input?: NonNullable<{ as?: "input"; } & Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & { ref?: React.Ref<HTMLInputElement>; }, "children"> & { children?: never; }>;
  style?: React.CSSProperties;
  children?: never;
  /** Whether the checkbox should be rendered as checked by default. */
  defaultChecked?: boolean | "mixed";
  id?: string;
  as?: "input";
  /** The size of the checkbox indicator. */
  size?: "medium" | "large";
  /** The checkbox, with the checkmark icon as its child when checked. */
  indicator?: unknown;
  /** The position of the label relative to the checkbox indicator. */
  labelPosition?: "before" | "after";
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { label: "Accept terms and conditions" },
};

// Checked
export const Checked: Story = {
  args: { label: "Remember me", checked: true },
};

// Indeterminate
export const Indeterminate: Story = {
  args: { label: "Select all (partial)", checked: "mixed" },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### Checked

```jsx
/* Checked */ compose(S, "Checked")
```

### Indeterminate

```jsx
/* Indeterminate */ compose(S, "Indeterminate")
```

### Disabled

```jsx
/* Disabled */ compose(S, "Disabled")
```

### WithHint

```jsx
/* With Hint */ compose(S, "WithHint")
```
