SearchInput from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.SearchInput` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `SearchInput.html`): Default, Debounced, Disabled.

## Props

```ts
interface SearchInputProps {
  /** Called with the search query — debounced by default */
  onSearch: (query: string) => void;
  placeholder?: string;
  /** Debounce delay in ms. Set to 0 to disable. Default: 300 */
  debounceMs?: number;
  defaultValue?: string;
  size?: "small" | "medium";
  disabled?: boolean;
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
}
```

## Examples

```jsx
// Default
export const Default: StoryObj = {
  render: () => {
    const [q, setQ] = useState("");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: tokens.spacingVerticalS }}>
        <SearchInput onSearch={setQ} placeholder="Search projects…" />
        {q && <span style={{ fontSize: tokens.fontSizeBase200, color: tokens.colorNeutralForeground3 }}>Query: {q}</span>}
      </div>
    );
  },
};

// Debounced
export const Debounced: StoryObj = {
  render: () => {
    const [q, setQ] = useState("");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: tokens.spacingVerticalS }}>
        <SearchInput onSearch={setQ} placeholder="Search (300ms debounce)…" debounceMs={300} />
        {q && <span style={{ fontSize: tokens.fontSizeBase200, color: tokens.colorNeutralForeground3 }}>Debounced: {q}</span>}
      </div>
    );
  },
};

// Disabled
export const Disabled: StoryObj = {
  render: () => <SearchInput onSearch={() => {}} placeholder="Disabled search" disabled />,
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### Debounced

```jsx
/* Debounced */ compose(S, "Debounced")
```

### Disabled

```jsx
/* Disabled */ compose(S, "Disabled")
```
