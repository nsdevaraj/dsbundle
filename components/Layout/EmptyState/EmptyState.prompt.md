EmptyState from @lumel/fluent2-ds. Use via `window.LumelFluent2Ds.EmptyState` (bundle loaded from the root `_ds_bundle.js`). Components expect the context this repo's `.storybook/preview` decorators provide (theme/i18n) — see README.md.

Variants (see `EmptyState.html`): No Results, Empty Folder, No Documents.

## Props

```ts
interface EmptyStateProps {
  /** A Fluent icon element, e.g. <Search48Regular /> */
  icon?: React.ReactNode;
  title: string;
  description?: string;
  /** Optional CTA button or link */
  action?: React.ReactNode;
}
```

## Examples

```jsx
// No Results
export const NoResults: Story = {
  args: {
    icon: <Search48Regular />,
    title: "No results found",
    description: "Try adjusting your search or filters to find what you're looking for.",
    action: <Button appearance="primary">Clear filters</Button>,
  },
};

// Empty Folder
export const EmptyFolder: Story = {
  args: {
    icon: <FolderOpenRegular />,
    title: "This folder is empty",
    description: "Upload files or create a new document to get started.",
    action: <Button appearance="primary">Upload files</Button>,
  },
};

// No Documents
export const NoDocuments: Story = {
  args: {
    icon: <DocumentRegular />,
    title: "No documents yet",
    description: "Create your first document to see it here.",
  },
};
```

### NoResults

```jsx
/* No Results */ compose(S, "NoResults")
```

### EmptyFolder

```jsx
/* Empty Folder */ compose(S, "EmptyFolder")
```

### NoDocuments

```jsx
/* No Documents */ compose(S, "NoDocuments")
```
