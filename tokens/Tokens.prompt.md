Design tokens from @lumel/fluent2-ds. Every token object is exported from the package root and mirrored on `window.LumelFluent2Ds` (bundle loaded from the root `_ds_bundle.js`). **Preview:** open `Tokens.html` for a live gallery of every group. Token values that are CSS custom-property references only resolve inside `<FluentProvider>`.

Import:

```jsx
import {
  brandColors, semanticColors, typography, spacing, borderRadius,
  shadows, motion, opacity, zIndex, breakpoints, media,
  dataVizTokens, ribbonTokens, focus, focusRing,
} from "@lumel/fluent2-ds";
```

## Groups (see `Tokens.html`)

| Group | Keys |
| --- | --- |
| `brandColors` | `10` → `160` (16-shade ramp; drives all `colorBrand*` tokens) |
| `spacing.vertical` / `spacing.horizontal` | `none` `xxs` `xs` `s` `sNudge` `m` `mNudge` `l` `xl` `xxl` `xxxl` |
| `borderRadius` | `none` `small` `medium` `large` `xlarge` `circular` |
| `typography` | `fontFamily` · `fontSize` · `fontWeight` · `lineHeight` · `textStyles` |
| `shadows` | `2` `4` `8` `16` `28` `64` (+ `shadows.brand.*`) |
| `semanticColors` | `brand` `neutral` `success` `warning` `danger` `info` |
| `dataVizTokens` | `colorDataSlot1`–`40`, `colorSequence1color1`–`10`, `colorSequence2color1`–`10`, `colorDiverging1color1`–`9`, `colorDiverging2color1`–`8`, `colorAlert1`–`7`, `colorTransparencyDataSlot1`–`10` |
| `ribbonTokens` | `colorRibbonIconDismiss` `…Manage` `…Move` `…Object` `…Success` `…Trigger` `…Warning` |
| `opacity` | `transparent` `hover` `pressed` `selected` `disabled` `scrim` `overlay` `opaque` |
| `zIndex` | `hide` `base` `docked` `dropdown` `sticky` `banner` `overlay` `modal` `popover` `toast` `tooltip` |
| `breakpoints` / `media` | `xs` `sm` `md` `lg` `xl` `xxl` + `media.up()` `media.down()` `media.between()` |
| `focus` / `focusRing()` | `width` `color` `colorInner` `offset` `style` |

`typography.fontSize`: `xs sm md base lg xl title2 title1 largeTitle display`
`typography.fontWeight`: `regular medium semibold bold`
`motion.duration`: `ultraFast faster fast normal gentle slow slower ultraSlow`
`motion.easing`: `easeIn easeOut linear decelerate accelerate`

## Examples

```jsx
// Inline layout with spacing, radius, and elevation
<div style={{
  padding: `${spacing.vertical.m} ${spacing.horizontal.l}`,
  gap: spacing.horizontal.m,
  borderRadius: borderRadius.medium,
  boxShadow: shadows[4],
}} />
```

```jsx
// makeStyles: motion, responsive media, focus ring, and data-viz color
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  card: {
    transition: `opacity ${motion.duration.fast} ${motion.easing.easeOut}`,
    [media.up("md")]: { gridTemplateColumns: "1fr 1fr" },
    ":focus-visible": focusRing(),
  },
  series1: { backgroundColor: dataVizTokens.colorDataSlot1 },
});
```

> Never hardcode px/hex/ms values — always reference these tokens so light/dark/high-contrast theming stays consistent.
