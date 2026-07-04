PageHeader from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.PageHeader` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `PageHeader.html`): Default, With Description, With Breadcrumbs, With Actions, Full Featured, Long Title.

## Props

```ts
interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: string[];
  actions?: React.ReactNode;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: {
    title: "User Management",
  },
};

// With Description
export const WithDescription: Story = {
  args: {
    title: "User Management",
    description: "Manage team members, roles, and access permissions.",
  },
};

// With Breadcrumbs
export const WithBreadcrumbs: Story = {
  args: {
    title: "User Management",
    description: "Manage team members, roles, and access permissions.",
    breadcrumbs: ["Home", "Admin", "Users"],
  },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### WithDescription

```jsx
/* With Description */ compose(S, "WithDescription")
```

### WithBreadcrumbs

```jsx
/* With Breadcrumbs */ compose(S, "WithBreadcrumbs")
```

### WithActions

```jsx
/* With Actions */ compose(S, "WithActions")
```

### FullFeatured

```jsx
/* Full Featured */ compose(S, "FullFeatured")
```

### LongTitle

```jsx
/* Long Title */ compose(S, "LongTitle")
```
