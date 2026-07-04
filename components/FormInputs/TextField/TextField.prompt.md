TextField from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.TextField` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `TextField.html`): Default, With Hint, Required, Error State, Success State, Warning State, With Char Count, Small, Dark Mode, RTL.

## Props

```ts
interface TextFieldProps {
  label?: string;
  hint?: string;
  validationState?: "none" | "error" | "warning" | "success";
  validationMessage?: string;
  required?: boolean;
  size?: "small" | "medium";
  maxLength?: number;
  currentLength?: number;
  appearance?: "filled-darker" | "outline" | "underline" | "filled-lighter";
  /** Wrapper element which visually appears to be the input and is used for borders, focus styling, etc. (A wrapper is needed */
  root?: unknown;
  /** The actual `<input>` element. `type="text"` will be automatically applied unless overridden. This is the "primary" slot, */
  input?: NonNullable<{ as?: "input"; } & Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & { ref?: React.Ref<HTMLInputElement>; }, "children"> & { children?: never; }>;
  style?: React.CSSProperties;
  className?: string;
  /** Input can't have children. */
  children?: never;
  /** Default value of the input. Provide this if the input should be an uncontrolled component which tracks its current state */
  defaultValue?: string;
  id?: string;
  as?: "input";
  /** An input can have different text-based [types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_typ */
  type?: "number" | "search" | "time" | "text" | "tel" | "url" | "email" | "date" | "password" | "datetime-local" | "month" | "week";
  /** Current value of the input. Provide this if the input is a controlled component where you are maintaining its current st */
  value?: string;
  /** Element before the input text, within the input border */
  contentBefore?: unknown;
  /** Element after the input text, within the input border */
  contentAfter?: unknown;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { label: "Full name", placeholder: "Enter your name" },
};

// With Hint
export const WithHint: Story = {
  args: { label: "Email", hint: "We'll never share your email.", placeholder: "user@example.com", type: "email" },
};

// Required
export const Required: Story = {
  args: { label: "Username", required: true, placeholder: "Choose a username" },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### WithHint

```jsx
/* With Hint */ compose(S, "WithHint")
```

### Required

```jsx
/* Required */ compose(S, "Required")
```

### ErrorState

```jsx
/* Error State */ compose(S, "ErrorState")
```

### SuccessState

```jsx
/* Success State */ compose(S, "SuccessState")
```

### WarningState

```jsx
/* Warning State */ compose(S, "WarningState")
```

### WithCharCount

```jsx
/* With Char Count */ compose(S, "WithCharCount")
```

### Small

```jsx
/* Small */ compose(S, "Small")
```

### DarkMode

```jsx
/* Dark Mode */ compose(S, "DarkMode")
```

### RTL

```jsx
/* RTL */ compose(S, "RTL")
```
