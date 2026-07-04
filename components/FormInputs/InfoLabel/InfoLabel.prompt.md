InfoLabel from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.InfoLabel` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `InfoLabel.html`): Default, Required, Small, Large, Long Tooltip.

## Props

```ts
interface InfoLabelProps {
  /** The visible label text */
  label: React.ReactNode;
  /** Content for the info popover. If omitted, no info button is rendered. */
  info?: React.ReactNode;
  /** Mark label as required (adds asterisk) */
  required?: boolean;
  /** Mark label as disabled */
  disabled?: boolean;
  size?: "small" | "medium";
  weight?: "regular" | "semibold";
  /** htmlFor — links the label to a form control */
  htmlFor?: string;
  infoPositioning?: "before" | "after" | PositioningProps | "above" | "above-start" | "above-end" | "below" | "below-start" | "below-end" | "before-top" | "before-bottom" | "after-top" | "after-bottom";
  className?: string;
  style?: React.CSSProperties;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: {
    children: "Email address",
    infoText: "We'll only use this to send important account notifications.",
  },
};

// Required
export const Required: Story = {
  args: {
    children: "Password",
    required: true,
    infoText: "Must be at least 8 characters with a number and a symbol.",
  },
};

// Small
export const Small: Story = {
  args: {
    children: "Username",
    size: "small",
    infoText: "3–20 characters, letters and numbers only.",
  },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### Required

```jsx
/* Required */ compose(S, "Required")
```

### Small

```jsx
/* Small */ compose(S, "Small")
```

### Large

```jsx
/* Large */ compose(S, "Large")
```

### LongTooltip

```jsx
/* Long Tooltip */ compose(S, "LongTooltip")
```
