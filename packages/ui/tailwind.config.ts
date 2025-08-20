import type { Config } from "tailwindcss";
import { tokens } from "../tokens/src/index";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class", "[data-theme='dark']"],
  content: ["./src/**/*.{ts,tsx}", "./.storybook/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Legacy colors for backward compatibility
        primary: tokens.colors["mid-blue"],
        gray: tokens.colors["mid-grey"],
        danger: tokens.colors.red,
        surface: tokens.colors.bg.surface,
        muted: tokens.colors.bg.muted,
        fg: tokens.colors.fg.default,

        // CareSuper Brand Colors
        "radiant-green": tokens.colors["radiant-green"],
        "fresh-mint": tokens.colors["fresh-mint"],
        "mid-blue": tokens.colors["mid-blue"],
        "inky-blue": tokens.colors["inky-blue"],
        "sunny-yellow": tokens.colors["sunny-yellow"],
        "sky-blue": tokens.colors["sky-blue"],

        // Secondary Colors
        "mid-green": tokens.colors["mid-green"],
        "dark-green": tokens.colors["dark-green"],
        "dark-mint": tokens.colors["dark-mint"],
        "light-grey": tokens.colors["light-grey"],
        "mid-grey": tokens.colors["mid-grey"],
        "cool-grey": tokens.colors["cool-grey"],
        "dark-grey": tokens.colors["dark-grey"],
        charcoal: tokens.colors.charcoal,

        // Tertiary Colors
        purple: tokens.colors.purple,
        red: tokens.colors.red,
        pink: tokens.colors.pink,

        // Tints
        tints: tokens.colors.tints,
      },
      backgroundImage: {
        // CareSuper Gradients
        "gradient-fresh-to-radiant": tokens.colors.gradients["primary-fresh-to-radiant"],
        "gradient-fresh-to-sky": tokens.colors.gradients["secondary-fresh-to-sky"],
        "gradient-sky-to-blue": tokens.colors.gradients["secondary-sky-to-blue"],
        "gradient-purple-to-blue": tokens.colors.gradients["secondary-purple-to-blue"],
      },
      spacing: tokens.spacing as unknown as Record<string, string>,
      borderRadius: tokens.radius as unknown as Record<string, string>,
      boxShadow: tokens.elevation as unknown as Record<string, string>,
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        "brand-bold": tokens.typography.fontFamily["brand-bold"],
        "brand-medium": tokens.typography.fontFamily["brand-medium"],
        "brand-book": tokens.typography.fontFamily["brand-book"],
        "brand-fallback": tokens.typography.fontFamily["brand-fallback"],
      },
      fontWeight: {
        ...tokens.typography.fontWeight,
      },
      letterSpacing: {
        ...tokens.typography.letterSpacing,
      },
      fontSize: tokens.typography.fontSize as unknown as Record<string, [string, { lineHeight: string }]>,
      animation: {
        shimmer: "shimmer 2s infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [forms, typography],
} satisfies Config;
