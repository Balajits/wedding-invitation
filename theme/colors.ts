/**
 * 🎨 WEBSITE COLOUR THEME  (sky blue / light blue)
 * ------------------------------------------------
 * Change colours ONLY in this file. They are turned into CSS variables
 * (see theme/cssVars.ts + app/layout.tsx) and used by every component.
 *
 * Use normal hex codes like "#6db6ec".
 * The ...Rgb values are "R, G, B" numbers (used for soft shadows / overlays).
 */
export const theme = {
  // ---------- page background ----------
  bgBase: "#f1f8ff",
  bgGlowA: "#e1f0fd",
  bgGlowB: "#c7e3fa",

  // ---------- main brand blues ----------
  accent: "#4b93d1",
  accentDark: "#2a79bd",
  focusRing: "#2a79bd",

  // ---------- opening card (front) ----------
  cardTop: "#f8fcff",
  cardFrom: "#eaf5fe",
  cardMid: "#d3e9fb",
  cardTo: "#bddcf6",

  // ---------- opening card (back, after flip) ----------
  cardBackGlow: "#8cc7f4",
  cardBackFrom: "#6db6ec",
  cardBackMid: "#4b9ede",
  cardBackTo: "#2a79bd",
  cardBackText: "#ffffff",

  // ---------- text ----------
  textTitle: "#1f5d94", // OUR FOREVER BEGINS
  textStrong: "#17324d", // names
  textBody: "#2a5a85", // quote
  textSoft: "#4b93d1", // "&"
  textDate: "#2a79bd", // date

  // ---------- "Open Invitation" button ----------
  buttonFrom: "#5eaae8",
  buttonTo: "#2a79bd",
  buttonText: "#ffffff",

  // ---------- floating flowers (opening card page) ----------
  flower1: "#cfe6fb",
  flower2: "#8fc6f2",
  flower3: "#eaf5ff",
  flowerCenter: "#fff3c9",

  // ---------- hero section text ----------
  heroText: "#ffffff",
  heroEyebrow: "#d6ecff",
  heroWeds: "#bfe0fb",
  heroTagline: "#e8f4ff",
  heroBg: "#10263b", // shown behind the photo while it loads

  // ---------- "R, G, B" numbers for shadows and overlays ----------
  shadowRgb: "42, 121, 189", // soft blue shadows / frame lines
  overlayRgb: "0, 0, 0", // hero photo overlay (neutral dark)
  heroShadowRgb: "10, 24, 40", // text shadow on hero
} as const;

/**
 * Rose petals in the hero section. Each petal fades from [0] to [1].
 * Add / remove / change pairs freely.
 */
export const petalGradients: ReadonlyArray<readonly [string, string]> = [
  ["#eaf6ff", "#9fd0f5"],
  ["#cfe6fb", "#5aa9e6"],
  ["#ffffff", "#b9dcf7"],
  ["#bfe3fb", "#3f98dc"],
];
