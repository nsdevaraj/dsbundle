MessageBar from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.MessageBar` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `MessageBar.html`): Info, Success, Warning, Error, Dismissible, With Actions.

## Props

```ts
interface MessageBarProps {
  intent?: "error" | "warning" | "success" | "info";
  /** Bold title line at the top of the message */
  title?: string;
  /** Message body content */
  children: React.ReactNode;
  /** Inline action buttons rendered inside the bar */
  actions?: MessageBarAction[];
  /** Called when the dismiss button is clicked */
  onDismiss?: () => void;
  /** Show the dismiss (×) button */
  dismissible?: boolean;
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
}
```

## Examples

```jsx
// Info
export const Info: Story = {
  args: { intent: "info", title: "Info", children: "Your session will expire in 10 minutes." },
};

// Success
export const Success: Story = {
  args: { intent: "success", title: "Saved", children: "Your changes have been saved." },
};

// Warning
export const Warning: Story = {
  args: { intent: "warning", title: "Warning", children: "This action cannot be undone." },
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

### Dismissible

```jsx
/* Dismissible */ compose(S, "Dismissible")
```

### WithActions

```jsx
/* With Actions */ compose(S, "WithActions")
```
