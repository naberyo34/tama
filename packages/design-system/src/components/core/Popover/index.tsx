import {
  Popover as ArkPopover,
  PopoverContent,
  PopoverPositioner,
  PopoverTrigger,
} from '@ark-ui/react'
import React from 'react'

export const Popover = ({
  children,
  content,
  ...props
}: React.PropsWithChildren<{
  className?: string
  content: React.ReactNode
}>) => {
  return (
    <ArkPopover {...props} positioning={{ placement: 'left' }}>
      <PopoverTrigger asChild>
        <span>
          {children}
        </span>
      </PopoverTrigger>
      <PopoverPositioner>
        <PopoverContent>
          {content}
        </PopoverContent>
      </PopoverPositioner>
    </ArkPopover>
  )
}
