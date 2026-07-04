import * as React from 'react';

/**
 * Textarea — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Textarea.stories.tsx).
 * @replaces textarea
 */
export interface TextareaProps {
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

export declare const Textarea: React.ComponentType<TextareaProps>;
