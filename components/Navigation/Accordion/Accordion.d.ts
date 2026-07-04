import * as React from 'react';

/**
 * Accordion — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Accordion.stories.tsx).
 */
export interface AccordionProps {
  items: AccordionItemDef[];
  /** Allow multiple panels open simultaneously. Default false (single open). */
  multiple?: boolean;
  /** Allow closing all panels (the open panel can be toggled closed). Default true. */
  collapsible?: boolean;
  /** Controlled open items (array of values) */
  openItems?: string[];
  onToggle?: (value: string, open: boolean) => void;
  size?: "small" | "medium";
  appearance?: "filled-darker" | "filled-alternative" | "subtle" | "transparent";
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
}

export declare const Accordion: React.ComponentType<AccordionProps>;
