import React from 'react'
import { Pressable } from '@ark-ui/react'
import { button } from './index.css'

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
      ref={forwardedRef}
      className={button()}
      {...props}
      aria-label={children}
    >
      {children}
    </Pressable>
  )
})

/**
 * でっかいボタンコンポーネント
 * see: https://ark-ui.com/docs/react/components/presence
 * see: https://chakra-ui.com/docs/components/button
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
      ref={forwardedRef}
      className={button({ size: 'large' })}
      {...props}
    >
      {children}
    </Pressable>
  )
})
