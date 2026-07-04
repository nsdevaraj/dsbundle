Popover from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Popover` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Popover.html`): Default, With Heading, No Arrow, Positioned Above, Trap Focus.

## Props

```ts
interface PopoverProps {
  /** The element that triggers the popover */
  trigger: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  /** Popover content */
  content: React.ReactNode;
  /** Optional heading inside the popover */
  heading?: React.ReactNode;
  /** Controlled open state */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  positioning?: "before" | "after" | PositioningProps | "above" | "above-start" | "above-end" | "below" | "below-start" | "below-end" | "before-top" | "before-bottom" | "after-top" | "after-bottom";
  /** Show an arrow pointing to the trigger. Default: true */
  withArrow?: boolean;
  /** Whether the popover traps focus (true = modal, false = non-modal). Default: false */
  trapFocus?: boolean;
  /** Close on outside click. Default: true */
  closeOnScroll?: boolean;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: {
    trigger: <FluentButton>Open popover</FluentButton>,
    content: "This is popover content. It can contain text or any elements.",
  },
};

// With Heading
export const WithHeading: Story = {
  args: {
    trigger: <FluentButton appearance="primary">Info</FluentButton>,
    heading: "What is this?",
    content: "This feature helps you manage user permissions across the organization.",
  },
};

// No Arrow
export const NoArrow: Story = {
  args: {
    trigger: <FluentButton>No arrow</FluentButton>,
    content: "Popover without an arrow pointer.",
    withArrow: false,
  },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### WithHeading

```jsx
/* With Heading */ compose(S, "WithHeading")
```

### NoArrow

```jsx
/* No Arrow */ compose(S, "NoArrow")
```

### PositionedAbove

```jsx
/* Positioned Above */ compose(S, "PositionedAbove")
```

### TrapFocus

```jsx
/* Trap Focus */ compose(S, "TrapFocus")
```
