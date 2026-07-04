Tabs from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Tabs` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Tabs.html`): Default, Subtle, Small, With Disabled, Vertical.

## Props

```ts
interface TabsProps {
  tabs: TabItem[];
  /** Panel content keyed by tab value */
  panels?: Record<string, React.ReactNode>;
  /** Controlled selected tab value */
  selectedValue?: string;
  defaultSelectedValue?: string;
  onTabSelect?: (value: string) => void;
  size?: "small" | "medium";
  appearance?: "subtle" | "transparent";
  vertical?: boolean;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { tabs, panels, defaultSelectedValue: "overview" },
};

// Subtle
export const Subtle: Story = {
  args: { tabs, panels, defaultSelectedValue: "details", appearance: "subtle" },
};

// Small
export const Small: Story = {
  args: { tabs, panels, defaultSelectedValue: "overview", size: "small" },
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

### Small

```jsx
/* Small */ compose(S, "Small")
```

### WithDisabled

```jsx
/* With Disabled */ compose(S, "WithDisabled")
```

### Vertical

```jsx
/* Vertical */ compose(S, "Vertical")
```
