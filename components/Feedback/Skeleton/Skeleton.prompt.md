Skeleton from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Skeleton` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Skeleton.html`): Text Block, Text Block Pulse, Card, Custom Layout.

## Props

```ts
interface SkeletonProps {
  style?: React.CSSProperties;
  className?: string;
  children?: any;
  id?: string;
  as?: "div" | "span";
  /** The animation type for the Skeleton */
  animation?: "wave" | "pulse";
  /** Sets the appearance of the Skeleton. */
  appearance?: "opaque" | "translucent";
  /** Sets the width value of the skeleton wrapper. */
  width?: string | number;
  /** Sets the size of the SkeletonItems inside the Skeleton in pixels. Size is restricted to a limited set of values recommen */
  size?: 16 | 20 | 24 | 28 | 32 | 36 | 40 | 48 | 56 | 64 | 72 | 96 | 120 | 128 | 8 | 12 | 14 | 22 | 52 | 92;
  /** Sets the shape of the SkeletonItems inside the Skeleton. This value can be overridden by the individual SkeletonItem's ` */
  shape?: "circle" | "square" | "rectangle";
}
```

## Examples

```jsx
// Text Block
export const TextBlock: StoryObj = {
  render: () => <SkeletonText lines={4} />,
};

// Text Block Pulse
export const TextBlockPulse: StoryObj = {
  render: () => <SkeletonText lines={3} animation="pulse" />,
};

// Card
export const Card: StoryObj = {
  render: () => <SkeletonCard />,
};
```

### TextBlock

```jsx
/* Text Block */ compose(S, "TextBlock")
```

### TextBlockPulse

```jsx
/* Text Block Pulse */ compose(S, "TextBlockPulse")
```

### Card

```jsx
/* Card */ compose(S, "Card")
```

### CustomLayout

```jsx
/* Custom Layout */ compose(S, "CustomLayout")
```
