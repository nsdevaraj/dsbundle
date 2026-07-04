Persona from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Persona` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Persona.html`): Default, Available, Busy, Away, Large, Extra Large.

## Props

```ts
interface PersonaProps {
  name: string;
  secondaryText?: string;
  tertiaryText?: string;
  quaternaryText?: string;
  presence?: "available" | "away" | "busy" | "do-not-disturb" | "offline" | "out-of-office" | "unknown";
  presenceTitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  size?: "small" | "medium" | "large" | "extra-small" | "extra-large" | "huge";
  textAlignment?: "center" | "start";
  /** Position of the text block relative to the avatar — "after" (default) | "below" | "before" */
  textPosition?: "before" | "after" | "below";
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { name: "Alice Martinez", secondaryText: "Engineering Lead", size: "medium" },
};

// Available
export const Available: Story = {
  args: { name: "Bob Kim", secondaryText: "Designer", size: "medium", presence: "available" },
};

// Busy
export const Busy: Story = {
  args: { name: "Carol Smith", secondaryText: "Product Manager", size: "medium", presence: "busy" },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### Available

```jsx
/* Available */ compose(S, "Available")
```

### Busy

```jsx
/* Busy */ compose(S, "Busy")
```

### Away

```jsx
/* Away */ compose(S, "Away")
```

### Large

```jsx
/* Large */ compose(S, "Large")
```

### ExtraLarge

```jsx
/* Extra Large */ compose(S, "ExtraLarge")
```
