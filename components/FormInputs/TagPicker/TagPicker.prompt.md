TagPicker from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.TagPicker` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `TagPicker.html`): Default, Controlled, Required, With Validation, Disabled, With Hint, No Label.

## Props

```ts
interface TagPickerProps {
  label?: string;
  options: TagPickerOption[];
  /** Controlled selected values */
  selectedValues?: string[];
  /** Callback when selection changes */
  onChange?: (values: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  validationState?: "none" | "error" | "warning" | "success";
  validationMessage?: string;
  hint?: string;
  /** Allow typing values not in the options list */
  freeform?: boolean;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { label: "Assignees", options: people, placeholder: "Search people…" },
};

// Controlled
export const Controlled: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(["alice"]);
    return (
      <TagPicker
        label="Team members"
        options={people}
        selectedValues={selected}
        onChange={setSelected}
        placeholder="Add members…"
      />
    );
  },
};

// Required
export const Required: Story = {
  args: { label: "Required field", options: people, required: true },
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

### Required

```jsx
/* Required */ compose(S, "Required")
```

### WithValidation

```jsx
/* With Validation */ compose(S, "WithValidation")
```

### Disabled

```jsx
/* Disabled */ compose(S, "Disabled")
```

### WithHint

```jsx
/* With Hint */ compose(S, "WithHint")
```

### NoLabel

```jsx
/* No Label */ compose(S, "NoLabel")
```
