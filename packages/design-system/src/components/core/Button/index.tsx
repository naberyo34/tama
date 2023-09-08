import { Pressable } from '@ark-ui/react'
import { cva, cx } from '@tama/styled-system/css'
import React from 'react'

const buttonRecipe = cva({
  base: {
    padding: '+1',
    color: 'text',
    border: 'default',
    borderRadius: '+1',
  },
})

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
>((props, forwardedRef) => (
  <Pressable
    {...props}
    ref={forwardedRef}
    className={cx(buttonRecipe(), props.className)}
    aria-label={props.children}
  />
))
