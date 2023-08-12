import ThemeSwitchButtonContainer from './ThemeSwitchButtonContainer'
import { header, title } from './index.css'

export default function HeaderContainer() {
  return (
    <header className={header}>
      <h1 className={title}>tama</h1>
      <ThemeSwitchButtonContainer />
    </header>
  )
}
