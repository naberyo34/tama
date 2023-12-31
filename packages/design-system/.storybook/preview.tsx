import '../src/index.css'
import React from 'react'
import type { Preview } from '@storybook/react'

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
      default: 'light',
    },
  },
  decorators: [
    (Story, StoryContext) => {
      const isDarkMode = StoryContext.globals.backgrounds?.value === '#333333'
      return (
        <main data-color-mode={isDarkMode ? 'dark' : 'light'}>
          <Story />
        </main>
      )
    },
  ],
}

export default preview
