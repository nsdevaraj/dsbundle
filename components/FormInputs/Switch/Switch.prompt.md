Switch from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Switch` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Switch.html`): Default, Checked, Label After, Disabled, With Validation.

## Props

```ts
interface SwitchProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  labelPosition?: "before" | "after";
  hint?: string;
  validationState?: "none" | "error" | "warning" | "success";
  validationMessage?: string;
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
  /** The root element of the Switch. The root slot receives the `className` and `style` specified directly on the `<Switch>`  */
  root?: unknown;
  /** Hidden input that handles the Switch's functionality. This is the PRIMARY slot: all native properties specified directly */
  input?: NonNullable<{ as?: "input"; } & Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & { ref?: React.Ref<HTMLInputElement>; }, "children"> & { children?: never; }>;
  style?: React.CSSProperties;
  children?: never;
  /** Defines whether the Switch is initially in a checked state or not when rendered. */
  defaultChecked?: boolean;
  id?: string;
  as?: "input";
  /** When set, allows the Switch to be focusable even when it has been disabled. This is used in scenarios where it is import */
  disabledFocusable?: boolean;
  /** The size of the Switch. */
  size?: "small" | "medium";
  /** The track and the thumb sliding over it indicating the on and off status of the Switch. */
  indicator?: unknown;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { label: "Enable notifications" },
};

// Checked
export const Checked: Story = {
  args: { label: "Dark mode", checked: true },
};

// Label After
export const LabelAfter: Story = {
  args: { label: "Auto-save", labelPosition: "after" },
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

### LabelAfter

```jsx
/* Label After */ compose(S, "LabelAfter")
```

### Disabled

```jsx
/* Disabled */ compose(S, "Disabled")
```

### WithValidation

```jsx
/* With Validation */ compose(S, "WithValidation")
```
