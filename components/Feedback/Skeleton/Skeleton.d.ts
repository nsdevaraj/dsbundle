import * as React from 'react';

/**
 * Skeleton — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Skeleton.stories.tsx).
 */
export interface SkeletonProps {
  style?: React.CSSProperties;
  className?: string;
  children?: any;
  id?: string;
  as?: "div" | "span";
  /** The animation type for the Skeleton */
  animation?: "wave" | "pulse";
  /** Sets the appearance of the Skeleton. */
  appearance?: "opaque" | "translucent";
  /** Sets the width value of the skeleton wrapper. */
  width?: string | number;
  /** Sets the size of the SkeletonItems inside the Skeleton in pixels. Size is restricted to a limited set of values recommen */
  size?: 16 | 20 | 24 | 28 | 32 | 36 | 40 | 48 | 56 | 64 | 72 | 96 | 120 | 128 | 8 | 12 | 14 | 22 | 52 | 92;
  /** Sets the shape of the SkeletonItems inside the Skeleton. This value can be overridden by the individual SkeletonItem's ` */
  shape?: "circle" | "square" | "rectangle";
}

export declare const Skeleton: React.ComponentType<SkeletonProps>;
