Divider from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Divider` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Divider.html`): Default, With Label, Vertical.

## Props

```ts
interface DividerProps {
  label?: string;
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
  /** Wrapper for content when presented. */
  wrapper?: unknown;
  style?: React.CSSProperties;
  children?: any;
  id?: string;
  as?: "div";
  /** Determines the alignment of the content within the divider. */
  alignContent?: "center" | "start" | "end";
  /** A divider can have one of the preset appearances. When not specified, the divider has its default appearance. */
  appearance?: "strong" | "subtle" | "brand" | "default";
  /** Adds padding to the beginning and end of the divider. */
  inset?: boolean;
  /** A divider can be horizontal (default) or vertical. */
  vertical?: boolean;
}
```

## Examples

```jsx
// Default
export const Default: Story = { args: {} };

// With Label
export const WithLabel: Story = { args: { label: "or continue with" } };

// Vertical
export const Vertical: Story = {
  render: () => (
    <div style={{ display: "flex", height: 40, alignItems: "center" }}>
      <span>Left</span>
      <Divider vertical />
      <span>Right</span>
    </div>
  ),
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### WithLabel

```jsx
/* With Label */ compose(S, "WithLabel")
```

### Vertical

```jsx
/* Vertical */ compose(S, "Vertical")
```
