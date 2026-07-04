import * as React from 'react';

/**
 * Combobox — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Combobox.stories.tsx).
 */
export interface ComboboxProps {
  label?: string;
  hint?: string;
  options: ComboboxOption[] | ComboboxGroup[];
  validationState?: "none" | "error" | "warning" | "success";
  validationMessage?: string;
  required?: boolean;
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
  appearance?: "filled-darker" | "outline" | "underline" | "filled-lighter";
  /** The root combobox slot */
  root?: unknown;
  /** The primary slot, an input with role="combobox" */
  input?: NonNullable<{ as?: "input"; } & Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & { ref?: React.Ref<HTMLInputElement>; }, "children"> & { children?: never; }>;
  style?: React.CSSProperties;
  id?: string;
  as?: "input";
  /** Where the portal children are mounted on DOM */
  mountNode?: HTMLElement | { element?: HTMLElement | null; className?: string; };
  /** The dropdown arrow icon */
  expandIcon?: unknown;
  /** The dropdown listbox slot */
  listbox?: string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<any> | React.ReactPortal | unknown;
  /** Controls the size of the combobox faceplate */
  size?: "small" | "medium" | "large";
  /** The dropdown clear icon */
  clearIcon?: unknown;
  /** If set, the combobox will show an icon to clear the current value. */
  clearable?: boolean;
  /** For an uncontrolled component, sets the initial selection. If this is set, the `defaultValue` prop MUST also be set. */
  defaultSelectedOptions?: string[];
  /** Sets the selection type to multiselect. Set this to true for multiselect, even if fully controlling selection state. Thi */
  multiselect?: boolean;
  /** An array of selected option keys. Use this with `onOptionSelect` to directly control the selected option(s) If this is s */
  selectedOptions?: string[];
  /** Disable auto-focusing on the first item when mounting. */
  disableAutoFocus?: boolean;
  /** The default open state when open is uncontrolled */
  defaultOpen?: boolean;
  /** Sets the open/closed state of the dropdown. Use together with onOpenChange to fully control the dropdown's visibility */
  open?: boolean;
  /** Configure the positioning of the combobox dropdown. Please refer to the [positioning documentation](https://react.fluent */
  positioning?: "before" | "after" | PositioningProps | "above" | "above-start" | "above-end" | "below" | "below-start" | "below-end" | "before-top" | "before-bottom" | "after-top" | "after-bottom";
  /** Render the combobox's popup inline in the DOM. This has accessibility benefits, particularly for touch screen readers. */
  inlinePopup?: boolean;
  freeform?: boolean;
}

export declare const Combobox: React.ComponentType<ComboboxProps>;
