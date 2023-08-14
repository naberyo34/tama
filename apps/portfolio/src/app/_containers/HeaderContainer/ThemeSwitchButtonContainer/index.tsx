'use client'

import {
  ThemeSwitchButton,
  Tooltip,
  lightTheme,
  darkTheme,
} from '@tama/design-system'
import { useAtom } from 'jotai'
import { useCallback } from 'react'
import { darkModeAtom } from '../../../_states/darkModeAtom'
import { themeSwitchButtonContainer } from './index.css'

/**
 * ダークモード切り替え機能
 */
export default function ThemeSwitchButtonContainer() {
  const [isDarkMode, setDarkMode] = useAtom(darkModeAtom)
  const onClick = useCallback(() => {
    setDarkMode(!isDarkMode)
    document.getElementsByTagName('html')[0].classList.toggle(darkTheme)
    document.getElementsByTagName('html')[0].classList.toggle(lightTheme)
  }, [isDarkMode, setDarkMode])

  return (
    <Tooltip content="テーマ切り替え" className={themeSwitchButtonContainer}>
      <ThemeSwitchButton isDarkMode={isDarkMode} onClick={onClick} />
    </Tooltip>
  )
}
