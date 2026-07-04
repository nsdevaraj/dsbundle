Dialog from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Dialog` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Dialog.html`): With Trigger, Small, Large, Alert, Controlled.

## Props

```ts
interface DialogProps {
  /** Dialog open state */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Dialog title */
  title?: React.ReactNode;
  /** Body content */
  children?: React.ReactNode;
  /** Footer actions — renders inside DialogActions */
  actions?: React.ReactNode;
  /** Size of the dialog surface */
  size?: "small" | "max" | "medium" | "large";
  /** modal (default) | non-modal | alert (no close button, role="alertdialog") */
  modalType?: "alert" | "modal" | "non-modal";
  /** Show the X close button in the title. Default true for modal/non-modal. */
  showCloseButton?: boolean;
  /** Optional trigger element (uncontrolled mode) */
  trigger?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  className?: string;
  style?: React.CSSProperties;
  "aria-describedby"?: string;
}
```

## Examples

```jsx
// With Trigger
export const WithTrigger: Story = {
  args: {
    trigger: <Button appearance="primary">Open dialog</Button>,
    title: "Confirm action",
    children: "Are you sure you want to proceed? This action cannot be undone.",
    actions: (
      <>
        <Button appearance="primary">Confirm</Button>
        <Button appearance="secondary">Cancel</Button>
      </>
    ),
  },
};

// Small
export const Small: Story = {
  args: {
    trigger: <Button appearance="primary">Small dialog</Button>,
    title: "Quick note",
    size: "small",
    children: "This is a small dialog.",
    actions: <Button appearance="primary">OK</Button>,
  },
};

// Large
export const Large: Story = {
  args: {
    trigger: <Button appearance="primary">Large dialog</Button>,
    title: "Review document",
    size: "large",
    children: "This dialog has more space for content.",
    actions: (
      <>
        <Button appearance="primary">Accept</Button>
        <Button appearance="secondary">Reject</Button>
      </>
    ),
  },
};
```

### WithTrigger

```jsx
/* With Trigger */ compose(S, "WithTrigger")
```

### Small

```jsx
/* Small */ compose(S, "Small")
```

### Large

```jsx
/* Large */ compose(S, "Large")
```

### Alert

```jsx
/* Alert */ compose(S, "Alert")
```

### Controlled

```jsx
/* Controlled */ compose(S, "Controlled")
```
