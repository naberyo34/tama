import Link from 'next/link'
import SearchContainer from './SearchContainer'
import ThemeSwitchButtonContainer from './ThemeSwitchButtonContainer'
import { header, link, title } from './index.css'

export default function HeaderContainer() {
  return (
    <header className={header}>
      <Link href="/" className={link}>
        <h1 className={title}>tama</h1>
      </Link>
      <nav>
        <SearchContainer />
        <ThemeSwitchButtonContainer />
      </nav>
    </header>
  )
}
