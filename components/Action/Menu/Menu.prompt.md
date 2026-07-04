Menu from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Menu` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Menu.html`): Default, With Divider, With Shortcuts, With Group Headers, With Disabled Items, Icon Trigger.

## Props

```ts
interface MenuProps {
  /** The trigger element (button, icon-button, etc.) */
  trigger: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  /** Menu items */
  items: MenuItemDef[];
  /** Fires with the selected item id */
  onSelect?: (id: string) => void;
  /** Popover positioning */
  positioning?: "before" | "after" | PositioningProps | "above" | "above-start" | "above-end" | "below" | "below-start" | "below-end" | "before-top" | "before-bottom" | "after-top" | "after-bottom";
  /** Open state — omit for uncontrolled */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: {
    trigger: <Button appearance="secondary">Open menu</Button>,
    items: basicItems,
  },
};

// With Divider
export const WithDivider: Story = {
  args: {
    trigger: <Button appearance="secondary">Actions</Button>,
    items: [
      { id: "edit",   label: "Edit",   icon: <Edit20Regular /> },
      { id: "copy",   label: "Copy",   icon: <Copy20Regular /> },
      { id: "div-1",  type: "divider" },
      { id: "delete", label: "Delete", icon: <Delete20Regular />, danger: true },
    ],
  },
};

// With Shortcuts
export const WithShortcuts: Story = {
  args: {
    trigger: <Button appearance="secondary">Edit</Button>,
    items: [
      { id: "undo",  label: "Undo",  shortcut: "⌘Z" },
      { id: "redo",  label: "Redo",  shortcut: "⌘⇧Z" },
      { id: "div",   type: "divider" },
      { id: "cut",   label: "Cut",   shortcut: "⌘X" },
      { id: "copy",  label: "Copy",  shortcut: "⌘C" },
      { id: "paste", label: "Paste", shortcut: "⌘V" },
    ],
  },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### WithDivider

```jsx
/* With Divider */ compose(S, "WithDivider")
```

### WithShortcuts

```jsx
/* With Shortcuts */ compose(S, "WithShortcuts")
```

### WithGroupHeaders

```jsx
/* With Group Headers */ compose(S, "WithGroupHeaders")
```

### WithDisabledItems

```jsx
/* With Disabled Items */ compose(S, "WithDisabledItems")
```

### IconTrigger

```jsx
/* Icon Trigger */ compose(S, "IconTrigger")
```

## Related

`MenuButton`
