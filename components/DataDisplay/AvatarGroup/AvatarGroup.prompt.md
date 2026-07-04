AvatarGroup from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.AvatarGroup` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `AvatarGroup.html`): Spread, Stack, Pie, With Overflow, Large, Small.

## Props

```ts
interface AvatarGroupProps {
  members: AvatarGroupMember[];
  /** Maximum avatars to show before collapsing into overflow. Default 5. */
  maxVisible?: number;
  layout?: "stack" | "spread" | "pie";
  size?: 16 | 20 | 24 | 28 | 32 | 36 | 40 | 48 | 56 | 64 | 72 | 96 | 120 | 128;
  /** aria-label for the group */
  "aria-label"?: string;
  className?: string;
  style?: React.CSSProperties;
}
```

## Examples

```jsx
// Spread
export const Spread: Story = {
  args: { members, layout: "spread", size: 32 },
};

// Stack
export const Stack: Story = {
  args: { members, layout: "stack", size: 32 },
};

// Pie
export const Pie: Story = {
  args: { members, layout: "pie", size: 32 },
};
```

### Spread

```jsx
/* Spread */ compose(S, "Spread")
```

### Stack

```jsx
/* Stack */ compose(S, "Stack")
```

### Pie

```jsx
/* Pie */ compose(S, "Pie")
```

### WithOverflow

```jsx
/* With Overflow */ compose(S, "WithOverflow")
```

### Large

```jsx
/* Large */ compose(S, "Large")
```

### Small

```jsx
/* Small */ compose(S, "Small")
```
