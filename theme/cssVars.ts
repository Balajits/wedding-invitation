import { theme } from "./theme";

// bgBase -> --bg-base,  flower1 -> --flower-1
const toVarName = (key: string) =>
  "--" +
  key
    .replace(/([a-z])(\d)/g, "$1-$2")
    .replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());

export const themeCssVars: Record<string, string> = Object.fromEntries(
  Object.entries(theme).map(([key, value]) => [toVarName(key), value])
);
