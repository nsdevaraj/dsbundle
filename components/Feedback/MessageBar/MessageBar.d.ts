import * as React from 'react';

/**
 * MessageBar — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/MessageBar.stories.tsx).
 */
export interface MessageBarProps {
  intent?: "error" | "warning" | "success" | "info";
  /** Bold title line at the top of the message */
  title?: string;
  /** Message body content */
  children: React.ReactNode;
  /** Inline action buttons rendered inside the bar */
  actions?: MessageBarAction[];
  /** Called when the dismiss button is clicked */
  onDismiss?: () => void;
  /** Show the dismiss (×) button */
  dismissible?: boolean;
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
}

export declare const MessageBar: React.ComponentType<MessageBarProps>;
