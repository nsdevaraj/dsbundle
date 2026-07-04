Pagination from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Pagination` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Pagination.html`): Default, With First Last, Many Pages With Ellipses, Small, Disabled, Numbers Only.

## Props

```ts
interface PaginationProps {
  /** Current page, 1-based. */
  page: number;
  /** Total number of pages (>= 1). */
  count: number;
  /** Called with the next page (1-based) when the user navigates. */
  onPageChange?: (page: number) => void;
  /** Number of page buttons to show on each side of the current page. Default 1. */
  siblingCount?: number;
  /** Number of page buttons always shown at the start and end. Default 1. */
  boundaryCount?: number;
  /** Show the jump-to-first and jump-to-last buttons. Default false. */
  showFirstLast?: boolean;
  /** Hide the previous / next buttons. Default false. */
  hidePrevNext?: boolean;
  /** Control size. Default "medium". */
  size?: "small" | "medium";
  /** Disable the entire control. */
  disabled?: boolean;
  /** Accessible label for the navigation landmark. Default "Pagination". */
  "aria-label"?: string;
  /** Additional CSS class name(s) to apply to the root `<nav>`. */
  className?: string;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { count: 10, showFirstLast: true },
  render: (args) => {
    const [page, setPage] = React.useState(args.page ?? 1);
    return <Pagination {...args} page={page} onPageChange={setPage} />;
  },
};

// With First Last
export const WithFirstLast: Story = {
  args: { page: 5, count: 12, showFirstLast: true },
};

// Many Pages With Ellipses
export const ManyPagesWithEllipses: Story = {
  args: { page: 7, count: 24, siblingCount: 1, boundaryCount: 1 },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### WithFirstLast

```jsx
/* With First Last */ compose(S, "WithFirstLast")
```

### ManyPagesWithEllipses

```jsx
/* Many Pages With Ellipses */ compose(S, "ManyPagesWithEllipses")
```

### Small

```jsx
/* Small */ compose(S, "Small")
```

### Disabled

```jsx
/* Disabled */ compose(S, "Disabled")
```

### NumbersOnly

```jsx
/* Numbers Only */ compose(S, "NumbersOnly")
```
