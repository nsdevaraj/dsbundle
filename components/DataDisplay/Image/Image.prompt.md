Image from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Image` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Image.html`): Default, Rounded, Circular, Cover, Contain, With Caption, Bordered.

## Props

```ts
interface ImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  fit?: "center" | "none" | "default" | "contain" | "cover";
  shape?: "square" | "circular" | "rounded";
  /** Fill the container width */
  block?: boolean;
  /** Add a 1px border */
  bordered?: boolean;
  /** Add a shadow */
  shadow?: boolean;
  /** Fallback src on load error */
  fallbackSrc?: string;
  /** Show skeleton while loading */
  showSkeleton?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  loading?: "eager" | "lazy";
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { src: placeholder, alt: "Placeholder image", width: 400, height: 200 },
};

// Rounded
export const Rounded: Story = {
  args: { src: placeholder, alt: "Rounded image", shape: "rounded", width: 200, height: 200 },
};

// Circular
export const Circular: Story = {
  args: { src: placeholder, alt: "Circular image", shape: "circular", width: 120, height: 120 },
};
```

### Default

```jsx
/* Default */ compose(S, "Default", { src: placeholder })
```

### Rounded

```jsx
/* Rounded */ compose(S, "Rounded", { src: placeholder200 })
```

### Circular

```jsx
/* Circular */ compose(S, "Circular", { src: placeholder120 })
```

### Cover

```jsx
/* Cover */ compose(S, "Cover", { src: placeholder300x150 })
```

### Contain

```jsx
/* Contain */ compose(S, "Contain", { src: placeholder300x150 })
```

### WithCaption

```jsx
/* With Caption */ compose(S, "WithCaption", { src: placeholder })
```

### Bordered

```jsx
/* Bordered */ compose(S, "Bordered", { src: placeholder300x150 })
```
