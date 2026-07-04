import * as React from 'react';

/**
 * AvatarGroup — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/AvatarGroup.stories.tsx).
 */
export interface AvatarGroupProps {
  members: AvatarGroupMember[];
  /** Maximum avatars to show before collapsing into overflow. Default 5. */
  maxVisible?: number;
  layout?: "stack" | "spread" | "pie";
  size?: 16 | 20 | 24 | 28 | 32 | 36 | 40 | 48 | 56 | 64 | 72 | 96 | 120 | 128;
  /** aria-label for the group */
  "aria-label"?: string;
  className?: string;
  style?: React.CSSProperties;
}

export declare const AvatarGroup: React.ComponentType<AvatarGroupProps>;
