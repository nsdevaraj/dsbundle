import * as React from 'react';

/**
 * UserAvatar — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/UserAvatar.stories.tsx).
 */
export interface UserAvatarProps {
  /** Display name — used for initials and color assignment */
  name: string;
  size?: 16 | 20 | 24 | 28 | 32 | 36 | 40 | 48 | 56 | 64 | 72 | 96 | 128;
  /** Direct image URL */
  imageUrl?: string;
  presence?: "available" | "away" | "busy" | "do-not-disturb" | "offline" | "out-of-office";
  /** Override initials (max 2 chars) */
  initials?: string;
  color?: "anchor" | "marigold" | "dark-red" | "cranberry" | "red" | "pumpkin" | "peach" | "gold" | "brass" | "brown" | "forest" | "seafoam" | "dark-green" | "light-teal" | "teal" | "steel" | (string & {}) /* +14 more */;
  shape?: "square" | "circular";
  /** Marks the avatar as active or inactive */
  active?: "active" | "inactive";
  /** Visual style of the active indicator */
  activeAppearance?: "ring" | "shadow" | "ring-shadow";
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
}

export declare const UserAvatar: React.ComponentType<UserAvatarProps>;
