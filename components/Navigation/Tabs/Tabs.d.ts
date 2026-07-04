import * as React from 'react';

/**
 * Tabs — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/Tabs.stories.tsx).
 */
export interface TabsProps {
  tabs: TabItem[];
  /** Panel content keyed by tab value */
  panels?: Record<string, React.ReactNode>;
  /** Controlled selected tab value */
  selectedValue?: string;
  defaultSelectedValue?: string;
  onTabSelect?: (value: string) => void;
  size?: "small" | "medium";
  appearance?: "subtle" | "transparent";
  vertical?: boolean;
}

export declare const Tabs: React.ComponentType<TabsProps>;
