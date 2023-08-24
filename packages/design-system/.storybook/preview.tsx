import React, { useState } from 'react'
import type { Preview } from '@storybook/react'
import '../src/global.css'
import { lightTheme, darkTheme } from '../src/theme.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light'
    }
  },
  decorators: [
    (Story, StoryContext) => {
      const isDarkMode = StoryContext.globals.backgrounds?.value === '#333333'
      return (
        <main className={isDarkMode ? darkTheme : lightTheme}>
          <Story />
        </main>
      )
    },
  ],
}

export default preview
