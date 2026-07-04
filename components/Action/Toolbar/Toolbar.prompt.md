Toolbar from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Toolbar` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Toolbar.html`): Default, With Toggles, Mixed With Divider, Small, Vertical.

## Props

```ts
interface ToolbarProps {
  /** All toolbar items in order */
  items: ToolbarItem[];
  /** Accessible label for the toolbar region */
  "aria-label": string;
  size?: "small" | "medium";
  checkedValues?: Record<string, string[]>;
  onCheckedValueChange?: (name: string, values: string[]) => void;
  className?: string;
  style?: React.CSSProperties;
  /** Vertical orientation (default: horizontal) */
  vertical?: boolean;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: {
    "aria-label": "Text editing toolbar",
    items: [
      { id: "cut",   type: "button", icon: <Cut20Regular />,   label: "Cut",   onClick: () => {} },
      { id: "copy",  type: "button", icon: <Copy20Regular />,  label: "Copy",  onClick: () => {} },
      { id: "paste", type: "button", icon: <Paste20Regular />, label: "Paste", onClick: () => {} },
    ],
  },
};

// With Toggles
export const WithToggles: Story = {
  render: () => {
    const [bold, setBold]   = useState(false);
    const [italic, setItalic] = useState(false);
    const [under, setUnder] = useState(false);
    return (
      <Toolbar
        aria-label="Formatting"
        items={[
          { id: "bold",      type: "toggle", icon: <TextBold20Regular />,      label: "Bold",      checked: bold,   onChange: setBold },
          { id: "italic",    type: "toggle", icon: <TextItalic20Regular />,    label: "Italic",    checked: italic, onChange: setItalic },
          { id: "underline", type: "toggle", icon: <TextUnderline20Regular />, label: "Underline", checked: under,  onChange: setUnder },
        ]}
      />
    );
  },
};

// Mixed With Divider
export const MixedWithDivider: Story = {
  render: () => (
    <Toolbar
      aria-label="Rich text"
      items={[
        { id: "bold",   type: "toggle", icon: <TextBold20Regular />,   label: "Bold" },
        { id: "italic", type: "toggle", icon: <TextItalic20Regular />, label: "Italic" },
        { id: "div-1",  type: "divider" },
        { id: "left",   type: "toggle", icon: <AlignLeft20Regular />,       label: "Align left" },
        { id: "center", type: "toggle", icon: <TextAlignCenter20Regular />, label: "Align center" },
        { id: "right",  type: "toggle", icon: <AlignRight20Regular />,      label: "Align right" },
        { id: "div-2",  type: "divider" },
        { id: "copy",   type: "button", icon: <Copy20Regular />,  label: "Copy",  onClick: () => {} },
        { id: "paste",  type: "button", icon: <Paste20Regular />, label: "Paste", onClick: () => {} },
      ]}
    />
  ),
};
```

### Default

```jsx
() => (
  <Toolbar
    aria-label="Text editing toolbar"
    items={[
      { id: "cut",   type: "button", icon: <Cut20Regular />,   label: "Cut",   onClick: () => {} },
      { id: "copy",  type: "button", icon: <Copy20Regular />,  label: "Copy",  onClick: () => {} },
      { id: "paste", type: "button", icon: <ClipboardPaste20Regular />, label: "Paste", onClick: () => {} },
    ]}
  />
)
```

### WithToggles

```jsx
() => {
  const [bold, setBold]   = useState(false);
  const [italic, setItalic] = useState(false);
  const [under, setUnder] = useState(false);
  return (
    <Toolbar
      aria-label="Formatting"
      items={[
        { id: "bold",      type: "toggle", icon: <TextBold20Regular />,      label: "Bold",      checked: bold,   onChange: setBold },
        { id: "italic",    type: "toggle", icon: <TextItalic20Regular />,    label: "Italic",    checked: italic, onChange: setItalic },
        { id: "underline", type: "toggle", icon: <TextUnderline20Regular />, label: "Underline", checked: under,  onChange: setUnder },
      ]}
    />
  );
}
```

### MixedWithDivider

```jsx
() => (
  <Toolbar
    aria-label="Rich text"
    items={[
      { id: "bold",   type: "toggle", icon: <TextBold20Regular />,   label: "Bold" },
      { id: "italic", type: "toggle", icon: <TextItalic20Regular />, label: "Italic" },
      { id: "div-1",  type: "divider" },
      { id: "left",   type: "toggle", icon: <AlignLeft20Regular />,       label: "Align left" },
      { id: "center", type: "toggle", icon: <TextAlignCenter20Regular />, label: "Align center" },
      { id: "right",  type: "toggle", icon: <AlignRight20Regular />,      label: "Align right" },
      { id: "div-2",  type: "divider" },
      { id: "copy",   type: "button", icon: <Copy20Regular />,  label: "Copy",  onClick: () => {} },
      { id: "paste",  type: "button", icon: <ClipboardPaste20Regular />, label: "Paste", onClick: () => {} },
    ]}
  />
)
```

### Small

```jsx
() => (
  <Toolbar
    aria-label="Small toolbar"
    size="small"
    items={[
      { id: "bold",   type: "toggle", icon: <TextBold20Regular />,   label: "Bold" },
      { id: "italic", type: "toggle", icon: <TextItalic20Regular />, label: "Italic" },
    ]}
  />
)
```

### Vertical

```jsx
() => (
  <Toolbar
    aria-label="Vertical toolbar"
    vertical={true}
    items={[
      { id: "cut",   type: "button", icon: <Cut20Regular />,   label: "Cut" },
      { id: "copy",  type: "button", icon: <Copy20Regular />,  label: "Copy" },
      { id: "paste", type: "button", icon: <ClipboardPaste20Regular />, label: "Paste" },
    ]}
  />
)
```
