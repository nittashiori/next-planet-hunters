import type { Preview } from "@storybook/react";
import '../src/styles/destyle.css'
import "../src/styles/globals.css";
import "../src/styles/variables.css";
import "@fontsource/exo";
import "@fontsource/noto-sans-jp";
import "@fontsource/noto-sans-jp/700.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
