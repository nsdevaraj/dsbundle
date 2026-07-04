import * as React from 'react';

/**
 * Tag — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Tag.stories.tsx).
 */
export interface TagProps {
  children: React.ReactNode;
  value?: string;
  appearance?: "filled" | "outline" | "brand";
  size?: "small" | "medium" | "extra-small";
  dismissible?: boolean;
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  disabled?: boolean;
  shape?: "circular" | "rounded";
}

export declare const Tag: React.ComponentType<TagProps>;
