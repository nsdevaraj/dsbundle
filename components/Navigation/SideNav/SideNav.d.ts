import * as React from 'react';

/**
 * SideNav — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/SideNav.stories.tsx).
 */
export interface SideNavProps {
  /** Flat list of items OR grouped items */
  items?: SideNavItem[];
  groups?: SideNavGroup[];
  /** Currently active item ID */
  selectedId?: string;
  onSelect?: (id: string) => void;
  /** Collapse to icon-only mode */
  collapsed?: boolean;
}

export declare const SideNav: React.ComponentType<SideNavProps>;
