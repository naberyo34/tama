import React from 'react'
import { Pressable } from '@ark-ui/react'
import { button, buttonIcon } from './index.css'
import { ReactComponent as Sun } from './sun.svg'
import { ReactComponent as Moon } from './moon.svg'

/**
 * 標準的なボタンコンポーネント
 * see: https://ark-ui.com/docs/react/components/presence
 * see: https://chakra-ui.com/docs/components/button
 * children は string しか渡せません
 */
export const Button = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  Omit<React.ComponentProps<typeof Pressable>, 'asChild' | 'children'> & {
    children: string
  }
>(({ children, ...props }, forwardedRef) => {
  return (
    <Pressable
      {...props}
      ref={forwardedRef}
      className={`${button()} ${props.className ?? ''}`}
      aria-label={children}
    >
      {children}
    </Pressable>
  )
})

/**
 * でっかいボタンコンポーネント
 * children は string しか渡せません
 */
export const LargeButton = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  Omit<React.ComponentProps<typeof Pressable>, 'asChild' | 'children'> & {
    children: string
  }
>(({ children, ...props }, forwardedRef) => {
  return (
    <Pressable
      {...props}
      ref={forwardedRef}
      className={`${button({ type: 'large' })} ${props.className ?? ''}`}
    >
      {children}
    </Pressable>
  )
})

/**
 * アイコン入りボタンコンポーネント 丸型ボタン
 * children の制限はないが、アイコンを渡すのが望ましい
 */
export const IconButton = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  Omit<React.ComponentProps<typeof Pressable>, 'asChild'>
>(({ children, ...props }, forwardedRef) => {
  return (
    <Pressable
      ref={forwardedRef}
      className={`${button({ type: 'icon' })} ${props.className ?? ''}`}
      {...props}
    >
      {children}
    </Pressable>
  )
})

/**
 * テーマ切り替え用トグルボタン
 * children は渡せず、isDarkMode: boolean を受け取ります
 */
export const ThemeSwitchButton = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  Omit<React.ComponentProps<typeof Pressable>, 'children' | 'asChild' | 'disabled'> & {
    isDarkMode: boolean
  }
>(({ ...props }, forwardedRef) => {
  return (
    <Pressable
      ref={forwardedRef}
      className={`${button({ type: 'icon', theme: 'themeSwitch' })} ${
        props.className ?? ''
      }`}
      {...props}
    >
      {props.isDarkMode ? (
        <Moon className={buttonIcon({ theme: 'themeSwitch' })} />
      ) : (
        <Sun className={buttonIcon({ theme: 'themeSwitch' })} />
      )}
    </Pressable>
  )
})
