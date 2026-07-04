DataCard from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.DataCard` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `DataCard.html`): With Trend Up, With Trend Down, With Description, Minimal No Icon.

## Props

```ts
interface DataCardProps {
  label: string;
  value: string | number;
  trend?: string;
  /** true = green up arrow, false = red down arrow */
  trendUp?: boolean;
  icon?: React.ReactNode;
  description?: string;
}
```

## Examples

```jsx
// With Trend Up
export const WithTrendUp: Story = {
  args: { label: "Total Users", value: "1,284", trend: "+12%", trendUp: true, icon: <People20Regular /> },
};

// With Trend Down
export const WithTrendDown: Story = {
  args: { label: "Active Sessions", value: "392", trend: "-8%", trendUp: false, icon: <Clock20Regular /> },
};

// With Description
export const WithDescription: Story = {
  args: { label: "Completed Tasks", value: "312", description: "This quarter", icon: <Checkmark20Regular /> },
};
```

### WithTrendUp

```jsx
/* With Trend Up */ compose(S, "WithTrendUp")
```

### WithTrendDown

```jsx
/* With Trend Down */ compose(S, "WithTrendDown")
```

### WithDescription

```jsx
/* With Description */ compose(S, "WithDescription")
```

### MinimalNoIcon

```jsx
/* Minimal No Icon */ compose(S, "MinimalNoIcon")
```
