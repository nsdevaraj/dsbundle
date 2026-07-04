/**
 * Themes — TypeScript reference (companion to `Themes.html`).
 *
 * Apply a theme by passing it to `<FluentProvider theme={…}>`. The provider
 * injects every theme value — including the custom ribbon + data-viz token
 * keys spread into each theme — as CSS variables on its subtree, which is how
 * components consume the active theme.
 *
 *   import { FluentProvider, lightTheme, darkTheme, highContrastTheme, themes } from "@lumel/fluent2-ds";
 *   <FluentProvider theme={themes.dark}>…</FluentProvider>
 */
import type { Theme } from "@fluentui/react-components";

export type { ThemeName } from "./index";

/**
 * A DS theme is a Fluent `Theme` extended with the custom ribbon + data-viz
 * token keys (string CSS values) that FluentProvider emits as CSS variables.
 */
export type DSTheme = Theme & Record<string, string>;

export type LightTheme = typeof import("./lightTheme").lightTheme;
export type DarkTheme = typeof import("./darkTheme").darkTheme;
export type HighContrastTheme = typeof import("./highContrastTheme").highContrastTheme;

/** Lookup map of every DS theme, keyed by `ThemeName`. */
export type Themes = typeof import("./index").themes;
