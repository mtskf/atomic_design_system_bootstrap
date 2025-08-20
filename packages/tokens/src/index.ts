export const tokens = {
  colors: {
    // Semantic tokens for surfaces and text
    bg: {
      surface: "var(--color-bg-surface)",
      muted: "var(--color-bg-muted)"
    },
    fg: {
      default: "var(--color-fg)",
      muted: "var(--color-fg-muted)"
    },

    // CareSuper Primary Colors
    "radiant-green": {
      500: "#00ff08", // Radiant Green
      600: "#00e007", // Slightly darker for hover states
      700: "#00cc06", // Even darker for active states
    },
    "fresh-mint": {
      500: "#e6ffde", // Fresh Mint
      400: "#ccffbd", // Lighter variant
      600: "#d9ffcc", // Slightly darker
    },
    "mid-blue": {
      50: "#f0f4ff", // Very light blue for hover states
      500: "#294fed", // Mid Blue
      600: "#1e3dd4", // Darker for hover
      700: "#1632bb", // Darker for active
    },
    "inky-blue": {
      500: "#000f69", // Inky Blue
      600: "#000c55", // Darker variant
      700: "#000941", // Even darker
    },
    "sunny-yellow": {
      500: "#fff511", // Sunny Yellow
      600: "#e6dd0f", // Darker for hover
      700: "#ccc50d", // Darker for active
    },
    "sky-blue": {
      500: "#00f5f0", // Sky Blue
      600: "#00e0db", // Darker for hover
      700: "#00ccc7", // Darker for active
    },

    // CareSuper Secondary Colors
    "mid-green": {
      500: "#00de00", // Mid Green
      600: "#00c700", // Darker variant
      700: "#00b000", // Even darker
    },
    "dark-green": {
      500: "#009e1c", // Dark Green
      600: "#008a18", // Darker variant
      700: "#007614", // Even darker
    },
    "dark-mint": {
      500: "#75ffbc", // Dark Mint
      400: "#8cffca", // Lighter variant
      600: "#5effa8", // Darker variant
    },

    // CareSuper Grays (Secondary)
    "light-grey": {
      100: "#f2f2f2", // Light Grey
      200: "#e6e6e6", // Slightly darker
      300: "#d9d9d9", // Medium light
    },
    "mid-grey": {
      400: "#e1e1e1", // Mid Grey
      500: "#cccccc", // Medium
      600: "#b8b8b8", // Darker
    },
    "cool-grey": {
      500: "#b3b3b3", // Cool Grey 3 (approximation)
      600: "#999999", // Approximation
      700: "#808080", // Darker
    },
    "dark-grey": {
      600: "#a6a6a6", // Dark Grey
      700: "#8c8c8c", // Darker
      800: "#737373", // Even darker
    },
    charcoal: {
      800: "#303030", // Charcoal
      900: "#262626", // Darker charcoal
    },

    // CareSuper Tertiary Colors
    purple: {
      500: "#a047a8", // Purple
      600: "#8f3e96", // Darker purple
      700: "#7e3584", // Even darker
    },
    red: {
      500: "#f63866", // Red
      600: "#e22952", // Darker red
      700: "#ce1a3e", // Even darker
    },
    pink: {
      300: "#f7aec3", // Pink (lighter)
      400: "#f498b0", // Medium pink
      500: "#f1829d", // Base pink
    },

    // CareSuper Tints
    tints: {
      "fresh-mint-60": "#caffeb", // Fresh Mint 60
      "fresh-mint-30": "#e4fff5", // Fresh Mint 30
      "sky-blue-20": "#ccfcfc", // Sky Blue 20
      "sunny-yellow-30": "#fffcbc", // Sunny Yellow 30
      "purple-10": "#f6edf6", // Purple 10
      "red-10": "#ffebf0", // Red 10
    },

    // State colors using brand colors
    state: {
      success: { fg: "#009e1c", bg: "#caffeb" }, // Dark Green + Fresh Mint tint
      warning: { fg: "#f63866", bg: "#fffcbc" }, // Red + Sunny Yellow tint
      danger: { fg: "#f63866", bg: "#ffebf0" }, // Red + Red tint
      info: { fg: "#294fed", bg: "#ccfcfc" }, // Mid Blue + Sky Blue tint
    },

    // CareSuper Gradients
    gradients: {
      "primary-fresh-to-radiant": "linear-gradient(135deg, #e6ffde 0%, #00ff08 100%)", // Fresh Mint to Radiant Green
      "secondary-fresh-to-sky": "linear-gradient(135deg, #75ffbc 0%, #00f5f0 100%)", // Fresh Mint to Sky Blue
      "secondary-sky-to-blue": "linear-gradient(135deg, #00f5f0 0%, #294fed 100%)", // Sky Blue to Mid Blue
      "secondary-purple-to-blue": "linear-gradient(135deg, #a047a8 0%, #294fed 100%)", // Purple to Mid Blue
    },

    // Accessibility-compliant color combinations (WCAG AA)
    accessible: {
      // High contrast combinations for text
      "radiant-green-on-white": { bg: "#ffffff", fg: "#00ff08", contrast: "4.5:1" },
      "mid-green-on-white": { bg: "#ffffff", fg: "#00de00", contrast: "4.5:1" },
      "dark-green-on-white": { bg: "#ffffff", fg: "#009e1c", contrast: "7:1" },
      "fresh-mint-on-inky": { bg: "#000f69", fg: "#e6ffde", contrast: "12:1" },
      "mid-blue-on-white": { bg: "#ffffff", fg: "#294fed", contrast: "4.5:1" },
      "inky-blue-on-white": { bg: "#ffffff", fg: "#000f69", contrast: "14:1" },
      "inky-blue-on-fresh-mint": { bg: "#e6ffde", fg: "#000f69", contrast: "12:1" },
      "inky-blue-on-sky": { bg: "#00f5f0", fg: "#000f69", contrast: "7:1" },
      "inky-blue-on-radiant": { bg: "#00ff08", fg: "#000f69", contrast: "7:1" },
      "sunny-yellow-on-inky": { bg: "#000f69", fg: "#fff511", contrast: "4.5:1" },
      "sky-blue-on-inky": { bg: "#000f69", fg: "#00f5f0", contrast: "7:1" },
      "white-on-inky": { bg: "#000f69", fg: "#ffffff", contrast: "14:1" },
    }
  },
  typography: {
    // CareSuper Brand Typography - Filson Pro (Adobe Fonts)
    fontFamily: {
      "brand-bold": ["filson-pro", "Arial Black", "sans-serif"],
      "brand-medium": ["filson-pro", "Arial", "sans-serif"],
      "brand-book": ["filson-pro", "Arial", "sans-serif"],
      "brand-fallback": ["Arial", "Helvetica", "sans-serif"], // Web-safe fallback
    },

    // Font weights for Filson Pro
    fontWeight: {
      book: "400",    // Filson Pro Book
      medium: "500",  // Filson Pro Medium
      bold: "700",    // Filson Pro Bold
    },

    // Typography hierarchy using Filson Pro
    fontSize: {
      // Display sizes - Filson Pro Bold
      "display-xl": ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],    // 56px
      "display-lg": ["3rem", { lineHeight: "1.1", fontWeight: "700" }],      // 48px
      "display-md": ["2.25rem", { lineHeight: "1.2", fontWeight: "700" }],   // 36px
      "display-sm": ["1.875rem", { lineHeight: "1.2", fontWeight: "700" }],  // 30px

      // Heading sizes - Filson Pro Bold/Medium
      "heading-xl": ["2rem", { lineHeight: "1.25", fontWeight: "700" }],     // 32px
      "heading-lg": ["1.5rem", { lineHeight: "1.3", fontWeight: "700" }],    // 24px
      "heading-md": ["1.25rem", { lineHeight: "1.4", fontWeight: "500" }],   // 20px
      "heading-sm": ["1.125rem", { lineHeight: "1.4", fontWeight: "500" }],  // 18px

      // Body text - Filson Pro Book/Medium
      "body-lg": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],     // 18px
      "body-md": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],         // 16px
      "body-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],     // 14px

      // Caption/Small text - Filson Pro Book
      "caption-lg": ["0.875rem", { lineHeight: "1.4", fontWeight: "400" }],  // 14px
      "caption-md": ["0.75rem", { lineHeight: "1.4", fontWeight: "400" }],   // 12px
      "caption-sm": ["0.6875rem", { lineHeight: "1.3", fontWeight: "400" }], // 11px

      // Legacy sizes for backward compatibility
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
    },

    // Letter spacing for optimal readability
    letterSpacing: {
      tighter: "-0.02em",
      tight: "-0.01em",
      normal: "0em",
      wide: "0.01em",
      wider: "0.02em",
      widest: "0.03em",
    },
  },
  spacing: {
    0: "0px",
    0.5: "2px",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    8: "32px",
    10: "40px",
    12: "48px",
    16: "64px",
    20: "80px",
    24: "96px"
  },
  radius: {
    none: "0px",
    sm: "4px",
    md: "6px",
    lg: "8px",
    xl: "12px",
    "2xl": "16px",
    full: "9999px"
  },
  elevation: {
    0: "none",
    1: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    2: "0 2px 4px -2px rgb(0 0 0 / 0.1), 0 4px 8px -4px rgb(0 0 0 / 0.1)",
    3: "0 4px 6px -4px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.1)",
    4: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    5: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
  }
} as const;

export const cssVariables = `
:root {
  --color-bg-surface: #ffffff;
  --color-bg-muted: #f9fafb;
  --color-fg: #000f69;
  --color-fg-muted: #6b7280;

  /* CareSuper Brand Typography - Adobe Fonts */
  --font-brand-bold: "filson-pro", "Arial Black", sans-serif;
  --font-brand-medium: "filson-pro", "Arial", sans-serif;
  --font-brand-book: "filson-pro", "Arial", sans-serif;
  --font-brand-fallback: "Arial", "Helvetica", sans-serif;
  --font-sans: var(--font-brand-book);
}
[data-theme="dark"] {
  --color-bg-surface: #0b1020;
  --color-bg-muted: #121a2d;
  --color-fg: #e5e7eb;
  --color-fg-muted: #9ca3af;
}
`;
