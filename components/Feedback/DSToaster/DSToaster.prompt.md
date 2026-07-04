DSToaster from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.DSToaster` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `DSToaster.html`): Info, Success, Warning, Error.

## Props

```ts
interface DSToasterProps {
  /** Position on screen. Default: "top-end" */
  position?: "bottom" | "top" | "top-start" | "top-end" | "bottom-start" | "bottom-end";
  /** Max toasts visible at once. Default: 5 */
  limit?: number;
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
}
```

## Examples

```jsx
// Info
export const Info: Story = {
  render: () => <Wrapper intent="info" title="Info" body="This is an info message." />,
};

// Success
export const Success: Story = {
  render: () => <Wrapper intent="success" title="Saved!" body="Your changes have been saved." />,
};

// Warning
export const Warning: Story = {
  render: () => <Wrapper intent="warning" title="Warning" body="Disk space is running low." />,
};
```

### Info

```jsx
/* Info */ compose(S, "Info")
```

### Success

```jsx
/* Success */ compose(S, "Success")
```

### Warning

```jsx
/* Warning */ compose(S, "Warning")
```

### Error

```jsx
/* Error */ compose(S, "Error")
```
