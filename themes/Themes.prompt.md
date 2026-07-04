Themes from @lumel/fluent2-ds. **Preview:** open `Themes.html` to compare all three side by side (token swatches + live components under each theme). Apply a theme by passing it to `<FluentProvider theme={…}>` — the provider injects every theme value (including custom `colorRibbonIcon*` and `colorDataSlot*` tokens) as CSS variables, which is how components pick up colors, text direction, and elevation.

Import:

```jsx
import { FluentProvider } from "@lumel/fluent2-ds";
import { lightTheme, darkTheme, highContrastTheme, themes } from "@lumel/fluent2-ds";
```

## Available themes

| Export | `themes` key | Built from |
| --- | --- | --- |
| `lightTheme` (default) | `themes.light` | `createLightTheme(brandColors)` + ribbon/data-viz light values |
| `darkTheme` | `themes.dark` | `createDarkTheme(brandColors)` + brand-foreground tweak + dark values |
| `highContrastTheme` | `themes.highContrast` | Fluent `teamsHighContrastTheme` |

## Setup

```jsx
// Root of the app — required; without it components render unstyled.
<FluentProvider theme={lightTheme} dir="ltr">
  {/* your app */}
</FluentProvider>
```

## Theme switching

```jsx
import { FluentProvider, themes } from "@lumel/fluent2-ds";
// mode: "light" | "dark" | "highContrast"  (see the ThemeName type)

function App({ mode, children }) {
  return <FluentProvider theme={themes[mode]}>{children}</FluentProvider>;
}
```

## Notes

- Theme objects hold **literal** resolved values (hex/px); `FluentProvider` turns them into `--token` CSS variables. Read those variables via the `tokens`/`semanticColors`/`dataVizTokens` token objects — see `Tokens.prompt.md`.
- Custom token groups (`ribbonColors*`, `dataVizColors*`) are spread into `lightTheme`/`darkTheme`, so `colorRibbonIcon*` and `colorDataSlot*` switch with the theme automatically.
- Set `dir="rtl"` on the provider for right-to-left layouts.
