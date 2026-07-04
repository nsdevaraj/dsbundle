Dropdown from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Dropdown` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Dropdown.html`): Default, With Default Value, Grouped, With Disabled Option, Multiselect, Multiselect With Defaults, Small, Disabled, Dark Mode, All Appearances, All Sizes.

## Props

```ts
interface DropdownProps {
  /** Options list (flat). Use `groups` instead for grouped options. */
  options?: DropdownOption[];
  /** Grouped options. Use instead of `options`. */
  groups?: DropdownOptionGroup[];
  /** Selected value(s) for controlled mode. */
  value?: string | string[];
  /** Default selected value(s) for uncontrolled mode. */
  defaultValue?: string | string[];
  /** Fires when the selection changes. Receives the last-clicked value and the full selected array. */
  onValueChange?: (value: string, selectedOptions: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  /** Allow multiple selection. */
  multiselect?: boolean;
  appearance?: "filled-darker" | "outline" | "underline" | "filled-lighter";
  size?: "small" | "medium" | "large";
  /** Accessible label (prefer this over aria-labelledby when there is no visible label element). */
  "aria-label"?: string;
  "aria-labelledby"?: string;
  className?: string;
  style?: React.CSSProperties;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: {
    options: colors,
    placeholder: "Select a color",
    "aria-label": "Color",
  },
};

// With Default Value
export const WithDefaultValue: Story = {
  args: {
    options: colors,
    defaultValue: "blue",
    "aria-label": "Color",
  },
};

// Grouped
export const Grouped: Story = {
  args: {
    groups: groupedFruits,
    placeholder: "Select a fruit",
    "aria-label": "Fruit",
  },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### WithDefaultValue

```jsx
/* With Default Value */ compose(S, "WithDefaultValue")
```

### Grouped

```jsx
/* Grouped */ compose(S, "Grouped")
```

### WithDisabledOption

```jsx
/* With Disabled Option */ compose(S, "WithDisabledOption")
```

### Multiselect

```jsx
/* Multiselect */ compose(S, "Multiselect")
```

### MultiselectWithDefaults

```jsx
/* Multiselect With Defaults */ compose(S, "MultiselectWithDefaults")
```

### Small

```jsx
/* Small */ compose(S, "Small")
```

### Disabled

```jsx
/* Disabled */ compose(S, "Disabled")
```

### DarkMode

```jsx
/* Dark Mode */ compose(S, "DarkMode")
```

### AllAppearances

```jsx
/* All Appearances */ compose(S, "AllAppearances")
```

### AllSizes

```jsx
/* All Sizes */ compose(S, "AllSizes")
```
