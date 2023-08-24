'use client'

import {
  ThemeSwitchButton,
  Tooltip,
  darkTheme,
  lightTheme,
} from '@tama/design-system'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { themeSwitchButtonContainer } from './index.css'

/**
 * ダークモード切り替え機能
 *
 */
export default function ThemeSwitchButtonContainer({
  isDarkModeCookie,
}: {
  isDarkModeCookie: string | undefined
}) {
  const isDarkModeCookieBool = isDarkModeCookie === 'true'
  // 上記の値はCookieを再取得するまで変わらないため、クライアントサイドでも状態を持つ
  const [isDarkModeState, setDarkModeState] = useState(isDarkModeCookieBool)
  const onClick = () => {
    Cookies.set('isDarkMode', (!isDarkModeState).toString())
    document.getElementsByTagName('html')[0].classList.toggle(darkTheme)
    document.getElementsByTagName('html')[0].classList.toggle(lightTheme)
    setDarkModeState(!isDarkModeState)
  }

  // Cookieが保存されていない場合(初回アクセス時のみ)、本体設定のテーマで初期化
  useEffect(() => {
    if (isDarkModeCookie === undefined) {
      const isDarkModeUserSettings = matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      Cookies.set('isDarkMode', isDarkModeUserSettings.toString())
      // 本体設定がダークモードだった場合はDOMを更新
      if (isDarkModeUserSettings) {
        document.getElementsByTagName('html')[0].classList.add(darkTheme)
        document.getElementsByTagName('html')[0].classList.remove(lightTheme)
        setDarkModeState(isDarkModeUserSettings)
      }
    }
  }, [isDarkModeCookie])

  return (
    <Tooltip content="テーマ切り替え" className={themeSwitchButtonContainer}>
      <ThemeSwitchButton isDarkMode={isDarkModeState} onClick={onClick} />
    </Tooltip>
  )
}
