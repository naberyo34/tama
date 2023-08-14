import {
  Popover as ArkPopover,
  PopoverContent,
  PopoverPositioner,
  PopoverTrigger,
} from '@ark-ui/react'
import React from 'react'
import { popoverContent, popoverTrigger } from './index.css'

export const Popover = ({
  children,
  ...props
}: React.PropsWithChildren<{
  className?: string
  content: React.ReactNode
}>) => {
  return (
    <ArkPopover positioning={{ placement: 'left' }}>
      <PopoverTrigger asChild>
        <span className={`${popoverTrigger} ${props.className ?? ''}`}>
          {children}
        </span>
      </PopoverTrigger>
      <PopoverPositioner>
        <PopoverContent className={popoverContent}>
          {props.content}
        </PopoverContent>
      </PopoverPositioner>
    </ArkPopover>
  )
}
