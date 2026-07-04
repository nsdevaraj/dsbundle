# Fluent2 Design System — Conventions for the Design Agent

## Setup: always wrap in FluentProvider

Every page must be wrapped in `<FluentProvider>` from this design system — without it, components render unstyled (Griffel CSS-in-JS requires the provider for its renderer and token injection). The provider also controls theme and text direction.

```jsx
import { FluentProvider } from "@lumel/fluent2-ds";
import { lightTheme } from "@lumel/fluent2-ds"; // or darkTheme, highContrastTheme

<FluentProvider theme={lightTheme} dir="ltr">
  {/* your app */}
</FluentProvider>
```

Available themes: `lightTheme` (default), `darkTheme`, `highContrastTheme`. Import them from `@lumel/fluent2-ds`. Set `dir="rtl"` for right-to-left layouts.

## Styling: no CSS classes — use tokens and component props

This is a Griffel CSS-in-JS system. There are no static stylesheets, no utility classes, and no `className`-based layout. Components ship their own styles from the compiled bundle. You style composition and layout through:

- **Component props** (`appearance`, `size`, `icon`, `iconPosition`, `loading`, `disabled`, etc.) — read each component's `.prompt.md` for its API.
- **Design tokens** for spacing, color, and typography values applied to container `<div>` elements via inline styles or your own `makeStyles` calls.
- **Typography components** (`Heading`, `Body`, `Caption`, `Title1`, `Title2`, `Subtitle1`, etc.) for text hierarchy — never set `font-size` manually.

## The token vocabulary

Import tokens from `@lumel/fluent2-ds` and use them in inline `style` props:

### Spacing
`spacing.vertical.none|xxs|xs|s|m|l|xl|xxl|xxxl` — padding-top/bottom, row gap
`spacing.horizontal.none|xxs|xs|s|m|l|xl|xxl|xxxl` — padding-left/right, column gap

```jsx
<div style={{ padding: spacing.vertical.m + ' ' + spacing.horizontal.l, gap: spacing.horizontal.m }}>
```

### Border radius
`borderRadius.none|small|medium|large|xlarge|circular`

```jsx
<Card style={{ borderRadius: borderRadius.medium }}>
```

### Typography tokens
`typography.fontFamily.base|mono|numeric`
`typography.fontSize.xs|sm|md|base|lg|xl|title2|title1|largeTitle|display`
`typography.fontWeight.regular|medium|semibold|bold`
`typography.lineHeight.xs|sm|md|base|lg|xl|...`

But prefer the **typography components** over raw tokens:
`Heading`, `Body`, `Caption`, `Display`, `LargeTitle`, `Title1`, `Title2`, `Title3`, `Subtitle1`, `Subtitle2`, `Body1Strong`, `Body1Stronger`, `Body2`, `Caption1Strong`, `Caption2`

### Colors
`brandColors` and `semanticColors` — use these token objects for brand-aligned colors. The FluentProvider injects CSS custom properties; components resolve their own colors.

## Where the truth lives

- **Component API docs**: `_ds/components/<group>/<Name>/<Name>.prompt.md` — the design agent's per-component usage reference
- **Type definitions**: `_ds/components/<group>/<Name>/<Name>.d.ts` — the exact prop types
- **Bundle**: `_ds/_ds_bundle.js` — the compiled component code (window.LumelFluent2Ds)
- **Styling**: There is no separate stylesheet to read. Styles are in the bundle. Container composition uses tokens from this header.

## Idiomatic build snippet

A simple form card using this library:

```jsx
import {
  FluentProvider, lightTheme,
  Card, TextField, Button,
  spacing, borderRadius,
  Body, Title3
} from "@lumel/fluent2-ds";

function SignupForm() {
  return (
    <FluentProvider theme={lightTheme} dir="ltr">
      <div style={{ maxWidth: 400, margin: "0 auto", padding: spacing.vertical.xl }}>
        <Card>
          <div style={{ display: "flex", flexDirection: "column", gap: spacing.vertical.m }}>
            <Title3>Create Account</Title3>
            <Body>Enter your details below.</Body>
            <TextField label="Email" placeholder="you@example.com" />
            <TextField label="Password" type="password" />
            <Button appearance="primary">Sign Up</Button>
          </div>
        </Card>
      </div>
    </FluentProvider>
  );
}
```

Key patterns:
1. `FluentProvider` at the root with a theme.
2. Layout spacing via `spacing.vertical.*` / `spacing.horizontal.*` in `style` props.
3. Typography via dedicated components (`Title3`, `Body`), not raw text.
4. Component behavior via props (`appearance="primary"`), not classes.

# LumelFluent2Ds (@lumel/fluent2-ds@0.1.0-alpha.1)

This design system is the published @lumel/fluent2-ds React library, bundled as a single
browser global. All 58 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.LumelFluent2Ds`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry (tokens and fonts; this DS injects component styles at runtime). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.LumelFluent2Ds.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { Accordion } = window.LumelFluent2Ds;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<Accordion />);
```

This DS's storybook wraps every story in decorators from `.storybook/preview`
(bundled for the preview cards as `_vendor/preview-decorators.js`). Components
likely need equivalent context — theme/i18n providers — in your tree too. The
exact chain hasn't been distilled into config, so check the DS's documented
provider setup before composing.

## Tokens

0 CSS custom properties from @lumel/fluent2-ds. Names are
preserved verbatim from upstream. None detected — this DS may compute styles at runtime (CSS-in-JS).

## Components

### FormInputs
- `Checkbox` — Checkbox is a form control with three states (checked, unchecked, indeterminate) for binary
- `Combobox` — Combobox combines a text input with a dropdown list, letting users type to filter options or select from a predefined set. Supports single a
- `DatePicker` — DatePicker is a popup calendar control (from
- `Dropdown` — Dropdown is a selection control that presents a bounded list of options in a popup. Unlike Combobox, the trigger is button-like  users pick 
- `FileUpload` — FileUpload provides a drag-and-drop zone and file input button for uploading files. Displays selected file names and supports single or mult
- `InfoLabel` — InfoLabel combines a label with a small information icon button that opens a Tooltip or Popover with explanatory content. Used to provide su
- `RadioGroup` — RadioGroup presents a set of mutually exclusive option buttons where users must pick exactly
- `SearchInput` — SearchInput is a text input pre-configured for search interactions, with a built-in search icon and dismiss button. It exposes the correct A
- `Select` — Select wraps the native browser select element with Fluent visual styling, preserving full cross-platform accessibility and mobile-native pi
- `Slider` — Slider lets users select a value from a continuous or stepped range by dragging a thumb along
- `SpinButton` — SpinButton is a numeric input with increment/decrement buttons, bounded between configurable min and max values. Values change via buttons, 
- `Switch` — Switch is a toggle control representing a physical on/off switch for binary settings that
- `TagPicker` — TagPicker combines a text search input with a tag display area, letting users select multiple
- `TextField` — TextField is a styled single-line text input for capturing short freeform values such as names, email addresses, passwords, and URLs. It wra
- `Textarea` — Textarea is a multi-line text input for capturing longer freeform content like comments, descriptions, notes, or messages. It wraps Fluent U
- `TimePicker` — TimePicker is a dropdown/freeform input (from

### Feedback
- `CounterBadge` — CounterBadge displays a numeric count indicator  unread messages, notification counts  attached to a nav item, button, or avatar. Shows a do
- `DSToaster` — Mount this once near the root of your app (inside FluentProvider).
- `MessageBar` — MessageBar communicates important state or contextual information about the entire application or a specific surface. Information persists u
- `PresenceBadge` — PresenceBadge conveys a user's online status  available, away, busy, do-not-disturb, offline, out-of-office, or unknown. Typically positione
- `ProgressBar` — ProgressBar provides a visual representation of loading or processing as a horizontal bar. Supports determinate mode (known percentage) and 
- `Skeleton` — Skeleton is a shimmer animation placeholder shown while data loads, mimicking the shape of the incoming content. It reduces perceived wait t
- `Spinner` — Spinner alerts users that content is loading or processing by rendering an animated circular indicator. Used for indeterminate operations wh
- `StatusBadge` — StatusBadge is a compact label used to communicate the status or category of an item  such as workflow states, priority levels, or lifecycle

### Navigation
- `Accordion` — Accordion allows users to toggle the display of content by expanding or collapsing sections. It conserves vertical space by hiding content u
- `Breadcrumb` — Breadcrumb is a navigation aid showing the user's current location within a hierarchy and providing links to parent levels. Rendered as a ho
- `PageHeader` — PageHeader displays the top section of a page with a title, optional subtitle, breadcrumb navigation, and action buttons aligned to the head
- `Pagination` — Pagination lets users move through a large, paged data set one page at a time  the standard control beneath data tables and long lists. It s
- `SideNav` — SideNav is a persistent vertical navigation panel providing top-level application navigation with support for nested items, icons, and selec
- `Stepper` — Stepper displays progress through a multi-step sequential workflow, with each step showing a number or icon, label, and completion state. Gu
- `Tabs` — Tabs organize content into multiple panels where only one panel is visible at a time, with tab labels displayed as a horizontal or vertical 

### Overlay
- `ConfirmDialog` — ConfirmDialog is a pre-composed Dialog for confirmation prompts  a title, message, confirm button, and cancel button  providing a consistent
- `Dialog` — Dialog is a modal window that requires user attention before they can continue. It makes all content outside it inert and visually dimmed, e
- `Drawer` — Drawer is a panel that slides in from the screen edge, retaining context of the underlying page. OverlayDrawer dims the page (Dialog-based) 
- `Popover` — Popover is a non-modal floating surface anchored to a trigger, displaying additional interactive content or controls on click. Unlike Toolti
- `TeachingPopover` — TeachingPopover is a specialized popover for onboarding users to new features. It supports multi-step pagination, title, body text, media, a
- `Tooltip` — Tooltip is a brief, non-interactive floating label appearing on hover or focus to clarify the purpose of a UI element. It is dismissed when 

### DataDisplay
- `AvatarGroup` — AvatarGroup renders a stacked or spread cluster of Avatar components, used to represent a group of people associated with an item  such as f
- `Card` — Card is a visually bounded container grouping related content and actions about a single subject  such as a file, person, email, or article.
- `DataCard` — DataCard is a metric display component for showing key performance indicators and summary statistics  a value, a label, and optional trend/c
- `DataTable` — DataTable is a full-featured data grid built on Fluent's Table components, supporting sorting, selection, pagination, and custom cell render
- `Icon` — Icon renders Fluent icons from
- `Image` — Image wraps the HTML img element with Fluent styling support for fit, shape (rounded, circular, square), shadow, and block/inline layout. Ha
- `InteractionTag` — InteractionTag extends Tag with interactive patterns  clickable for filtering/navigation, or dismissible so users can remove a selection. Us
- `Persona` — Persona combines an Avatar with a person's name, secondary text (job title), and tertiary text (status), providing a consistent way to repre
- `Rating` — Rating allows users to view or input a star-based (or custom icon) score. The Rating component is interactive for input RatingDisplay is rea
- `Tag` — Tag is a compact label for categorizing, filtering, or displaying metadata associated with content. Read-only by default use InteractionTag 
- `Tree` — Tree displays hierarchical data in a collapsible and expandable structure, rendering parent-child relationships with indentation and expand/
- `UserAvatar` — UserAvatar is a graphical representation of a user displayed as an image, initials, or fallback icon in a circular container. Wraps Fluent's

### Layout
- `Divider` — Divider is a thin horizontal or vertical line for visually separating content into sections. Can optionally contain a label or icon centered
- `EmptyState` — EmptyState displays a placeholder illustration, title, and description when a content area has no items  such as an empty search result, an 

### Action
- `Button` — Button triggers an action or event when activated  such as submitting a form, opening a dialog, or performing an operation. Use the primary 
- `Link` — Link renders as an anchor element for navigation to a URL or as an inline textual action following hyperlink conventions  visually distingui
- `Menu` — Menu presents a contextual overlay of actionable items, checkable items, radio groups, or nested submenus, triggered by a button or interact
- `MenuButton` — MenuButton is a Button with a built-in chevron indicating that clicking it always opens a dropdown menu. Unlike SplitButton, the entire butt
- `SplitButton` — SplitButton combines a primary action button with a chevron that opens a dropdown menu of related secondary actions. The left area executes 
- `ToggleButton` — ToggleButton maintains a checked/unchecked state and visually communicates that state. Ideal for toolbar formatting controls  Bold, Italic, 
- `Toolbar` — Toolbar groups related action controls  Buttons, ToggleButtons, MenuButtons  into a horizontal band with a single tab stop. Arrow-key naviga
