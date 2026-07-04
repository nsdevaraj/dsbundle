StatusBadge from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.StatusBadge` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `StatusBadge.html`): Completed, In Progress, Blocked, Pending, Warning, All Statuses Grid, Custom Label.

## Props

```ts
interface StatusBadgeProps {
  status: "warning" | "blocked" | "completed" | "in-progress" | "pending" | "paused" | "draft" | "cancelled";
  /** Override the default label */
  label?: string;
  size?: "small" | "medium" | "large";
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
}
```

## Examples

```jsx
// Completed
export const Completed: Story = {
  args: { status: "completed" },
};

// In Progress
export const InProgress: Story = {
  args: { status: "in-progress" },
};

// Blocked
export const Blocked: Story = {
  args: { status: "blocked" },
};
```

### Completed

```jsx
/* Completed */ compose(S, "Completed")
```

### InProgress

```jsx
/* In Progress */ compose(S, "InProgress")
```

### Blocked

```jsx
/* Blocked */ compose(S, "Blocked")
```

### Pending

```jsx
/* Pending */ compose(S, "Pending")
```

### Warning

```jsx
/* Warning */ compose(S, "Warning")
```

### AllStatusesGrid

```jsx
/* All Statuses Grid */ compose(S, "AllStatusesGrid")
```

### CustomLabel

```jsx
/* Custom Label */ compose(S, "CustomLabel")
```
