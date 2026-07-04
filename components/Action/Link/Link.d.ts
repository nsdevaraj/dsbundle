import * as React from 'react';

/**
 * Link — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Link.stories.tsx).
 * @replaces a
 */
export interface LinkProps {
  /** URL to navigate to */
  href?: string;
  /** Render inline (within text flow). Defaults true. */
  inline?: boolean;
  /** Opens in new tab and appends external aria label hint */
  external?: boolean;
  /** Prevents navigation and renders as disabled */
  disabled?: boolean;
  /** Visual appearance */
  appearance?: "subtle" | "default";
  /** Click handler (use instead of href for SPA navigation) */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  "aria-label"?: string;
  "aria-describedby"?: string;
}

export declare const Link: React.ComponentType<LinkProps>;
