import React from 'react'
import { Pressable } from '@ark-ui/react'
import { button } from './index.css'

/**
 * 標準的なボタンコンポーネント
 * children には テキストのラベルを渡すことを想定している 
 */
export const Button = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  React.ComponentProps<typeof Pressable>
>((props, forwardedRef) => {
  return (
    <Pressable ref={forwardedRef} className={button()} {...props}>
      <>{props.children}</>
    </Pressable>
  )
})

/**
 * でっかいボタンコンポーネント
 * children には テキストのラベルを渡すことを想定している
 */
export const LargeButton = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  React.ComponentProps<typeof Pressable>
>((props, forwardedRef) => {
  return (
    <Pressable
      ref={forwardedRef}
      className={button({ size: 'large' })}
      {...props}
    >
      <>{props.children}</>
    </Pressable>
  )
})
