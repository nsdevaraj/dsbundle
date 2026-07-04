Textarea from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Textarea` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Textarea.html`): Default, Required, With Char Count, Error.

## Props

```ts
interface TextareaProps {
  label?: string;
  hint?: string;
  validationState?: "none" | "error" | "warning" | "success";
  validationMessage?: string;
  required?: boolean;
  rows?: number;
  maxLength?: number;
  currentLength?: number;
  appearance?: "filled-darker" | "outline" | "filled-lighter" | "filled-darker-shadow" | "filled-lighter-shadow";
  /** Wrapper element used for displaying the borders for Textarea. This wrapper is needed due to the focus indicator border a */
  root?: unknown;
  style?: React.CSSProperties;
  /** The `<textarea>` element. This is the primary slot, all native props and ref are applied to this slot. */
  textarea?: unknown;
  className?: string;
  children?: any;
  /** The default value of the Textarea. */
  defaultValue?: string;
  id?: string;
  as?: "textarea";
  /** The value of the Textarea. */
  value?: string;
  /** Size of the Textarea. */
  size?: "small" | "medium" | "large";
  /** Which direction the Textarea is allowed to be resized. */
  resize?: "none" | "both" | "horizontal" | "vertical";
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { label: "Description", placeholder: "Enter a description…" },
};

// Required
export const Required: Story = {
  args: { label: "Feedback", required: true, placeholder: "Share your thoughts…" },
};

// With Char Count
export const WithCharCount: Story = {
  args: { label: "Bio", maxLength: 280, currentLength: 120, placeholder: "Tell us about yourself…", rows: 4 },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### Required

```jsx
/* Required */ compose(S, "Required")
```

### WithCharCount

```jsx
/* With Char Count */ compose(S, "WithCharCount")
```

### Error

```jsx
/* Error */ compose(S, "Error")
```
