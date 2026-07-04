ProgressBar from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.ProgressBar` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `ProgressBar.html`): Default, With Percentage, Indeterminate, Success, Error, Warning, Large.

## Props

```ts
interface ProgressBarProps {
  /** Visible label shown above the bar */
  label?: string;
  /** Current progress, 0–1. Omit (or undefined) for indeterminate animation. */
  value?: number;
  /** Show percentage text alongside the label */
  showPercentage?: boolean;
  color?: "error" | "warning" | "success" | "brand";
  thickness?: "medium" | "large";
  /** Hint text shown below the bar */
  hint?: string;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { label: "Loading…", value: 0.4 },
};

// With Percentage
export const WithPercentage: Story = {
  args: { label: "Uploading file", value: 0.72, showPercentage: true },
};

// Indeterminate
export const Indeterminate: Story = {
  args: { label: "Processing…" },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### WithPercentage

```jsx
/* With Percentage */ compose(S, "WithPercentage")
```

### Indeterminate

```jsx
/* Indeterminate */ compose(S, "Indeterminate")
```

### Success

```jsx
/* Success */ compose(S, "Success")
```

### Error

```jsx
/* Error */ compose(S, "Error")
```

### Warning

```jsx
/* Warning */ compose(S, "Warning")
```

### Large

```jsx
/* Large */ compose(S, "Large")
```
