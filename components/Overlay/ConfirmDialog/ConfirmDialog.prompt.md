ConfirmDialog from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.ConfirmDialog` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `ConfirmDialog.html`): Default, Destructive Delete, No Description.

## Props

```ts
interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  /** Appearance of the confirm button */
  confirmAppearance?: "primary" | "secondary" | "subtle";
  onConfirm: () => void;
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
}
```

## Examples

```jsx
// Default
export const Default: StoryObj = {
  render: () => (
    <DialogDemo
      title="Confirm action?"
      description="This will apply the selected changes. Are you sure?"
    />
  ),
};

// Destructive Delete
export const DestructiveDelete: StoryObj = {
  render: () => (
    <DialogDemo
      title="Delete project?"
      description="This action cannot be undone. All tasks and files will be permanently removed."
      confirmLabel="Delete"
    />
  ),
};

// No Description
export const NoDescription: StoryObj = {
  render: () => <DialogDemo title="Are you sure?" confirmLabel="Yes, proceed" />,
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### DestructiveDelete

```jsx
/* Destructive Delete */ compose(S, "DestructiveDelete")
```

### NoDescription

```jsx
/* No Description */ compose(S, "NoDescription")
```
