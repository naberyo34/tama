import React from 'react'
import { cardGrid } from './index.css'

export const CardGrid = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentProps<'div'>
>(({ children, ...props }, forwardedRef) => (
  <div {...props} ref={forwardedRef} className={`${cardGrid} ${props.className ?? ''}`}>
    {children}
  </div>
))
