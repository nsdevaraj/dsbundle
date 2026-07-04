Select from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Select` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Select.html`): Default, Small, Medium, Required, With Groups, Error, Disabled.

## Props

```ts
interface SelectProps {
  label?: string;
  hint?: string;
  options: SelectOption[] | SelectGroup[];
  placeholder?: string;
  validationState?: "none" | "error" | "warning" | "success";
  validationMessage?: string;
  required?: boolean;
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
  appearance?: "filled-darker" | "outline" | "underline" | "filled-lighter";
  root?: unknown;
  /** Primary slot: the actual `<select>` element */
  select?: unknown;
  style?: React.CSSProperties;
  id?: string;
  as?: "select";
  /** the icon, typically a down arrow */
  icon?: unknown;
  /** Matches the Input sizes */
  size?: "small" | "medium" | "large";
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { label: "Fruit", options: fruits, placeholder: "Choose a fruit" },
};

// Small
export const Small: Story = {
  args: { label: "Fruit", options: fruits, placeholder: "Choose a fruit", size: "small" },
};

// Medium
export const Medium: Story = {
  args: { label: "Fruit", options: fruits, placeholder: "Choose a fruit", size: "medium" },
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

### Medium

```jsx
/* Medium */ compose(S, "Medium")
```

### Required

```jsx
/* Required */ compose(S, "Required")
```

### WithGroups

```jsx
/* With Groups */ compose(S, "WithGroups")
```

### Error

```jsx
/* Error */ compose(S, "Error")
```

### Disabled

```jsx
/* Disabled */ compose(S, "Disabled")
```
