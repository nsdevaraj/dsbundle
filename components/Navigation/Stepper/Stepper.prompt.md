Stepper from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.Stepper` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `Stepper.html`): Default, Vertical, With Error, All Completed.

## Props

```ts
interface StepperProps {
  steps: Step[];
  orientation?: "horizontal" | "vertical";
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { steps },
};

// Vertical
export const Vertical: Story = {
  args: { steps, orientation: "vertical" },
};

// With Error
export const WithError: Story = {
  args: {
    steps: [
      { label: "Account", status: "completed" as const },
      { label: "Verify", status: "error" as const, description: "Verification failed" },
      { label: "Profile", status: "upcoming" as const },
    ],
  },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### Vertical

```jsx
/* Vertical */ compose(S, "Vertical")
```

### WithError

```jsx
/* With Error */ compose(S, "WithError")
```

### AllCompleted

```jsx
/* All Completed */ compose(S, "AllCompleted")
```
