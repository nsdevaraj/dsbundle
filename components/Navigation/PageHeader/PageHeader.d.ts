import * as React from 'react';

/**
 * PageHeader — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/PageHeader.stories.tsx).
 */
export interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: string[];
  actions?: React.ReactNode;
}

export declare const PageHeader: React.ComponentType<PageHeaderProps>;
