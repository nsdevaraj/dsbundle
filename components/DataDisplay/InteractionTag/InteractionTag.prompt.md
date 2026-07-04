InteractionTag from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.InteractionTag` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `InteractionTag.html`): Default, With Icons, Dismissible, Outline, Brand, Extra Small.

## Props

```ts
interface InteractionTagProps {
  /** Unique value for this tag (used in dismiss callback) */
  value: string;
  children: React.ReactNode;
  /** Fires when the primary (label) area is clicked */
  onPrimaryClick?: (value: string) => void;
  /** Fires when the dismiss (×) button is clicked. If omitted, dismiss button is hidden. */
  onDismiss?: (value: string) => void;
  /** Dismiss button aria-label */
  dismissAriaLabel?: string;
  size?: "small" | "medium" | "extra-small";
  shape?: "square" | "circular" | "rounded";
  appearance?: "filled" | "outline" | "brand" | "tint";
  disabled?: boolean;
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  media?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  className?: string;
  style?: React.CSSProperties;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: {
    tags: [
      { value: "react",  label: "React" },
      { value: "ts",     label: "TypeScript" },
      { value: "fluent", label: "Fluent UI" },
    ],
  },
};

// With Icons
export const WithIcons: Story = {
  args: {
    tags: [
      { value: "alice", label: "Alice Chen",  icon: <Person20Regular />, secondaryText: "Engineering" },
      { value: "bob",   label: "Bob Smith",   icon: <Person20Regular />, secondaryText: "Design" },
      { value: "carol", label: "Carol Jones", icon: <Person20Regular />, secondaryText: "Product" },
    ],
  },
};

// Dismissible
export const Dismissible: Story = {
  render: () => {
    const [tags, setTags] = useState([
      { value: "react",  label: "React" },
      { value: "ts",     label: "TypeScript" },
      { value: "fluent", label: "Fluent UI" },
    ]);
    return (
      <InteractionTag
        tags={tags}
        dismissible
        onDismiss={(value) => setTags((t) => t.filter((tag) => tag.value !== value))}
      />
    );
  },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### WithIcons

```jsx
/* With Icons */ compose(S, "WithIcons")
```

### Dismissible

```jsx
/* Dismissible */ compose(S, "Dismissible")
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
