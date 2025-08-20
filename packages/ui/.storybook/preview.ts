import type { Preview, Decorator } from "@storybook/react";
import "../src/styles/tailwind.css";
import { cssVariables } from "@org/tokens";

export const globalTypes = {
  theme: {
    name: "Theme",
    toolbar: { icon: "mirror", items: ["light", "dark"] },
  },
};

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    a11y: { manual: false }
  },
};

export default preview;

// Inject: Insert Adobe Fonts and tokens.cssVariables
const injectAdobeFonts = () => {
  const linkId = "adobe-fonts-link";
  if (!document.getElementById(linkId)) {
    const link = document.createElement("link");
    link.id = linkId;
    link.rel = "stylesheet";
    link.href = "https://use.typekit.net/pxw6mfp.css";
    document.head.appendChild(link);
  }
};

const injectCSSVariables = () => {
  const styleTagId = "design-tokens-css-variables";
  if (!document.getElementById(styleTagId)) {
    const style = document.createElement("style");
    style.id = styleTagId;
    style.textContent = cssVariables;
    document.head.appendChild(style);
  }
};

if (typeof window !== "undefined") {
  injectAdobeFonts();
  injectCSSVariables();
}

// Theme switching (light/dark)
export const decorators: Decorator[] = [
  (Story, context) => {
    const theme = context.globals.theme as string | undefined;
    const root = document.documentElement;
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    return Story();
  },
];
