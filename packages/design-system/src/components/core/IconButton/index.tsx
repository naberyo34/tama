import { Pressable } from '@ark-ui/react'
import React from 'react'
import { ReactComponent as Moon } from './moon.svg'
import { ReactComponent as Sun } from './sun.svg'

/**
 * アイコン入りボタンコンポーネント 丸型ボタン
 * children の制限はないが、アイコンsvgを渡すのが望ましい
 */
export const IconButton = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  Omit<React.ComponentProps<typeof Pressable>, 'asChild' | 'children'> & {
    children: React.ReactElement
  }
>(({ children, ...props }, forwardedRef) => {
  const childrenWithStyles = React.cloneElement(children)
  return (
    <Pressable
      {...props}
      ref={forwardedRef}
    >
      {childrenWithStyles}
    </Pressable>
  )
})

/**
 * テーマ切り替え用トグルボタン
 * children は渡せず、isDarkMode: boolean を受け取ります
 */
export const ThemeSwitchButton = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  Omit<
    React.ComponentProps<typeof Pressable>,
    'children' | 'asChild' | 'disabled'
  > & {
    isDarkMode: boolean
  }
>(({ isDarkMode, ...props }, forwardedRef) => (
  <Pressable
    {...props}
    ref={forwardedRef}
    aria-label="テーマ切り替え"
  >
    {isDarkMode ? (
      <Moon />
    ) : (
      <Sun />
    )}
  </Pressable>
))
