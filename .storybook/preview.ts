import type { Preview } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes';
// @ts-expect-error Storybook loads the CSS through its bundler.
import '../src/index.css';

// Xóa toàn bộ phần withStagewise và import liên quan

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      classTarget: 'html',
      darkClass: 'dark',
      lightClass: 'light',
    }
  },
  decorators:[
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light'
    })
  ]
};

export default preview;