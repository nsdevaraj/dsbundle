MenuButton from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.MenuButton` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `MenuButton.html`): Primary, Secondary, With Icon, Disabled, Small.

## Props

```ts
interface MenuButtonProps {
  /** Button label */
  label: React.ReactNode;
  /** Menu items */
  items: MenuItemDef[];
  /** Fires with selected item id */
  onSelect?: (id: string) => void;
  appearance?: "primary" | "secondary" | "subtle";
  size?: "small" | "medium";
  disabled?: boolean;
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  positioning?: "before" | "after" | PositioningProps | "above" | "above-start" | "above-end" | "below" | "below-start" | "below-end" | "before-top" | "before-bottom" | "after-top" | "after-bottom";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
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
  args: { label: "Options", appearance: "secondary", items },
};

// [NON-STANDARD] Outline — removed; MenuButton does not support outline appearance
// TODO: review for removal
// export const Outline: Story = {
//   args: { label: "Export", appearance: "outline", items },
// };

// With Icon
export const WithIcon: Story = {
  args: {
    label: "Actions",
    appearance: "primary",
    icon: <ChevronDown20Regular />,
    items,
  },
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
