/**
 * Design System — Unified Public Entry Point
 *
 * Single import path that brings the component layer together with the design
 * tokens and themes, mirroring the source library's `src/ds.ts`. Consumers get
 * components, the provider, tokens, and themes from one place:
 *
 *   import {
 *     FluentProvider, Button, Card,      // components + provider (Fluent v9)
 *     lightTheme, darkTheme, themes,     // themes
 *     spacing, borderRadius, typography, // design tokens
 *     semanticColors, dataVizTokens,     // custom token groups
 *   } from "@lumel/fluent2-ds-bundle";
 *
 * How components consume tokens/themes:
 *   • Themes  → passed to <FluentProvider theme={lightTheme}>. The provider
 *               injects every theme value (including the custom ribbon/dataViz
 *               tokens) as CSS custom properties on its subtree.
 *   • Tokens  → the `*Tokens` objects (dataVizTokens, ribbonTokens) and Fluent's
 *               runtime `tokens` reference those CSS variables, so components read
 *               the active theme automatically via makeStyles()/inline styles.
 */

// ── Component + provider + runtime-token layer (Fluent UI v9 foundation) ─────
export * from "@fluentui/react-components";

// ── Design tokens ────────────────────────────────────────────────────────────
export * from "./tokens";

// ── Themes ───────────────────────────────────────────────────────────────────
export * from "./themes";

// ── Compile-time wiring contract (types only — erased at runtime) ────────────
// Guarantees every DS theme is assignable to FluentProvider's `theme` prop, i.e.
// that components can actually consume each theme. A mismatch fails `tsc`.
import { lightTheme, darkTheme, highContrastTheme } from "./themes";
import type { FluentProviderProps } from "@fluentui/react-components";

type ValidProviderTheme = NonNullable<FluentProviderProps["theme"]>;
type Assert<T extends true> = T;
type IsAssignable<A, B> = [A] extends [B] ? true : false;

type _LightThemeWired = Assert<IsAssignable<typeof lightTheme, ValidProviderTheme>>;
type _DarkThemeWired = Assert<IsAssignable<typeof darkTheme, ValidProviderTheme>>;
type _HighContrastThemeWired = Assert<IsAssignable<typeof highContrastTheme, ValidProviderTheme>>;
