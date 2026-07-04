DatePicker from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.DatePicker` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `DatePicker.html`): Default, Required, With Min Max, Allow Text Input, Error State, Monday Start.

## Props

```ts
interface DatePickerProps {
  label?: string;
  /** Controlled selected date */
  value?: Date;
  onSelectDate?: (date: Date | null | undefined) => void;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  required?: boolean;
  /** Allow the user to type a date directly */
  allowTextInput?: boolean;
  /** First day of the week (0 = Sunday, 1 = Monday, etc.) */
  firstDayOfWeek?: DayOfWeek.Sunday | DayOfWeek.Monday | DayOfWeek.Tuesday | DayOfWeek.Wednesday | DayOfWeek.Thursday | DayOfWeek.Friday | DayOfWeek.Saturday;
  validationState?: "none" | "error" | "warning" | "success";
  validationMessage?: string;
  hint?: string;
  className?: string;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: { label: "Select date", placeholder: "Choose a date" },
};

// Required
export const Required: Story = {
  args: { label: "Due date", required: true },
};

// With Min Max
export const WithMinMax: Story = {
  args: {
    label: "Booking date",
    minDate: new Date(),
    maxDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    hint: "Bookings available for the next 30 days",
  },
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

### WithMinMax

```jsx
/* With Min Max */ compose(S, "WithMinMax")
```

### AllowTextInput

```jsx
/* Allow Text Input */ compose(S, "AllowTextInput")
```

### ErrorState

```jsx
/* Error State */ compose(S, "ErrorState")
```

### MondayStart

```jsx
/* Monday Start */ compose(S, "MondayStart")
```
