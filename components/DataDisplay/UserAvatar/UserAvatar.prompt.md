UserAvatar from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.UserAvatar` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `UserAvatar.html`): Default, With Presence Available, With Presence Busy, With Presence Away, With Presence Offline, Large, Square, Custom Initials.

## Props

```ts
interface UserAvatarProps {
  /** Display name — used for initials and color assignment */
  name: string;
  size?: 16 | 20 | 24 | 28 | 32 | 36 | 40 | 48 | 56 | 64 | 72 | 96 | 128;
  /** Direct image URL */
  imageUrl?: string;
  presence?: "available" | "away" | "busy" | "do-not-disturb" | "offline" | "out-of-office";
  /** Override initials (max 2 chars) */
  initials?: string;
  color?: "anchor" | "marigold" | "dark-red" | "cranberry" | "red" | "pumpkin" | "peach" | "gold" | "brass" | "brown" | "forest" | "seafoam" | "dark-green" | "light-teal" | "teal" | "steel" | (string & {}) /* +14 more */;
  shape?: "square" | "circular";
  /** Marks the avatar as active or inactive */
  active?: "active" | "inactive";
  /** Visual style of the active indicator */
  activeAppearance?: "ring" | "shadow" | "ring-shadow";
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { name: "Alice Martin", size: 32 },
};

// With Presence Available
export const WithPresenceAvailable: Story = {
  args: { name: "Bob Kane", presence: "available", size: 40 },
};

// With Presence Busy
export const WithPresenceBusy: Story = {
  args: { name: "Carol Danes", presence: "busy", size: 40 },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### WithPresenceAvailable

```jsx
/* With Presence Available */ compose(S, "WithPresenceAvailable")
```

### WithPresenceBusy

```jsx
/* With Presence Busy */ compose(S, "WithPresenceBusy")
```

### WithPresenceAway

```jsx
/* With Presence Away */ compose(S, "WithPresenceAway")
```

### WithPresenceOffline

```jsx
/* With Presence Offline */ compose(S, "WithPresenceOffline")
```

### Large

```jsx
/* Large */ compose(S, "Large")
```

### Square

```jsx
/* Square */ compose(S, "Square")
```

### CustomInitials

```jsx
/* Custom Initials */ compose(S, "CustomInitials")
```
