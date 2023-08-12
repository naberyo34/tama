import React, { useState } from 'react'
import type { Preview } from '@storybook/react'
import { ThemeSwitchButton } from '../src/core/Button'
import { lightTheme, darkTheme } from '../src/theme.css'
import { previewWrapper } from './preview.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
      const [isDarkMode, setDarkMode] = useState(false)
      return (
        <main className={isDarkMode ? darkTheme : lightTheme}>
          <ThemeSwitchButton
            isDarkMode={isDarkMode}
            onClick={() => {
              setDarkMode(!isDarkMode)
            }}
          />
          <div className={previewWrapper}>
            <Story />
          </div>
        </main>
      )
    },
  ],
}

export default preview
