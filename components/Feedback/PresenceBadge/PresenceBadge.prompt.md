PresenceBadge from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.PresenceBadge` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `PresenceBadge.html`): Available, Away, Busy, Do Not Disturb, Offline, Out Of Office, All Statuses, Sizes.

## Props

```ts
interface PresenceBadgeProps {
  status: "available" | "away" | "busy" | "do-not-disturb" | "offline" | "out-of-office" | "unknown" | "blocked";
  size?: "small" | "medium" | "large" | "extra-small" | "extra-large";
  /** "regular" (default) — solid fill. "out-of-office" — striped pattern. */
  outOfOffice?: boolean;
  className?: string;
  style?: React.CSSProperties;
  /** Overrides the auto-generated aria-label */
  "aria-label"?: string;
}
```

## Examples

```jsx
// Available
export const Available: Story = {
  args: { status: "available" },
};

// Away
export const Away: Story = {
  args: { status: "away" },
};

// Busy
export const Busy: Story = {
  args: { status: "busy" },
};
```

### Available

```jsx
/* Available */ compose(S, "Available")
```

### Away

```jsx
/* Away */ compose(S, "Away")
```

### Busy

```jsx
/* Busy */ compose(S, "Busy")
```

### DoNotDisturb

```jsx
/* Do Not Disturb */ compose(S, "DoNotDisturb")
```

### Offline

```jsx
/* Offline */ compose(S, "Offline")
```

### OutOfOffice

```jsx
/* Out Of Office */ compose(S, "OutOfOffice")
```

### AllStatuses

```jsx
/* All Statuses */ compose(S, "AllStatuses")
```

### Sizes

```jsx
/* Sizes */ compose(S, "Sizes")
```
