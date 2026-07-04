Card from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Card` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Card.html`): Default, With Footer, Filled Alternative, Subtle, Clickable, Small.

## Props

```ts
interface CardProps {
  header?: CardHeaderConfig;
  /** Preview image or media above the header */
  preview?: React.ReactNode;
  /** Card body content */
  children?: React.ReactNode;
  /** Footer actions or metadata */
  footer?: React.ReactNode;
  /** Makes the card itself clickable */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  appearance?: "filled-alternative" | "subtle" | "filled" | "outline";
  size?: "small" | "medium" | "large";
  /** Orientation of header + preview layout */
  orientation?: "horizontal" | "vertical";
  /** Enables selection mode on the card */
  selectable?: boolean;
  /** Controlled selected state (use with selectable) */
  selected?: boolean;
  /** Callback fired when the card's selection state changes */
  onSelectionChange?: (selected: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: {
    header: { title: "Project Alpha", subtitle: "Engineering" },
    children: <p style={{ margin: 0 }}>A project card with header and body content.</p>,
  },
};

// With Footer
export const WithFooter: Story = {
  args: {
    header: { title: "Report Q1", subtitle: "Finance" },
    children: <p style={{ margin: 0 }}>Quarterly financial summary.</p>,
    footer: <FluentButton appearance="primary" size="small">View report</FluentButton>,
  },
};

// Filled Alternative
export const FilledAlternative: Story = {
  args: {
    header: { title: "Task Board" },
    children: <p style={{ margin: 0 }}>filled-alternative appearance card.</p>,
    appearance: "filled-alternative",
  },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### WithFooter

```jsx
/* With Footer */ compose(S, "WithFooter")
```

### FilledAlternative

```jsx
/* Filled Alternative */ compose(S, "FilledAlternative")
```

### Subtle

```jsx
/* Subtle */ compose(S, "Subtle")
```

### Clickable

```jsx
/* Clickable */ compose(S, "Clickable")
```

### Small

```jsx
/* Small */ compose(S, "Small")
```
