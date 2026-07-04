SplitButton from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.SplitButton` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `SplitButton.html`): Primary, Secondary, Outline, With Icon, Disabled, Small.

## Props

```ts
interface SplitButtonProps {
  /** Primary button label */
  label: React.ReactNode;
  /** Fires when the primary (left) button is clicked */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Dropdown menu items */
  items: MenuItemDef[];
  /** Fires with selected dropdown item id */
  onSelect?: (id: string) => void;
  appearance?: "primary" | "secondary" | "subtle";
  size?: "small" | "medium";
  disabled?: boolean;
  /** Icon shown in the primary button */
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  positioning?: "before" | "after" | PositioningProps | "above" | "above-start" | "above-end" | "below" | "below-start" | "below-end" | "before-top" | "before-bottom" | "after-top" | "after-bottom";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  /** aria-label for the primary button zone */
  "aria-label"?: string;
  /** aria-label for the chevron/dropdown zone */
  menuAriaLabel?: string;
}
```

## Examples

```jsx
// Primary
export const Primary: Story = {
  args: { label: "Save", appearance: "primary", items },
};

// Secondary
export const Secondary: Story = {
  args: { label: "Save", appearance: "secondary", items },
};

// Outline
export const Outline: Story = {
  args: { label: "Save", appearance: "outline", items },
};
```

### Primary

```jsx
/* Primary */ compose(S, "Primary")
```

### Secondary

```jsx
/* Secondary */ compose(S, "Secondary")
```

### Outline

```jsx
/* Outline */ compose(S, "Outline")
```

### WithIcon

```jsx
/* With Icon */ compose(S, "WithIcon")
```

### Disabled

```jsx
/* Disabled */ compose(S, "Disabled")
```

### Small

```jsx
/* Small */ compose(S, "Small")
```
