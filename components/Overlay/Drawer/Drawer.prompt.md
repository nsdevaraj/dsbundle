Drawer from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Drawer` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Drawer.html`): Default, Start, Small, Large, With Subtitle.

## Props

```ts
interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  /** Subtitle below the title */
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  /** Footer content (typically action buttons) */
  footer?: React.ReactNode;
  position?: "start" | "end" | "bottom";
  size?: "small" | "medium" | "large" | "full";
  /** Whether clicking the overlay backdrop closes the drawer. Default: true */
  modalType?: "alert" | "modal" | "non-modal";
  /** Render as an overlay drawer (default) or an inline drawer */
  type?: "inline" | "overlay";
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  render: () => <DrawerDemo />,
};

// Start
export const Start: Story = {
  render: () => <DrawerDemo position="start" title="Left Drawer" />,
};

// Small
export const Small: Story = {
  render: () => <DrawerDemo size="small" title="Small Drawer" />,
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### Start

```jsx
/* Start */ compose(S, "Start")
```

### Small

```jsx
/* Small */ compose(S, "Small")
```

### Large

```jsx
/* Large */ compose(S, "Large")
```

### WithSubtitle

```jsx
/* With Subtitle */ compose(S, "WithSubtitle")
```
