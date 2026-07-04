TeachingPopover from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.TeachingPopover` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `TeachingPopover.html`): Single Step, No Dismiss Button, Multi Step, Positioned Above.

## Props

```ts
interface TeachingPopoverProps {
  /** The element that triggers the popover */
  trigger: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  /** Popover title (single-step mode) */
  title?: string;
  /** Popover body (single-step mode) */
  body?: React.ReactNode;
  /** Steps for carousel mode — takes priority over title/body */
  steps?: TeachingPopoverStep[];
  /** Primary CTA (e.g. "Got it", "Try it") */
  primaryAction?: TeachingPopoverAction;
  /** Secondary / dismiss action */
  secondaryAction?: TeachingPopoverAction;
  positioning?: "before" | "after" | PositioningProps | "above" | "above-start" | "above-end" | "below" | "below-start" | "below-end" | "before-top" | "before-bottom" | "after-top" | "after-bottom";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Dismiss button in header */
  withDismiss?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
```

## Examples

```jsx
// Single Step
export const SingleStep: Story = {
  args: {
    trigger: <Button appearance="primary">What's new</Button>,
    title: "Introducing Smart Search",
    body: "Find anything faster with our new AI-powered search. Just type what you're looking for in natural language.",
    primaryAction: { label: "Try it now" },
    secondaryAction: { label: "Dismiss" },
  },
};

// No Dismiss Button
export const NoDismissButton: Story = {
  args: {
    trigger: <Button appearance="secondary">Help</Button>,
    title: "Keyboard shortcuts",
    body: "Press Ctrl+K to open command palette. Press ? anywhere to see all shortcuts.",
    withDismiss: false,
    primaryAction: { label: "Got it" },
  },
};

// Multi Step
export const MultiStep: Story = {
  args: {
    trigger: <Button appearance="primary">Start tour</Button>,
    title: "Get started",
    steps: [
      {
        title: "Welcome to the dashboard",
        body: "This is your command center. Here you can see an overview of all your projects and recent activity.",
      },
      {
        title: "Create your first project",
        body: "Click the + button in the top right to create a new project. You can choose from templates or start blank.",
      },
      {
        title: "Invite your team",
        body: "Share projects with teammates by clicking Share. They'll get an email invitation to collaborate.",
      },
    ],
    primaryAction: { label: "Done" },
  },
};
```

### SingleStep

```jsx
/* Single Step */ compose(S, "SingleStep")
```

### NoDismissButton

```jsx
/* No Dismiss Button */ compose(S, "NoDismissButton")
```

### MultiStep

```jsx
/* Multi Step */ compose(S, "MultiStep")
```

### PositionedAbove

```jsx
/* Positioned Above */ compose(S, "PositionedAbove")
```
