import * as React from 'react';

/**
 * TextField — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/TextField.stories.tsx).
 * @replaces input
 */
export interface TextFieldProps {
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

export declare const TextField: React.ComponentType<TextFieldProps>;
