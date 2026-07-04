TimePicker from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.TimePicker` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `TimePicker.html`): Default, Twelve Hour Clock, Fifteen Minute Increments, Business Hours Only, Required, With Hint, Error, Warning, Success, Disabled, Small, Underline, Filled Darker, Dark Mode, All Validation States.

## Props

```ts
interface TimePickerProps {
  label?: string;
  /** Controlled selected time */
  value?: Date;
  /** Default selected time for uncontrolled scenarios */
  defaultValue?: Date;
  /** Callback when a time is selected. Receives the Date (or null) and the display time string. */
  onTimeChange?: (date: Date | null, timeString: string) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  /** 12-hour or 24-hour clock. Mapped to hourCycle h12/h23. Default: 24 */
  hourCycle?: 24 | 12;
  /** Minute increment for the dropdown options (default: 30) */
  increment?: number;
  appearance?: "filled-darker" | "outline" | "underline" | "filled-lighter";
  size?: "small" | "medium";
  validationState?: "none" | "error" | "warning" | "success";
  validationMessage?: string;
  hint?: string;
  /** Start hour (inclusive), 0–24. Default: 0 */
  startHour?: number;
  /** End hour (exclusive), 0–24. Default: 24 */
  endHour?: number;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
}
```

## Examples

```jsx
// Default
export const Default: Story = {
  args: {
    label: "Meeting time",
    placeholder: "Select a time",
  },
};

// Twelve Hour Clock
export const TwelveHourClock: Story = {
  args: {
    label: "Appointment time",
    hourCycle: 12,
    placeholder: "Select a time",
  },
};

// Fifteen Minute Increments
export const FifteenMinuteIncrements: Story = {
  args: {
    label: "Booking slot",
    increment: 15,
    placeholder: "Select a time",
  },
};
```

### Default

```jsx
/* Default */ compose(S, "Default")
```

### TwelveHourClock

```jsx
/* Twelve Hour Clock */ compose(S, "TwelveHourClock")
```

### FifteenMinuteIncrements

```jsx
/* Fifteen Minute Increments */ compose(S, "FifteenMinuteIncrements")
```

### BusinessHoursOnly

```jsx
/* Business Hours Only */ compose(S, "BusinessHoursOnly")
```

### Required

```jsx
/* Required */ compose(S, "Required")
```

### WithHint

```jsx
/* With Hint */ compose(S, "WithHint")
```

### Error

```jsx
/* Error */ compose(S, "Error")
```

### Warning

```jsx
/* Warning */ compose(S, "Warning")
```

### Success

```jsx
/* Success */ compose(S, "Success")
```

### Disabled

```jsx
/* Disabled */ compose(S, "Disabled")
```

### Small

```jsx
/* Small */ compose(S, "Small")
```

### Underline

```jsx
/* Underline */ compose(S, "Underline")
```

### FilledDarker

```jsx
/* Filled Darker */ compose(S, "FilledDarker")
```

### DarkMode

```jsx
/* Dark Mode */ compose(S, "DarkMode")
```

### AllValidationStates

```jsx
/* All Validation States */ compose(S, "AllValidationStates")
```
