'use client'

import {
  Button,
  LargeButton,
  lightThemeClass,
  darkThemeClass,
} from '@tama/design-system'
import { useState } from 'react'

export default function Home() {
  const [isDarkTheme, setDarkTheme] = useState(false)
  return (
    <main className={isDarkTheme ? darkThemeClass : lightThemeClass}>
      <Button
        onClick={() => {
          setDarkTheme(!isDarkTheme)
        }}
      >
        ボタン
      </Button>
      <LargeButton>Button</LargeButton>
    </main>
  )
}
