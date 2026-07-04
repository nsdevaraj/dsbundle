ToggleButton from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.ToggleButton` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `ToggleButton.html`): Default, Checked By Default, With Icon, Controlled, Formatting Group, Disabled.

## Props

```ts
interface ToggleButtonProps {
  /** Whether the button is in the pressed/active state */
  checked?: boolean;
  /** Callback when toggled */
  onChange?: (checked: boolean) => void;
  appearance?: "primary" | "secondary" | "subtle";
  size?: "small" | "medium";
  disabled?: boolean;
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  iconPosition?: "before" | "after";
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
  /** Controlled — omit to use uncontrolled behaviour */
  defaultChecked?: boolean;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { children: "Toggle me", appearance: "secondary" },
};

// Checked By Default
export const CheckedByDefault: Story = {
  args: { children: "Pinned", appearance: "secondary", checked: true },
};

// With Icon
export const WithIcon: Story = {
  args: { icon: <TextBold20Regular />, "aria-label": "Bold", appearance: "subtle" },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### CheckedByDefault

```jsx
/* Checked By Default */ compose(S, "CheckedByDefault")
```

### WithIcon

```jsx
/* With Icon */ compose(S, "WithIcon")
```

### Controlled

```jsx
/* Controlled */ compose(S, "Controlled")
```

### FormattingGroup

```jsx
/* Formatting Group */ compose(S, "FormattingGroup")
```

### Disabled

```jsx
/* Disabled */ compose(S, "Disabled")
```
