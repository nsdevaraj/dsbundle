import * as React from 'react';

/**
 * DataCard — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/DataCard.stories.tsx).
 */
export interface DataCardProps {
  label: string;
  value: string | number;
  trend?: string;
  /** true = green up arrow, false = red down arrow */
  trendUp?: boolean;
  icon?: React.ReactNode;
  description?: string;
}

export declare const DataCard: React.ComponentType<DataCardProps>;
