import { button } from './index.css'

export function Button(props: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={button()} {...props}>
      button
    </button>
  )
}

export function LargeButton(props: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={button({ size: 'large' })} {...props}>
      button
    </button>
  )
}
