SideNav from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.SideNav` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `SideNav.html`): Default, Collapsed, RTL, Collapsed RTL, With Groups, Dark Mode, RTL Collapsed.

## Props

```ts
interface SideNavProps {
  /** Flat list of items OR grouped items */
  items?: SideNavItem[];
  groups?: SideNavGroup[];
  /** Currently active item ID */
  selectedId?: string;
  onSelect?: (id: string) => void;
  /** Collapse to icon-only mode */
  collapsed?: boolean;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  render: () => <NavDemo />,
};

// Collapsed
export const Collapsed: Story = {
  render: () => <NavDemo collapsed />,
};

/** RTL layout — border and padding should flip; chevrons should mirror */

// RTL
export const RTL: Story = {
  render: () => {
    const [selected, setSelected] = useState("home");
    return (
      <FluentProvider theme={webLightTheme} dir="rtl">
        <div style={{ height: "400px", display: "flex", direction: "rtl" }}>
          <SideNav
            items={items}
            selectedId={selected}
            onSelect={setSelected}
          />
          <div style={{ padding: "16px" }}>Selected: <strong>{selected}</strong></div>
        </div>
      </FluentProvider>
    );
  },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### Collapsed

```jsx
/* Collapsed */ compose(S, "Collapsed")
```

### RTL

```jsx
/* RTL */ compose(S, "RTL")
```

### CollapsedRTL

```jsx
/* Collapsed RTL */ compose(S, "CollapsedRTL")
```

### WithGroups

```jsx
/* With Groups */ compose(S, "WithGroups")
```

### DarkMode

```jsx
/* Dark Mode */ compose(S, "DarkMode")
```

### RTLCollapsed

```jsx
/* RTL Collapsed */ compose(S, "RTLCollapsed")
```
