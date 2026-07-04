Spinner from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Spinner` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Spinner.html`): Default, With Label, Label Above, Large, Tiny.

## Props

```ts
interface SpinnerProps {
  size?: "small" | "medium" | "large" | "extra-small" | "extra-large" | "huge" | "tiny";
  label?: string;
  labelPosition?: "before" | "after" | "above" | "below";
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
  style?: React.CSSProperties;
  children?: any;
  id?: string;
  as?: "div" | "span";
  /** The appearance of the Spinner. */
  appearance?: "primary" | "inverted";
  /** The animated spinning ring. */
  spinner?: unknown;
  /** The part of the spinner that rotates. */
  spinnerTail?: unknown;
  /** Time in milliseconds after component mount before spinner is visible. */
  delay?: number;
}
```

## Examples

```jsx
// Default
export const Default: Story   = { args: {} };

// With Label
export const WithLabel: Story = { args: { label: "Loading data…" } };

// Label Above
export const LabelAbove: Story  = { args: { label: "Please wait", labelPosition: "above" } };
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### WithLabel

```jsx
/* With Label */ compose(S, "WithLabel")
```

### LabelAbove

```jsx
/* Label Above */ compose(S, "LabelAbove")
```

### Large

```jsx
/* Large */ compose(S, "Large")
```

### Tiny

```jsx
/* Tiny */ compose(S, "Tiny")
```
