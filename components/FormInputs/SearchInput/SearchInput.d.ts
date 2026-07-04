import * as React from 'react';

/**
 * SearchInput — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/SearchInput.stories.tsx).
 */
export interface SearchInputProps {
  /** Called with the search query — debounced by default */
  onSearch: (query: string) => void;
  placeholder?: string;
  /** Debounce delay in ms. Set to 0 to disable. Default: 300 */
  debounceMs?: number;
  defaultValue?: string;
  size?: "small" | "medium";
  disabled?: boolean;
  /** Additional CSS class name(s) to apply to the root element */
  className?: string;
}

export declare const SearchInput: React.ComponentType<SearchInputProps>;
