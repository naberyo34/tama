import React, { useState } from 'react'
import type { Preview } from '@storybook/react'
import { lightThemeClass, darkThemeClass } from '../src/theme.css'

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
      const [isDarkTheme, setDarkTheme] = useState(false)
      return (
        <div
          style={{ position: 'relative' }}
          className={isDarkTheme ? darkThemeClass : lightThemeClass}
        >
          <button
            style={{ position: 'absolute', top: 0, right: 0 }}
            type="button"
            onClick={() => setDarkTheme(!isDarkTheme)}
          >
            {isDarkTheme ? 'dark' : 'light'}
          </button>
          <Story />
        </div>
      )
    },
  ],
}

export default preview
