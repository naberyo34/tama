import { Metadata } from 'next'
import HeaderContainer from './_containers/HeaderContainer'

export const metadata: Metadata = {
  title: 'tama',
}

export default function Home() {
  return (
    <main>
      <HeaderContainer />
    </main>
  )
}
