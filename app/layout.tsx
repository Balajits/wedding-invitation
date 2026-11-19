import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { Cormorant_Garamond, Great_Vibes, Jost } from "next/font/google";
import { themeCssVars } from "@/theme/cssVars";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
});
const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});
const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Balaji & Harsa | Wedding Invitation",
  description: "Our forever begins. Join us in celebrating our wedding.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // all colours from theme/colors.ts become CSS variables here
    <html lang="en" style={themeCssVars as CSSProperties}>
      <body className={`${display.variable} ${script.variable} ${body.variable}`}>
        {children}
      </body>
    </html>
  );
}
