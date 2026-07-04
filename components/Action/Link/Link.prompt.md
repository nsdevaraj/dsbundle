Link from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Link` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Link.html`): Default, Subtle, Inline, With Icon, Disabled, RTL.

## Props

```ts
interface LinkProps {
  /** URL to navigate to */
  href?: string;
  /** Render inline (within text flow). Defaults true. */
  inline?: boolean;
  /** Opens in new tab and appends external aria label hint */
  external?: boolean;
  /** Prevents navigation and renders as disabled */
  disabled?: boolean;
  /** Visual appearance */
  appearance?: "subtle" | "default";
  /** Click handler (use instead of href for SPA navigation) */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
  "aria-describedby"?: string;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { href: "https://fluent2.microsoft.com", children: "Fluent 2 design system" },
};

// Subtle
export const Subtle: Story = {
  args: { href: "#", appearance: "subtle", children: "Subtle link" },
};

// Inline
export const Inline: Story = {
  render: () => (
    <span>
      Read more about{" "}
      <Link href="https://react.dev" target="_blank">React</Link>{" "}
      and{" "}
      <Link href="https://www.typescriptlang.org" target="_blank">TypeScript</Link>.
    </span>
  ),
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### Subtle

```jsx
/* Subtle */ compose(S, "Subtle")
```

### Inline

```jsx
/* Inline */ compose(S, "Inline")
```

### WithIcon

```jsx
/* With Icon */ compose(S, "WithIcon")
```

### Disabled

```jsx
/* Disabled */ compose(S, "Disabled")
```

### RTL

```jsx
/* RTL */ compose(S, "RTL")
```
