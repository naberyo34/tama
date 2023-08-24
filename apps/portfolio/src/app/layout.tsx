import { cookies } from 'next/headers'
import '@tama/design-system/css'
import HeaderContainer from './_containers/HeaderContainer'
import { article, body } from './layout.css'

// TODO: 初期テーマは 本体設定に準ずる、localStorageに記憶する
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  // memo: Cookie保存がまだの場合 undefined を返す
  // undefined の場合は ThemeSwitchButton 側で初期化処理を行う
  const isDarkModeCookie = cookieStore.get('isDarkMode')?.value
  // Cookie が undefined の場合、一旦ライトモードとして初期レンダリングを実施
  const isDarkMode = isDarkModeCookie === 'true'
  return (
    <html lang="ja" className={isDarkMode ? 'vfcsiw5' : 'vfcsiw0'}>
      <body className={body}>
        <main>
          <HeaderContainer isDarkModeCookie={isDarkModeCookie} />
          <article className={article}>{children}</article>
        </main>
      </body>
    </html>
  )
}
