import { theme, type ThemeColors } from "./theme";

// bgBase -> --bg-base,  flower1 -> --flower-1
const toVarName = (key: string) =>
  "--" +
  key
    .replace(/([a-z])(\d)/g, "$1-$2")
    .replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());

export function getThemeCssVars(colors: ThemeColors): Record<string, string> {
  return Object.fromEntries(
    Object.entries(colors).map(([key, value]) => [toVarName(key), value])
  );
}

export const themeCssVars = getThemeCssVars(theme);
