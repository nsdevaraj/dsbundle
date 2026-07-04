FileUpload from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.FileUpload` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `FileUpload.html`): Default, Multiple, With Size Limit, Required, Disabled, With Error, Custom Prompt.

## Props

```ts
interface FileUploadProps {
  label?: string;
  /** Accepted MIME types or file extensions, e.g. ".pdf,image/*" */
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  required?: boolean;
  /** Max file size in bytes (displayed to user, not enforced client-side) */
  maxSizeBytes?: number;
  onFilesSelected?: (files: File[]) => void;
  validationState?: "none" | "error" | "warning" | "success";
  validationMessage?: string;
  hint?: string;
  /** Custom prompt text inside the drop zone */
  promptText?: string;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { label: "Upload file", onFilesSelected: (files) => console.log(files) },
};

// Multiple
export const Multiple: Story = {
  args: { label: "Upload documents", multiple: true, accept: ".pdf,.docx" },
};

// With Size Limit
export const WithSizeLimit: Story = {
  args: { label: "Profile picture", accept: "image/*", maxSizeBytes: 5 * 1024 * 1024 },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### Multiple

```jsx
/* Multiple */ compose(S, "Multiple")
```

### WithSizeLimit

```jsx
/* With Size Limit */ compose(S, "WithSizeLimit")
```

### Required

```jsx
/* Required */ compose(S, "Required")
```

### Disabled

```jsx
/* Disabled */ compose(S, "Disabled")
```

### WithError

```jsx
/* With Error */ compose(S, "WithError")
```

### CustomPrompt

```jsx
/* Custom Prompt */ compose(S, "CustomPrompt")
```
