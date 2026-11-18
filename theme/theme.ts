/**
 * 🎨 WEBSITE THEMES
 * ------------------------------------------------------------------
 * 1) To switch the whole website, change ONE line:   activeTheme = "..."
 * 2) To tweak a colour, edit the hex code inside that theme below.
 *
 * Available themes:
 *   "ivoryGold"   Sky Blue + Ivory + Gold        (classic, bridal)
 *   "blushPowder" Powder Blue + Blush Pink       (soft, romantic)
 *   "dustySage"   Dusty Blue + Cream + Sage      (calm, garden wedding)
 *   "navyGold"    Navy + Gold + Pearl            (royal, rich, dark page)
 *   "skySilver"   Sky Blue + White + Silver      (fresh, clean, cool)
 *   "pinkLavender"   Baby Pink + Lavender        (soft, sweet, romantic)
 *   "roseGoldLilac"  Lilac + Rose Gold           (bridal, elegant)
 *   "lavenderPearl"  Lavender Mist + Pearl Pink  (light, airy, clean)
 *   "orchidGold"     Orchid + Baby Pink + Gold   (rich, festive, traditional)
 *
 *   "blushRose"  Blush Rose
 *   "raspberryPink"  Raspberry Pink
 *   "powderBlue"  Powder Blue
 *   "royalBlue"  Royal Blue
 *   "sageGreen"  Sage Green
 *   "emeraldGreen"  Emerald Green
 *   "lilacMist"  Lilac Mist
 *   "royalPlum"  Royal Plum
 *   "maroonGold"  Maroon + Gold
 *   "burgundyBlush"  Burgundy + Blush
 *
 *   "peachChampagne"  Peach + Champagne
 *   "roseGarden"  Rose Garden
 *   "candlelightRuby"  Candlelight Ruby
 *   "twilightMauve"  Twilight Mauve
 *
 *   "blushSage"  Blush Pink + Sage Green
 *   "peachSky"  Peach + Sky Blue
 *   "lilacMint"  Lilac + Mint Green
 *   "maroonDustyBlue"  Maroon + Dusty Blue
 *   "plumRose"  Plum + Rose Pink
 *   "emeraldChampagne"  Champagne + Emerald Green
 *   "skyCobalt"  Sky Blue + Cobalt Blue
 *
 * Colours are hex codes like "#6db6ec".
 * The ...Rgb values are "R, G, B" numbers (used for soft shadows / lines).
 */

export type ThemeName =
  | "ivoryGold"
  | "blushPowder"
  | "dustySage"
  | "navyGold"
  | "skySilver"
  | "pinkLavender"
  | "roseGoldLilac"
  | "lavenderPearl"
  | "orchidGold"
  | "blushRose"
  | "raspberryPink"
  | "powderBlue"
  | "royalBlue"
  | "sageGreen"
  | "emeraldGreen"
  | "lilacMist"
  | "royalPlum"
  | "maroonGold"
  | "burgundyBlush"
  | "peachChampagne"
  | "roseGarden"
  | "candlelightRuby"
  | "twilightMauve"
  | "blushSage"
  | "peachSky"
  | "lilacMint"
  | "maroonDustyBlue"
  | "plumRose"
  | "emeraldChampagne"
  | "skyCobalt";

// 👇 CHANGE THIS ONE LINE TO SWITCH THE WHOLE WEBSITE 👇
export const activeTheme: ThemeName = "skySilver";

export interface ThemeColors {
  // page
  bgBase: string; bgGlowA: string; bgGlowB: string; pageText: string;
  // brand
  accent: string; accentDark: string; focusRing: string;
  // opening card front
  cardTop: string; cardFrom: string; cardMid: string; cardTo: string;
  // opening card back (after flip)
  cardBackGlow: string; cardBackFrom: string; cardBackMid: string; cardBackTo: string; cardBackText: string;
  // card text
  textTitle: string; textStrong: string; textBody: string; textSoft: string; textDate: string;
  // button
  buttonFrom: string; buttonTo: string; buttonText: string;
  // floating flowers
  flower1: string; flower2: string; flower3: string; flowerCenter: string;
  // hero
  heroText: string; heroEyebrow: string; heroWeds: string; heroTagline: string; heroBg: string;
  // "R, G, B" numbers
  shadowRgb: string;  // soft shadows
  lineRgb: string;    // thin frame / divider lines
  overlayRgb: string; // hero photo overlay
  heroShadowRgb: string; // hero text shadow
}

export interface ThemePreset {
  label: string;
  colors: ThemeColors;
  /** hero rose petals: each fades from [0] to [1] */
  petals: ReadonlyArray<readonly [string, string]>;
}

export const themes = {
  // ───────────────────────── 1. Sky Blue + Ivory + Gold ─────────────────────────
  ivoryGold: {
    label: "Sky Blue + Ivory + Gold",
    colors: {
      bgBase: "#f3f9fe", bgGlowA: "#fff4d6", bgGlowB: "#cfe6f8", pageText: "#17324d",
      accent: "#c9a24a", accentDark: "#a8821f", focusRing: "#2a79bd",
      cardTop: "#fffdf6", cardFrom: "#fffaf0", cardMid: "#f8f0de", cardTo: "#ecdfc4",
      cardBackGlow: "#8cc7f4", cardBackFrom: "#6db6ec", cardBackMid: "#4b9ede", cardBackTo: "#2a79bd", cardBackText: "#fffaf0",
      textTitle: "#1f5d94", textStrong: "#17324d", textBody: "#3a5a78", textSoft: "#c9a24a", textDate: "#a8821f",
      buttonFrom: "#5eaae8", buttonTo: "#2a79bd", buttonText: "#ffffff",
      flower1: "#cfe6fb", flower2: "#9fd0f5", flower3: "#fff1c9", flowerCenter: "#e6c46e",
      heroText: "#ffffff", heroEyebrow: "#f3d98b", heroWeds: "#e6c46e", heroTagline: "#f6ead0", heroBg: "#10263b",
      shadowRgb: "42, 121, 189", lineRgb: "201, 162, 74", overlayRgb: "0, 0, 0", heroShadowRgb: "10, 24, 40",
    },
    petals: [["#fffaf0", "#e6c46e"], ["#cfe6fb", "#5aa9e6"], ["#ffffff", "#b9dcf7"], ["#f7e7b4", "#c9a24a"]],
  },

  // ───────────────────────── 2. Powder Blue + Blush Pink ─────────────────────────
  blushPowder: {
    label: "Powder Blue + Blush Pink",
    colors: {
      bgBase: "#f1f7fc", bgGlowA: "#fde9ee", bgGlowB: "#cfe3f5", pageText: "#2d3f55",
      accent: "#d98fa6", accentDark: "#b9667f", focusRing: "#5f8fbf",
      cardTop: "#fffdfe", cardFrom: "#eef5fc", cardMid: "#dbe9f6", cardTo: "#f3d6df",
      cardBackGlow: "#bcd6ee", cardBackFrom: "#9cc0e3", cardBackMid: "#7fa8cf", cardBackTo: "#5f8fbf", cardBackText: "#ffffff",
      textTitle: "#4f7fb0", textStrong: "#2d3f55", textBody: "#52708f", textSoft: "#d98fa6", textDate: "#c06a85",
      buttonFrom: "#8fb6dd", buttonTo: "#5f8fbf", buttonText: "#ffffff",
      flower1: "#cfe3f5", flower2: "#f4cfd8", flower3: "#ffffff", flowerCenter: "#fff1c9",
      heroText: "#ffffff", heroEyebrow: "#fbd9e2", heroWeds: "#f4cfd8", heroTagline: "#eef5fc", heroBg: "#1c2b3d",
      shadowRgb: "95, 143, 191", lineRgb: "127, 168, 207", overlayRgb: "0, 0, 0", heroShadowRgb: "20, 30, 45",
    },
    petals: [["#fff5f8", "#f4b8c8"], ["#fbe0e7", "#e790aa"], ["#ffffff", "#cfe3f5"], ["#e1ecf8", "#8fb6dd"]],
  },

  // ───────────────────────── 3. Dusty Blue + Cream + Sage ─────────────────────────
  dustySage: {
    label: "Dusty Blue + Cream + Sage",
    colors: {
      bgBase: "#f7f3ea", bgGlowA: "#e6eee9", bgGlowB: "#d3e0ea", pageText: "#33414d",
      accent: "#8fb0c9", accentDark: "#5f87a6", focusRing: "#5f87a6",
      cardTop: "#fffdf8", cardFrom: "#f6f1e7", cardMid: "#e6ece5", cardTo: "#d3e0ea",
      cardBackGlow: "#b7cfe0", cardBackFrom: "#9bb8cf", cardBackMid: "#7aa0bd", cardBackTo: "#5f87a6", cardBackText: "#fffdf8",
      textTitle: "#4a6f8c", textStrong: "#33414d", textBody: "#4f6070", textSoft: "#7f9c82", textDate: "#6a8a6e",
      buttonFrom: "#9db9cf", buttonTo: "#5f87a6", buttonText: "#ffffff",
      flower1: "#d3e0ea", flower2: "#a8b8a0", flower3: "#f6f1e7", flowerCenter: "#f1e2b4",
      heroText: "#ffffff", heroEyebrow: "#dbe8d6", heroWeds: "#cfe0ea", heroTagline: "#eef2e9", heroBg: "#1e2a33",
      shadowRgb: "95, 135, 166", lineRgb: "128, 160, 135", overlayRgb: "0, 0, 0", heroShadowRgb: "20, 30, 38",
    },
    petals: [["#fffdf8", "#cfdccb"], ["#e6ece5", "#9bb0a0"], ["#d3e0ea", "#7aa0bd"], ["#f6f1e7", "#a8b8a0"]],
  },

  // ───────────────────────── 4. Navy + Gold + Pearl (dark page) ─────────────────────────
  navyGold: {
    label: "Navy + Gold + Pearl",
    colors: {
      bgBase: "#14264a", bgGlowA: "#25407a", bgGlowB: "#0b1730", pageText: "#f7f4ee",
      accent: "#d4af5f", accentDark: "#b8923f", focusRing: "#d4af5f",
      cardTop: "#fffdf9", cardFrom: "#f7f4ee", cardMid: "#ece7dc", cardTo: "#ddd6c6",
      cardBackGlow: "#2f4f8c", cardBackFrom: "#274480", cardBackMid: "#1c3566", cardBackTo: "#12224a", cardBackText: "#f5e2a8",
      textTitle: "#1d2f5c", textStrong: "#14264a", textBody: "#34476f", textSoft: "#b8923f", textDate: "#9a7a2e",
      buttonFrom: "#e3c57c", buttonTo: "#b8923f", buttonText: "#14264a",
      flower1: "#d4af5f", flower2: "#8fc1ec", flower3: "#f7f4ee", flowerCenter: "#fff3c9",
      heroText: "#ffffff", heroEyebrow: "#e8cc82", heroWeds: "#d4af5f", heroTagline: "#f1e6c8", heroBg: "#0b1730",
      shadowRgb: "4, 8, 24", lineRgb: "212, 175, 95", overlayRgb: "0, 0, 0", heroShadowRgb: "4, 8, 24",
    },
    petals: [["#f7f4ee", "#d4af5f"], ["#8fc1ec", "#3f72b8"], ["#ffffff", "#e3c57c"], ["#c9d8f0", "#d4af5f"]],
  },

  // ───────────────────────── 5. Sky Blue + White + Silver ─────────────────────────
  skySilver: {
    label: "Sky Blue + White + Silver",
    colors: {
      bgBase: "#f4faff", bgGlowA: "#e8f4fd", bgGlowB: "#d9e2ea", pageText: "#1d3347",
      accent: "#a9d6f7", accentDark: "#3f8fd0", focusRing: "#3f8fd0",
      cardTop: "#ffffff", cardFrom: "#f4faff", cardMid: "#e4f1fb", cardTo: "#d5dee8",
      cardBackGlow: "#cbe6fa", cardBackFrom: "#a9d6f7", cardBackMid: "#7fbdee", cardBackTo: "#4e9fdf", cardBackText: "#ffffff",
      textTitle: "#2f6ea6", textStrong: "#1d3347", textBody: "#44627d", textSoft: "#7b93a8", textDate: "#5d7a94",
      buttonFrom: "#8ec8f3", buttonTo: "#3f8fd0", buttonText: "#ffffff",
      flower1: "#e8f4fd", flower2: "#a9d6f7", flower3: "#dfe6ee", flowerCenter: "#fff8d8",
      heroText: "#ffffff", heroEyebrow: "#e3f2ff", heroWeds: "#c9e5fb", heroTagline: "#eef7ff", heroBg: "#10263b",
      shadowRgb: "90, 130, 170", lineRgb: "160, 175, 190", overlayRgb: "0, 0, 0", heroShadowRgb: "10, 24, 40",
    },
    petals: [["#ffffff", "#c5ced8"], ["#e8f4fd", "#8ec8f3"], ["#f4faff", "#a9d6f7"], ["#dfe6ee", "#7fbdee"]],
  },

  // ───────────────────────── 6. Baby Pink + Lavender ─────────────────────────
  pinkLavender: {
    label: "Baby Pink + Lavender",
    colors: {
      bgBase: "#fdf3f8", bgGlowA: "#fde4ee", bgGlowB: "#e5d8f6", pageText: "#4a2c6b",
      accent: "#b79ae0", accentDark: "#8a63c4", focusRing: "#8a63c4",
      cardTop: "#fffafd", cardFrom: "#fdeef4", cardMid: "#f1e3f6", cardTo: "#dccdf1",
      cardBackGlow: "#d9c8f0", cardBackFrom: "#c6aeea", cardBackMid: "#a98bdb", cardBackTo: "#8a63c4", cardBackText: "#ffffff",
      textTitle: "#7a4fae", textStrong: "#4a2c6b", textBody: "#6b4a8a", textSoft: "#d98fb0", textDate: "#9a5a9e",
      buttonFrom: "#b995e8", buttonTo: "#8a63c4", buttonText: "#ffffff",
      flower1: "#f8d7e3", flower2: "#d9c8f0", flower3: "#ffffff", flowerCenter: "#fff1c9",
      heroText: "#ffffff", heroEyebrow: "#fbdcea", heroWeds: "#e6d3f7", heroTagline: "#fbeaf3", heroBg: "#2a1d3a",
      shadowRgb: "138, 99, 196", lineRgb: "183, 154, 224", overlayRgb: "0, 0, 0", heroShadowRgb: "30, 15, 45",
    },
    petals: [["#fff5f9", "#f4b3cc"], ["#fbdcea", "#e08db0"], ["#f0e6fb", "#b79ae0"], ["#ffffff", "#d9c8f0"]],
  },

  // ───────────────────────── 7. Lilac + Rose Gold ─────────────────────────
  roseGoldLilac: {
    label: "Lilac + Rose Gold",
    colors: {
      bgBase: "#fbf4f8", bgGlowA: "#f9e1e9", bgGlowB: "#d8c7ee", pageText: "#5b3a5e",
      accent: "#c9958a", accentDark: "#a5706a", focusRing: "#8a63a8",
      cardTop: "#fffaf8", cardFrom: "#fff8f6", cardMid: "#f9ebee", cardTo: "#efdde8",
      cardBackGlow: "#d8c7ee", cardBackFrom: "#c4aee6", cardBackMid: "#a98bd0", cardBackTo: "#8a66b0", cardBackText: "#fff8f6",
      textTitle: "#7a4f8f", textStrong: "#5b3a5e", textBody: "#7a5a7e", textSoft: "#c9958a", textDate: "#a5706a",
      buttonFrom: "#e0b3a6", buttonTo: "#b87a72", buttonText: "#ffffff",
      flower1: "#d8c7ee", flower2: "#f6d5df", flower3: "#fff1ea", flowerCenter: "#e2b8a4",
      heroText: "#ffffff", heroEyebrow: "#f3cfc3", heroWeds: "#e0b3a6", heroTagline: "#f8e8ee", heroBg: "#2a1f33",
      shadowRgb: "138, 102, 176", lineRgb: "201, 149, 138", overlayRgb: "0, 0, 0", heroShadowRgb: "35, 20, 40",
    },
    petals: [["#fff8f6", "#e0b3a6"], ["#f6d5df", "#d98fa6"], ["#e8dcf7", "#b79ae0"], ["#fdeef2", "#c9958a"]],
  },

  // ───────────────────────── 8. Lavender Mist + Pearl Pink ─────────────────────────
  lavenderPearl: {
    label: "Lavender Mist + Pearl Pink",
    colors: {
      bgBase: "#fdf8fb", bgGlowA: "#f4e6f1", bgGlowB: "#e8def7", pageText: "#4a3d5c",
      accent: "#c9bfd9", accentDark: "#8f7fb0", focusRing: "#8f7fb0",
      cardTop: "#ffffff", cardFrom: "#fdf6fa", cardMid: "#f3ebf8", cardTo: "#e8def7",
      cardBackGlow: "#e3d8f5", cardBackFrom: "#cfc0e8", cardBackMid: "#b5a2d8", cardBackTo: "#9884c4", cardBackText: "#ffffff",
      textTitle: "#6a5a90", textStrong: "#4a3d5c", textBody: "#6a5d7c", textSoft: "#e39ab8", textDate: "#8f7fb0",
      buttonFrom: "#c3b3e3", buttonTo: "#8f7fb0", buttonText: "#ffffff",
      flower1: "#e8def7", flower2: "#f4c9da", flower3: "#e3d8ee", flowerCenter: "#fff3c9",
      heroText: "#ffffff", heroEyebrow: "#f1e6fb", heroWeds: "#f4c9da", heroTagline: "#f6eefa", heroBg: "#2a2236",
      shadowRgb: "143, 127, 176", lineRgb: "201, 191, 217", overlayRgb: "0, 0, 0", heroShadowRgb: "30, 20, 45",
    },
    petals: [["#ffffff", "#f4c9da"], ["#f3ebf8", "#c9bfd9"], ["#fdf6fa", "#e3b5cb"], ["#e8def7", "#b5a2d8"]],
  },

  // ───────────────────────── 9. Orchid + Baby Pink + Gold ─────────────────────────
  orchidGold: {
    label: "Orchid + Baby Pink + Gold",
    colors: {
      bgBase: "#fbf5fa", bgGlowA: "#f9e0ea", bgGlowB: "#e2cdf0", pageText: "#51306d",
      accent: "#d9b878", accentDark: "#b8934a", focusRing: "#8e55b8",
      cardTop: "#fffdf9", cardFrom: "#fffaf5", cardMid: "#f8eaf2", cardTo: "#ecd9ee",
      cardBackGlow: "#d3b0ea", cardBackFrom: "#b98ad9", cardBackMid: "#9c63c2", cardBackTo: "#7b459f", cardBackText: "#fff3d6",
      textTitle: "#7a45a3", textStrong: "#51306d", textBody: "#6e4a88", textSoft: "#d9b878", textDate: "#b8934a",
      buttonFrom: "#c897e6", buttonTo: "#8e55b8", buttonText: "#ffffff",
      flower1: "#f9d3e0", flower2: "#c8a2e0", flower3: "#fff1d6", flowerCenter: "#d9b878",
      heroText: "#ffffff", heroEyebrow: "#f1d9a0", heroWeds: "#d9b878", heroTagline: "#f7e8d2", heroBg: "#2b1a3a",
      shadowRgb: "142, 85, 184", lineRgb: "217, 184, 120", overlayRgb: "0, 0, 0", heroShadowRgb: "30, 15, 45",
    },
    petals: [["#fff5f9", "#f2a9c4"], ["#e4c8f2", "#a870d0"], ["#fffaf5", "#d9b878"], ["#f9d3e0", "#c8a2e0"]],
  },

  // Pink
  blushRose: {
    label: "Blush Rose",
    colors: {
      bgBase: "#fff6f8", bgGlowA: "#fce5ec", bgGlowB: "#f4c6d5", pageText: "#431c2a",
      accent: "#b75b7b", accentDark: "#943654", focusRing: "#943654",
      cardTop: "#fffdfb", cardFrom: "#fff6f8", cardMid: "#fce5ec", cardTo: "#f4c6d5",
      cardBackGlow: "#b75b7b", cardBackFrom: "#943654", cardBackMid: "#782640", cardBackTo: "#431c2a", cardBackText: "#fff6f8",
      textTitle: "#782640", textStrong: "#431c2a", textBody: "#662f42", textSoft: "#662f42", textDate: "#943654",
      buttonFrom: "#943654", buttonTo: "#782640", buttonText: "#ffffff",
      flower1: "#fce5ec", flower2: "#f4c6d5", flower3: "#fff6f8", flowerCenter: "#b75b7b",
      heroText: "#ffffff", heroEyebrow: "#fce5ec", heroWeds: "#f4c6d5", heroTagline: "#fff6f8", heroBg: "#431c2a",
      shadowRgb: "120, 38, 64", lineRgb: "183, 91, 123", overlayRgb: "0, 0, 0", heroShadowRgb: "67, 28, 42",
    },
    petals: [["#fff6f8", "#f4c6d5"], ["#fce5ec", "#b75b7b"], ["#fffdfb", "#fce5ec"], ["#f4c6d5", "#943654"]],
  },
  raspberryPink: {
    label: "Raspberry Pink",
    colors: {
      bgBase: "#fff3f9", bgGlowA: "#ffdbef", bgGlowB: "#f6b1d8", pageText: "#45102e",
      accent: "#cc4287", accentDark: "#a02263", focusRing: "#a02263",
      cardTop: "#fffdfb", cardFrom: "#fff3f9", cardMid: "#ffdbef", cardTo: "#f6b1d8",
      cardBackGlow: "#cc4287", cardBackFrom: "#a02263", cardBackMid: "#7e174d", cardBackTo: "#45102e", cardBackText: "#fff3f9",
      textTitle: "#7e174d", textStrong: "#45102e", textBody: "#631d46", textSoft: "#631d46", textDate: "#a02263",
      buttonFrom: "#a02263", buttonTo: "#7e174d", buttonText: "#ffffff",
      flower1: "#ffdbef", flower2: "#f6b1d8", flower3: "#fff3f9", flowerCenter: "#cc4287",
      heroText: "#ffffff", heroEyebrow: "#ffdbef", heroWeds: "#f6b1d8", heroTagline: "#fff3f9", heroBg: "#45102e",
      shadowRgb: "126, 23, 77", lineRgb: "204, 66, 135", overlayRgb: "0, 0, 0", heroShadowRgb: "69, 16, 46",
    },
    petals: [["#fff3f9", "#f6b1d8"], ["#ffdbef", "#cc4287"], ["#fffdfb", "#ffdbef"], ["#f6b1d8", "#a02263"]],
  },

  // Blue
  powderBlue: {
    label: "Powder Blue",
    colors: {
      bgBase: "#f5faff", bgGlowA: "#e3effc", bgGlowB: "#c2daf3", pageText: "#172e49",
      accent: "#5d89b8", accentDark: "#3d628c", focusRing: "#3d628c",
      cardTop: "#fffdfb", cardFrom: "#f5faff", cardMid: "#e3effc", cardTo: "#c2daf3",
      cardBackGlow: "#5d89b8", cardBackFrom: "#3d628c", cardBackMid: "#2c4d74", cardBackTo: "#172e49", cardBackText: "#f5faff",
      textTitle: "#2c4d74", textStrong: "#172e49", textBody: "#2c4866", textSoft: "#2c4866", textDate: "#3d628c",
      buttonFrom: "#3d628c", buttonTo: "#2c4d74", buttonText: "#ffffff",
      flower1: "#e3effc", flower2: "#c2daf3", flower3: "#f5faff", flowerCenter: "#5d89b8",
      heroText: "#ffffff", heroEyebrow: "#e3effc", heroWeds: "#c2daf3", heroTagline: "#f5faff", heroBg: "#172e49",
      shadowRgb: "44, 77, 116", lineRgb: "93, 137, 184", overlayRgb: "0, 0, 0", heroShadowRgb: "23, 46, 73",
    },
    petals: [["#f5faff", "#c2daf3"], ["#e3effc", "#5d89b8"], ["#fffdfb", "#e3effc"], ["#c2daf3", "#3d628c"]],
  },
  royalBlue: {
    label: "Royal Blue",
    colors: {
      bgBase: "#f3f5ff", bgGlowA: "#e1e7ff", bgGlowB: "#bbcaff", pageText: "#151e52",
      accent: "#576fc6", accentDark: "#344cb0", focusRing: "#344cb0",
      cardTop: "#fffdfb", cardFrom: "#f3f5ff", cardMid: "#e1e7ff", cardTo: "#bbcaff",
      cardBackGlow: "#576fc6", cardBackFrom: "#344cb0", cardBackMid: "#283989", cardBackTo: "#151e52", cardBackText: "#f3f5ff",
      textTitle: "#283989", textStrong: "#151e52", textBody: "#303f70", textSoft: "#303f70", textDate: "#344cb0",
      buttonFrom: "#344cb0", buttonTo: "#283989", buttonText: "#ffffff",
      flower1: "#e1e7ff", flower2: "#bbcaff", flower3: "#f3f5ff", flowerCenter: "#576fc6",
      heroText: "#ffffff", heroEyebrow: "#e1e7ff", heroWeds: "#bbcaff", heroTagline: "#f3f5ff", heroBg: "#151e52",
      shadowRgb: "40, 57, 137", lineRgb: "87, 111, 198", overlayRgb: "0, 0, 0", heroShadowRgb: "21, 30, 82",
    },
    petals: [["#f3f5ff", "#bbcaff"], ["#e1e7ff", "#576fc6"], ["#fffdfb", "#e1e7ff"], ["#bbcaff", "#344cb0"]],
  },

  // Green
  sageGreen: {
    label: "Sage Green",
    colors: {
      bgBase: "#f6f8f1", bgGlowA: "#e9efdf", bgGlowB: "#cddabe", pageText: "#253221",
      accent: "#71845d", accentDark: "#4d6540", focusRing: "#4d6540",
      cardTop: "#fffdfb", cardFrom: "#f6f8f1", cardMid: "#e9efdf", cardTo: "#cddabe",
      cardBackGlow: "#71845d", cardBackFrom: "#4d6540", cardBackMid: "#3a5031", cardBackTo: "#253221", cardBackText: "#f6f8f1",
      textTitle: "#3a5031", textStrong: "#253221", textBody: "#42523a", textSoft: "#42523a", textDate: "#4d6540",
      buttonFrom: "#4d6540", buttonTo: "#3a5031", buttonText: "#ffffff",
      flower1: "#e9efdf", flower2: "#cddabe", flower3: "#f6f8f1", flowerCenter: "#71845d",
      heroText: "#ffffff", heroEyebrow: "#e9efdf", heroWeds: "#cddabe", heroTagline: "#f6f8f1", heroBg: "#253221",
      shadowRgb: "58, 80, 49", lineRgb: "113, 132, 93", overlayRgb: "0, 0, 0", heroShadowRgb: "37, 50, 33",
    },
    petals: [["#f6f8f1", "#cddabe"], ["#e9efdf", "#71845d"], ["#fffdfb", "#e9efdf"], ["#cddabe", "#4d6540"]],
  },
  emeraldGreen: {
    label: "Emerald Green",
    colors: {
      bgBase: "#f1fbf6", bgGlowA: "#dcf5e8", bgGlowB: "#aee5cc", pageText: "#0f362a",
      accent: "#3b9476", accentDark: "#226d54", focusRing: "#226d54",
      cardTop: "#fffdfb", cardFrom: "#f1fbf6", cardMid: "#dcf5e8", cardTo: "#aee5cc",
      cardBackGlow: "#3b9476", cardBackFrom: "#226d54", cardBackMid: "#175440", cardBackTo: "#0f362a", cardBackText: "#f1fbf6",
      textTitle: "#175440", textStrong: "#0f362a", textBody: "#285344", textSoft: "#285344", textDate: "#226d54",
      buttonFrom: "#226d54", buttonTo: "#175440", buttonText: "#ffffff",
      flower1: "#dcf5e8", flower2: "#aee5cc", flower3: "#f1fbf6", flowerCenter: "#3b9476",
      heroText: "#ffffff", heroEyebrow: "#dcf5e8", heroWeds: "#aee5cc", heroTagline: "#f1fbf6", heroBg: "#0f362a",
      shadowRgb: "23, 84, 64", lineRgb: "59, 148, 118", overlayRgb: "0, 0, 0", heroShadowRgb: "15, 54, 42",
    },
    petals: [["#f1fbf6", "#aee5cc"], ["#dcf5e8", "#3b9476"], ["#fffdfb", "#dcf5e8"], ["#aee5cc", "#226d54"]],
  },

  // Purple
  lilacMist: {
    label: "Lilac Mist",
    colors: {
      bgBase: "#faf6ff", bgGlowA: "#f1e5fc", bgGlowB: "#e1cef3", pageText: "#322140",
      accent: "#9469b5", accentDark: "#714693", focusRing: "#714693",
      cardTop: "#fffdfb", cardFrom: "#faf6ff", cardMid: "#f1e5fc", cardTo: "#e1cef3",
      cardBackGlow: "#9469b5", cardBackFrom: "#714693", cardBackMid: "#583575", cardBackTo: "#322140", cardBackText: "#faf6ff",
      textTitle: "#583575", textStrong: "#322140", textBody: "#554067", textSoft: "#554067", textDate: "#714693",
      buttonFrom: "#714693", buttonTo: "#583575", buttonText: "#ffffff",
      flower1: "#f1e5fc", flower2: "#e1cef3", flower3: "#faf6ff", flowerCenter: "#9469b5",
      heroText: "#ffffff", heroEyebrow: "#f1e5fc", heroWeds: "#e1cef3", heroTagline: "#faf6ff", heroBg: "#322140",
      shadowRgb: "88, 53, 117", lineRgb: "148, 105, 181", overlayRgb: "0, 0, 0", heroShadowRgb: "50, 33, 64",
    },
    petals: [["#faf6ff", "#e1cef3"], ["#f1e5fc", "#9469b5"], ["#fffdfb", "#f1e5fc"], ["#e1cef3", "#714693"]],
  },
  royalPlum: {
    label: "Royal Plum",
    colors: {
      bgBase: "#fbf4fc", bgGlowA: "#f0ddf4", bgGlowB: "#ddb9e7", pageText: "#36133e",
      accent: "#9e5bac", accentDark: "#793488", focusRing: "#793488",
      cardTop: "#fffdfb", cardFrom: "#fbf4fc", cardMid: "#f0ddf4", cardTo: "#ddb9e7",
      cardBackGlow: "#9e5bac", cardBackFrom: "#793488", cardBackMid: "#5d246b", cardBackTo: "#36133e", cardBackText: "#fbf4fc",
      textTitle: "#5d246b", textStrong: "#36133e", textBody: "#58295f", textSoft: "#58295f", textDate: "#793488",
      buttonFrom: "#793488", buttonTo: "#5d246b", buttonText: "#ffffff",
      flower1: "#f0ddf4", flower2: "#ddb9e7", flower3: "#fbf4fc", flowerCenter: "#9e5bac",
      heroText: "#ffffff", heroEyebrow: "#f0ddf4", heroWeds: "#ddb9e7", heroTagline: "#fbf4fc", heroBg: "#36133e",
      shadowRgb: "93, 36, 107", lineRgb: "158, 91, 172", overlayRgb: "0, 0, 0", heroShadowRgb: "54, 19, 62",
    },
    petals: [["#fbf4fc", "#ddb9e7"], ["#f0ddf4", "#9e5bac"], ["#fffdfb", "#f0ddf4"], ["#ddb9e7", "#793488"]],
  },

  // Maroon
  maroonGold: {
    label: "Maroon + Gold",
    colors: {
      bgBase: "#fff8ed", bgGlowA: "#f9e9d1", bgGlowB: "#eacb9e", pageText: "#39131d",
      accent: "#b6813f", accentDark: "#852f41", focusRing: "#852f41",
      cardTop: "#fffdfb", cardFrom: "#fff8ed", cardMid: "#f9e9d1", cardTo: "#eacb9e",
      cardBackGlow: "#b6813f", cardBackFrom: "#852f41", cardBackMid: "#691d30", cardBackTo: "#39131d", cardBackText: "#fff8ed",
      textTitle: "#691d30", textStrong: "#39131d", textBody: "#60333b", textSoft: "#60333b", textDate: "#852f41",
      buttonFrom: "#852f41", buttonTo: "#691d30", buttonText: "#ffffff",
      flower1: "#f9e9d1", flower2: "#eacb9e", flower3: "#fff8ed", flowerCenter: "#b6813f",
      heroText: "#ffffff", heroEyebrow: "#f9e9d1", heroWeds: "#eacb9e", heroTagline: "#fff8ed", heroBg: "#39131d",
      shadowRgb: "105, 29, 48", lineRgb: "182, 129, 63", overlayRgb: "0, 0, 0", heroShadowRgb: "57, 19, 29",
    },
    petals: [["#fff8ed", "#eacb9e"], ["#f9e9d1", "#b6813f"], ["#fffdfb", "#f9e9d1"], ["#eacb9e", "#852f41"]],
  },
  burgundyBlush: {
    label: "Burgundy + Blush",
    colors: {
      bgBase: "#fff4f3", bgGlowA: "#f8dddf", bgGlowB: "#eab6bf", pageText: "#3d1623",
      accent: "#b95d72", accentDark: "#8c344d", focusRing: "#8c344d",
      cardTop: "#fffdfb", cardFrom: "#fff4f3", cardMid: "#f8dddf", cardTo: "#eab6bf",
      cardBackGlow: "#b95d72", cardBackFrom: "#8c344d", cardBackMid: "#702338", cardBackTo: "#3d1623", cardBackText: "#fff4f3",
      textTitle: "#702338", textStrong: "#3d1623", textBody: "#643442", textSoft: "#643442", textDate: "#8c344d",
      buttonFrom: "#8c344d", buttonTo: "#702338", buttonText: "#ffffff",
      flower1: "#f8dddf", flower2: "#eab6bf", flower3: "#fff4f3", flowerCenter: "#b95d72",
      heroText: "#ffffff", heroEyebrow: "#f8dddf", heroWeds: "#eab6bf", heroTagline: "#fff4f3", heroBg: "#3d1623",
      shadowRgb: "112, 35, 56", lineRgb: "185, 93, 114", overlayRgb: "0, 0, 0", heroShadowRgb: "61, 22, 35",
    },
    petals: [["#fff4f3", "#eab6bf"], ["#f8dddf", "#b95d72"], ["#fffdfb", "#f8dddf"], ["#eab6bf", "#8c344d"]],
  },

  // Romantic
  peachChampagne: {
    label: "Peach + Champagne",
    colors: {
      bgBase: "#fff8ef", bgGlowA: "#ffe7d6", bgGlowB: "#f2d1a7", pageText: "#3f241e",
      accent: "#bd8455", accentDark: "#934929", focusRing: "#934929",
      cardTop: "#fffdfb", cardFrom: "#fff8ef", cardMid: "#ffe7d6", cardTo: "#f2d1a7",
      cardBackGlow: "#bd8455", cardBackFrom: "#934929", cardBackMid: "#743721", cardBackTo: "#3f241e", cardBackText: "#fff8ef",
      textTitle: "#743721", textStrong: "#3f241e", textBody: "#664038", textSoft: "#664038", textDate: "#934929",
      buttonFrom: "#934929", buttonTo: "#743721", buttonText: "#ffffff",
      flower1: "#ffe7d6", flower2: "#f2d1a7", flower3: "#fff8ef", flowerCenter: "#bd8455",
      heroText: "#ffffff", heroEyebrow: "#ffe7d6", heroWeds: "#f2d1a7", heroTagline: "#fff8ef", heroBg: "#3f241e",
      shadowRgb: "116, 55, 33", lineRgb: "189, 132, 85", overlayRgb: "0, 0, 0", heroShadowRgb: "63, 36, 30",
    },
    petals: [["#fff8ef", "#f2d1a7"], ["#ffe7d6", "#bd8455"], ["#fffdfb", "#ffe7d6"], ["#f2d1a7", "#934929"]],
  },
  roseGarden: {
    label: "Rose Garden",
    colors: {
      bgBase: "#fcf7f3", bgGlowA: "#f3dce2", bgGlowB: "#dbe4d1", pageText: "#35232e",
      accent: "#b87084", accentDark: "#833c55", focusRing: "#833c55",
      cardTop: "#fffdfb", cardFrom: "#fcf7f3", cardMid: "#f3dce2", cardTo: "#dbe4d1",
      cardBackGlow: "#b87084", cardBackFrom: "#833c55", cardBackMid: "#6d3047", cardBackTo: "#35232e", cardBackText: "#fcf7f3",
      textTitle: "#6d3047", textStrong: "#35232e", textBody: "#57434c", textSoft: "#57434c", textDate: "#833c55",
      buttonFrom: "#833c55", buttonTo: "#6d3047", buttonText: "#ffffff",
      flower1: "#f3dce2", flower2: "#dbe4d1", flower3: "#fcf7f3", flowerCenter: "#b87084",
      heroText: "#ffffff", heroEyebrow: "#f3dce2", heroWeds: "#dbe4d1", heroTagline: "#fcf7f3", heroBg: "#35232e",
      shadowRgb: "109, 48, 71", lineRgb: "184, 112, 132", overlayRgb: "0, 0, 0", heroShadowRgb: "53, 35, 46",
    },
    petals: [["#fcf7f3", "#dbe4d1"], ["#f3dce2", "#b87084"], ["#fffdfb", "#f3dce2"], ["#dbe4d1", "#833c55"]],
  },
  candlelightRuby: {
    label: "Candlelight Ruby",
    colors: {
      bgBase: "#fff7ec", bgGlowA: "#f9dfc3", bgGlowB: "#ecbac1", pageText: "#381520",
      accent: "#bc765d", accentDark: "#8b283b", focusRing: "#8b283b",
      cardTop: "#fffdfb", cardFrom: "#fff7ec", cardMid: "#f9dfc3", cardTo: "#ecbac1",
      cardBackGlow: "#bc765d", cardBackFrom: "#8b283b", cardBackMid: "#6a1c32", cardBackTo: "#381520", cardBackText: "#fff7ec",
      textTitle: "#6a1c32", textStrong: "#381520", textBody: "#633442", textSoft: "#633442", textDate: "#8b283b",
      buttonFrom: "#8b283b", buttonTo: "#6a1c32", buttonText: "#ffffff",
      flower1: "#f9dfc3", flower2: "#ecbac1", flower3: "#fff7ec", flowerCenter: "#bc765d",
      heroText: "#ffffff", heroEyebrow: "#f9dfc3", heroWeds: "#ecbac1", heroTagline: "#fff7ec", heroBg: "#381520",
      shadowRgb: "106, 28, 50", lineRgb: "188, 118, 93", overlayRgb: "0, 0, 0", heroShadowRgb: "56, 21, 32",
    },
    petals: [["#fff7ec", "#ecbac1"], ["#f9dfc3", "#bc765d"], ["#fffdfb", "#f9dfc3"], ["#ecbac1", "#8b283b"]],
  },
  twilightMauve: {
    label: "Twilight Mauve",
    colors: {
      bgBase: "#f8f5fc", bgGlowA: "#e8def3", bgGlowB: "#d9bfd1", pageText: "#302436",
      accent: "#9d719a", accentDark: "#704969", focusRing: "#704969",
      cardTop: "#fffdfb", cardFrom: "#f8f5fc", cardMid: "#e8def3", cardTo: "#d9bfd1",
      cardBackGlow: "#9d719a", cardBackFrom: "#704969", cardBackMid: "#583552", cardBackTo: "#302436", cardBackText: "#f8f5fc",
      textTitle: "#583552", textStrong: "#302436", textBody: "#57445c", textSoft: "#57445c", textDate: "#704969",
      buttonFrom: "#704969", buttonTo: "#583552", buttonText: "#ffffff",
      flower1: "#e8def3", flower2: "#d9bfd1", flower3: "#f8f5fc", flowerCenter: "#9d719a",
      heroText: "#ffffff", heroEyebrow: "#e8def3", heroWeds: "#d9bfd1", heroTagline: "#f8f5fc", heroBg: "#302436",
      shadowRgb: "88, 53, 82", lineRgb: "157, 113, 154", overlayRgb: "0, 0, 0", heroShadowRgb: "48, 36, 54",
    },
    petals: [["#f8f5fc", "#d9bfd1"], ["#e8def3", "#9d719a"], ["#fffdfb", "#e8def3"], ["#d9bfd1", "#704969"]],
  },

  // Two-color palettes
  blushSage: {
    label: "Blush Pink + Sage Green",
    colors: {
      bgBase: "#fff5f7", bgGlowA: "#f5dce3", bgGlowB: "#d7e1cb", pageText: "#273725",
      accent: "#bf758b", accentDark: "#8c3b56", focusRing: "#455b3c",
      cardTop: "#fff5f7", cardFrom: "#f0f4eb", cardMid: "#fff5f7", cardTo: "#f5dce3",
      cardBackGlow: "#70845f", cardBackFrom: "#455b3c", cardBackMid: "#273725", cardBackTo: "#273725", cardBackText: "#fff5f7",
      textTitle: "#8c3b56", textStrong: "#273725", textBody: "#455b3c", textSoft: "#8c3b56", textDate: "#455b3c",
      buttonFrom: "#8c3b56", buttonTo: "#455b3c", buttonText: "#ffffff",
      flower1: "#f5dce3", flower2: "#d7e1cb", flower3: "#fff5f7", flowerCenter: "#bf758b",
      heroText: "#ffffff", heroEyebrow: "#f5dce3", heroWeds: "#d7e1cb", heroTagline: "#fff5f7", heroBg: "#273725",
      shadowRgb: "69, 91, 60", lineRgb: "191, 117, 139", overlayRgb: "0, 0, 0", heroShadowRgb: "39, 55, 37",
    },
    petals: [["#fff5f7", "#bf758b"], ["#f0f4eb", "#70845f"], ["#f5dce3", "#8c3b56"], ["#d7e1cb", "#455b3c"]],
  },
  peachSky: {
    label: "Peach + Sky Blue",
    colors: {
      bgBase: "#fff6ef", bgGlowA: "#ffdfc9", bgGlowB: "#cde5f8", pageText: "#1c3850",
      accent: "#d58b64", accentDark: "#984b2e", focusRing: "#305f88",
      cardTop: "#fff6ef", cardFrom: "#f0f8ff", cardMid: "#fff6ef", cardTo: "#ffdfc9",
      cardBackGlow: "#588ab5", cardBackFrom: "#305f88", cardBackMid: "#1c3850", cardBackTo: "#1c3850", cardBackText: "#fff6ef",
      textTitle: "#984b2e", textStrong: "#1c3850", textBody: "#305f88", textSoft: "#984b2e", textDate: "#305f88",
      buttonFrom: "#984b2e", buttonTo: "#305f88", buttonText: "#ffffff",
      flower1: "#ffdfc9", flower2: "#cde5f8", flower3: "#fff6ef", flowerCenter: "#d58b64",
      heroText: "#ffffff", heroEyebrow: "#ffdfc9", heroWeds: "#cde5f8", heroTagline: "#fff6ef", heroBg: "#1c3850",
      shadowRgb: "48, 95, 136", lineRgb: "213, 139, 100", overlayRgb: "0, 0, 0", heroShadowRgb: "28, 56, 80",
    },
    petals: [["#fff6ef", "#d58b64"], ["#f0f8ff", "#588ab5"], ["#ffdfc9", "#984b2e"], ["#cde5f8", "#305f88"]],
  },
  lilacMint: {
    label: "Lilac + Mint Green",
    colors: {
      bgBase: "#fcf6ff", bgGlowA: "#ead9f6", bgGlowB: "#ccecdf", pageText: "#1a4033",
      accent: "#ab79c3", accentDark: "#75418e", focusRing: "#326854",
      cardTop: "#fcf6ff", cardFrom: "#f0faf5", cardMid: "#fcf6ff", cardTo: "#ead9f6",
      cardBackGlow: "#548c77", cardBackFrom: "#326854", cardBackMid: "#1a4033", cardBackTo: "#1a4033", cardBackText: "#fcf6ff",
      textTitle: "#75418e", textStrong: "#1a4033", textBody: "#326854", textSoft: "#75418e", textDate: "#326854",
      buttonFrom: "#75418e", buttonTo: "#326854", buttonText: "#ffffff",
      flower1: "#ead9f6", flower2: "#ccecdf", flower3: "#fcf6ff", flowerCenter: "#ab79c3",
      heroText: "#ffffff", heroEyebrow: "#ead9f6", heroWeds: "#ccecdf", heroTagline: "#fcf6ff", heroBg: "#1a4033",
      shadowRgb: "50, 104, 84", lineRgb: "171, 121, 195", overlayRgb: "0, 0, 0", heroShadowRgb: "26, 64, 51",
    },
    petals: [["#fcf6ff", "#ab79c3"], ["#f0faf5", "#548c77"], ["#ead9f6", "#75418e"], ["#ccecdf", "#326854"]],
  },
  maroonDustyBlue: {
    label: "Maroon + Dusty Blue",
    colors: {
      bgBase: "#fff4f5", bgGlowA: "#eac6ce", bgGlowB: "#d3e2ee", pageText: "#26394c",
      accent: "#a95d70", accentDark: "#77293e", focusRing: "#425e77",
      cardTop: "#fff4f5", cardFrom: "#f1f6fa", cardMid: "#fff4f5", cardTo: "#eac6ce",
      cardBackGlow: "#6b879f", cardBackFrom: "#425e77", cardBackMid: "#26394c", cardBackTo: "#26394c", cardBackText: "#fff4f5",
      textTitle: "#77293e", textStrong: "#26394c", textBody: "#425e77", textSoft: "#77293e", textDate: "#425e77",
      buttonFrom: "#77293e", buttonTo: "#425e77", buttonText: "#ffffff",
      flower1: "#eac6ce", flower2: "#d3e2ee", flower3: "#fff4f5", flowerCenter: "#a95d70",
      heroText: "#ffffff", heroEyebrow: "#eac6ce", heroWeds: "#d3e2ee", heroTagline: "#fff4f5", heroBg: "#26394c",
      shadowRgb: "66, 94, 119", lineRgb: "169, 93, 112", overlayRgb: "0, 0, 0", heroShadowRgb: "38, 57, 76",
    },
    petals: [["#fff4f5", "#a95d70"], ["#f1f6fa", "#6b879f"], ["#eac6ce", "#77293e"], ["#d3e2ee", "#425e77"]],
  },
  plumRose: {
    label: "Plum + Rose Pink",
    colors: {
      bgBase: "#faf4fc", bgGlowA: "#e8d4ee", bgGlowB: "#f2c9d8", pageText: "#4b2535",
      accent: "#a370af", accentDark: "#723881", focusRing: "#873e58",
      cardTop: "#faf4fc", cardFrom: "#fff3f7", cardMid: "#faf4fc", cardTo: "#e8d4ee",
      cardBackGlow: "#b76683", cardBackFrom: "#873e58", cardBackMid: "#4b2535", cardBackTo: "#4b2535", cardBackText: "#faf4fc",
      textTitle: "#723881", textStrong: "#4b2535", textBody: "#873e58", textSoft: "#723881", textDate: "#873e58",
      buttonFrom: "#723881", buttonTo: "#873e58", buttonText: "#ffffff",
      flower1: "#e8d4ee", flower2: "#f2c9d8", flower3: "#faf4fc", flowerCenter: "#a370af",
      heroText: "#ffffff", heroEyebrow: "#e8d4ee", heroWeds: "#f2c9d8", heroTagline: "#faf4fc", heroBg: "#4b2535",
      shadowRgb: "135, 62, 88", lineRgb: "163, 112, 175", overlayRgb: "0, 0, 0", heroShadowRgb: "75, 37, 53",
    },
    petals: [["#faf4fc", "#a370af"], ["#fff3f7", "#b76683"], ["#e8d4ee", "#723881"], ["#f2c9d8", "#873e58"]],
  },
  emeraldChampagne: {
    label: "Champagne + Emerald Green",
    colors: {
      bgBase: "#fff9ee", bgGlowA: "#f4e3be", bgGlowB: "#cce8d7", pageText: "#173d30",
      accent: "#bc9051", accentDark: "#825520", focusRing: "#2a654e",
      cardTop: "#fff9ee", cardFrom: "#f1faf5", cardMid: "#fff9ee", cardTo: "#f4e3be",
      cardBackGlow: "#518a72", cardBackFrom: "#2a654e", cardBackMid: "#173d30", cardBackTo: "#173d30", cardBackText: "#fff9ee",
      textTitle: "#825520", textStrong: "#173d30", textBody: "#2a654e", textSoft: "#825520", textDate: "#2a654e",
      buttonFrom: "#825520", buttonTo: "#2a654e", buttonText: "#ffffff",
      flower1: "#f4e3be", flower2: "#cce8d7", flower3: "#fff9ee", flowerCenter: "#bc9051",
      heroText: "#ffffff", heroEyebrow: "#f4e3be", heroWeds: "#cce8d7", heroTagline: "#fff9ee", heroBg: "#173d30",
      shadowRgb: "42, 101, 78", lineRgb: "188, 144, 81", overlayRgb: "0, 0, 0", heroShadowRgb: "23, 61, 48",
    },
    petals: [["#fff9ee", "#bc9051"], ["#f1faf5", "#518a72"], ["#f4e3be", "#825520"], ["#cce8d7", "#2a654e"]],
  },
  skyCobalt: {
    label: "Sky Blue + Cobalt Blue",
    colors: {
      bgBase: "#f1faff", bgGlowA: "#c6eaff", bgGlowB: "#d5dfff", pageText: "#152b61",
      accent: "#2b59c5", accentDark: "#2146a6", focusRing: "#2146a6",
      cardTop: "#f7fcff", cardFrom: "#eaf7ff", cardMid: "#d5efff", cardTo: "#b9d5ff",
      cardBackGlow: "#4d83e2", cardBackFrom: "#2b59c5", cardBackMid: "#2146a6", cardBackTo: "#152b61", cardBackText: "#f1faff",
      textTitle: "#2146a6", textStrong: "#152b61", textBody: "#294878", textSoft: "#31588e", textDate: "#2146a6",
      buttonFrom: "#2b59c5", buttonTo: "#2146a6", buttonText: "#ffffff",
      flower1: "#c6eaff", flower2: "#87ccf8", flower3: "#d5dfff", flowerCenter: "#2b59c5",
      heroText: "#ffffff", heroEyebrow: "#c6eaff", heroWeds: "#a7ddff", heroTagline: "#f1faff", heroBg: "#152b61",
      shadowRgb: "33, 70, 166", lineRgb: "43, 89, 197", overlayRgb: "0, 0, 0", heroShadowRgb: "21, 43, 97",
    },
    petals: [["#f1faff", "#87ccf8"], ["#c6eaff", "#4d83e2"], ["#d5dfff", "#2b59c5"], ["#a7ddff", "#3676d7"]],
  },
} satisfies Record<ThemeName, ThemePreset>;

// what the rest of the website reads (don't edit)
export const theme: ThemeColors = themes[activeTheme].colors;
export const petalGradients = themes[activeTheme].petals;
