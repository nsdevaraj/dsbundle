/**
 * Tokens — TypeScript reference for the design-token vocabulary.
 *
 * Companion to `Tokens.html` (the live visual gallery). Import the tokens
 * themselves from the package root (or `../tokens`); this file re-exports their
 * types and documents the complete runtime token surface.
 *
 *   import { spacing, typography, semanticColors } from "@lumel/fluent2-ds";
 *
 * Every token object is also exposed on the browser bundle global
 * `window.LumelFluent2Ds`. Token values that are CSS custom-property references
 * (spacing, radius, typography, shadows, semanticColors, dataVizTokens,
 * ribbonTokens, motion, focus) only resolve inside a `<FluentProvider>`.
 */

// ── Re-exported token types (single reference point) ─────────────────────────
export type { SemanticColors } from "./colors";
export type { Typography } from "./typography";
export type { Spacing } from "./spacing";
export type { BorderRadius } from "./borderRadius";
export type { Shadows } from "./shadows";
export type { Motion } from "./motion";
export type { Opacity } from "./opacity";
export type { ZIndex } from "./zIndex";
export type { Breakpoint, Media } from "./breakpoints";
export type { Focus } from "./focus";
export type { RibbonTokens } from "./ribbonColors";
export type { DataVizTokens } from "./dataVizColors";

import type { SemanticColors } from "./colors";
import type { Typography } from "./typography";
import type { Spacing } from "./spacing";
import type { BorderRadius } from "./borderRadius";
import type { Shadows } from "./shadows";
import type { Motion } from "./motion";
import type { Opacity } from "./opacity";
import type { ZIndex } from "./zIndex";
import type { Media } from "./breakpoints";
import type { Focus } from "./focus";
import type { RibbonTokens } from "./ribbonColors";
import type { DataVizTokens } from "./dataVizColors";

/**
 * The complete DS design-token surface — the shape of every token object
 * exported from the package and mirrored on `window.LumelFluent2Ds`.
 */
export interface DesignTokens {
  readonly brandColors: typeof import("./brand").brandColors;
  readonly semanticColors: SemanticColors;
  readonly typography: Typography;
  readonly spacing: Spacing;
  readonly borderRadius: BorderRadius;
  readonly shadows: Shadows;
  readonly motion: Motion;
  readonly opacity: Opacity;
  readonly zIndex: ZIndex;
  readonly breakpoints: typeof import("./breakpoints").breakpoints;
  readonly media: Media;
  readonly ribbonTokens: RibbonTokens;
  readonly dataVizTokens: DataVizTokens;
  readonly focus: Focus;
}
