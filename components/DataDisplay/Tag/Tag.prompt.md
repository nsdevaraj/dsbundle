Tag from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Tag` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Tag.html`): Filled, Outline, Brand, Extra Small, Dismissible, Group.

## Props

```ts
interface TagProps {
  children: React.ReactNode;
  value?: string;
  appearance?: "filled" | "outline" | "brand";
  size?: "small" | "medium" | "extra-small";
  dismissible?: boolean;
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  disabled?: boolean;
  shape?: "circular" | "rounded";
}
```

## Examples

```jsx
// Filled
export const Filled: TagStory    = { args: { children: "React", appearance: "filled" } };

// Outline
export const Outline: TagStory   = { args: { children: "TypeScript", appearance: "outline" } };

// Brand
export const Brand: TagStory     = { args: { children: "New", appearance: "brand" } };
```

### Filled

```jsx
/* Filled */ compose(S, "Filled")
```

### Outline

```jsx
/* Outline */ compose(S, "Outline")
```

### Brand

```jsx
/* Brand */ compose(S, "Brand")
```

### ExtraSmall

```jsx
/* Extra Small */ compose(S, "ExtraSmall")
```

### Dismissible

```jsx
/* Dismissible */ compose(S, "Dismissible")
```

### Group

```jsx
/* Group */ compose(S, "Group")
```

## Related

`TagPicker`
