Accordion from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Accordion` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Accordion.html`): Default, Multiple, Filled Darker, Filled Alternative.

## Props

```ts
interface AccordionProps {
  items: AccordionItemDef[];
  /** Allow multiple panels open simultaneously. Default false (single open). */
  multiple?: boolean;
  /** Allow closing all panels (the open panel can be toggled closed). Default true. */
  collapsible?: boolean;
  /** Controlled open items (array of values) */
  openItems?: string[];
  onToggle?: (value: string, open: boolean) => void;
  size?: "small" | "medium";
  appearance?: "filled-darker" | "filled-alternative" | "subtle" | "transparent";
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { items },
};

// Multiple
export const Multiple: Story = {
  args: { items, multiple: true },
};

// Filled Darker
export const FilledDarker: Story = {
  args: { items, appearance: "filled-darker" },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### Multiple

```jsx
/* Multiple */ compose(S, "Multiple")
```

### FilledDarker

```jsx
/* Filled Darker */ compose(S, "FilledDarker")
```

### FilledAlternative

```jsx
/* Filled Alternative */ compose(S, "FilledAlternative")
```
