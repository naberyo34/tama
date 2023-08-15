import '@tama/design-system/css'
import HeaderContainer from './_containers/HeaderContainer'
import { article, body } from './layout.css'

// TODO: 初期テーマは 本体設定に準ずる、localStorageに記憶する
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="vfcsiw0">
      <head>
        {/* MEMO: ダークモード時のチラつきを防ぐために意図的にレンダリングブロックを許容している */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="./themeDetection.js" />
      </head>
      <body className={body}>
        <main>
          <HeaderContainer />
          <article className={article}>{children}</article>
        </main>
      </body>
    </html>
  )
}
