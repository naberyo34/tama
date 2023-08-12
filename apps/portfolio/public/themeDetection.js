/**
 * ローカルストレージ、もしくはユーザーの本体設定から初期読み込み時のテーマを決定する
 */
function themeDetection() {
  const lightTheme = 'vfcsiw0'
  const darkTheme = 'vfcsiw7'

  const isDarkThemeLocalStorage = localStorage.getItem('darkMode') === 'true'
  const isDarkThemeUserSettings = matchMedia(
    'prefers-color-scheme: dark'
  ).matches
  const isDarkTheme = isDarkThemeLocalStorage ?? isDarkThemeUserSettings

  document
    .getElementsByTagName('html')[0]
    .classList.add(isDarkTheme ? darkTheme : lightTheme)
  document
    .getElementsByTagName('html')[0]
    .classList.remove(isDarkTheme ? lightTheme : darkTheme)
}

themeDetection()
