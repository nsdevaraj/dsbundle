import * as React from 'react';

/**
 * Image — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Image.stories.tsx).
 * @replaces img
 */
export interface ImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  fit?: "center" | "none" | "default" | "contain" | "cover";
  shape?: "square" | "circular" | "rounded";
  /** Fill the container width */
  block?: boolean;
  /** Add a 1px border */
  bordered?: boolean;
  /** Add a shadow */
  shadow?: boolean;
  /** Fallback src on load error */
  fallbackSrc?: string;
  /** Show skeleton while loading */
  showSkeleton?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  loading?: "eager" | "lazy";
}

export declare const Image: React.ComponentType<ImageProps>;
