'use client'

import { darkModeAtom } from '@/app/_states/darkModeAtom'
import { ThemeSwitchButton, lightTheme, darkTheme } from '@tama/design-system'
import { useAtom } from 'jotai'

/**
 * ダークモード切り替え機能
 */
export default function ThemeSwitchButtonContainer() {
  const [isDarkMode, setDarkMode] = useAtom(darkModeAtom)

  const onClick = () => {
    setDarkMode(!isDarkMode)
    document.getElementsByTagName('html')[0].classList.toggle(darkTheme)
    document.getElementsByTagName('html')[0].classList.toggle(lightTheme)
  }

  return <ThemeSwitchButton isDarkMode={isDarkMode} onClick={onClick} />
}
