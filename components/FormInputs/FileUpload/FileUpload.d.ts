import * as React from 'react';

/**
 * FileUpload — from @lumel/fluent2-ds@0.1.0-alpha.1 (./src/stories/FileUpload.stories.tsx).
 */
export interface FileUploadProps {
  label?: string;
  /** Accepted MIME types or file extensions, e.g. ".pdf,image/*" */
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  required?: boolean;
  /** Max file size in bytes (displayed to user, not enforced client-side) */
  maxSizeBytes?: number;
  onFilesSelected?: (files: File[]) => void;
  validationState?: "none" | "error" | "warning" | "success";
  validationMessage?: string;
  hint?: string;
  /** Custom prompt text inside the drop zone */
  promptText?: string;
}

export declare const FileUpload: React.ComponentType<FileUploadProps>;
