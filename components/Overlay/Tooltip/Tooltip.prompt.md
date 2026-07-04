Tooltip from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Tooltip` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Tooltip.html`): Default, No Arrow, Label Relationship, Positioned Above, Slow Reveal.

## Props

```ts
interface TooltipProps {
  /** Tooltip text or content */
  content: React.ReactNode;
  /** The trigger element — must be a single focusable element */
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  /** "label" — tooltip IS the accessible name (use for icon-only buttons) "description"— tooltip supplements the accessible n */
  relationship?: "label" | "description" | "inaccessible";
  positioning?: "before" | "after" | PositioningProps | "above" | "above-start" | "above-end" | "below" | "below-start" | "below-end" | "before-top" | "before-bottom" | "after-top" | "after-bottom";
  /** Delay before showing tooltip, ms. Default 250 */
  showDelay?: number;
  /** Delay before hiding tooltip, ms. Default 250 */
  hideDelay?: number;
  withArrow?: boolean;
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: {
    content: "This is a tooltip",
    children: <FluentButton>Hover me</FluentButton>,
  },
};

// No Arrow
export const NoArrow: Story = {
  args: {
    content: "No arrow variant",
    withArrow: false,
    children: <FluentButton>Hover me</FluentButton>,
  },
};

// Label Relationship
export const LabelRelationship: Story = {
  args: {
    content: "Icon button: add item",
    relationship: "label",
    children: <FluentButton icon={<span>+</span>} />,
  },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### NoArrow

```jsx
/* No Arrow */ compose(S, "NoArrow")
```

### LabelRelationship

```jsx
/* Label Relationship */ compose(S, "LabelRelationship")
```

### PositionedAbove

```jsx
/* Positioned Above */ compose(S, "PositionedAbove")
```

### SlowReveal

```jsx
/* Slow Reveal */ compose(S, "SlowReveal")
```
