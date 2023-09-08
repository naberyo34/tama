import {
  Portal,
  Tooltip as ArkTooltip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '@ark-ui/react'
import React from 'react'

/**
 * トリガー要素にホバーするとツールチップを表示する
 * see: https://ark-ui.com/docs/react/components/tooltip
 * see: https://chakra-ui.com/docs/components/tooltip
 */
export const Tooltip = ({
  children,
  ...props
}: React.PropsWithChildren<{ className?: string; content: string }>) => (
  <ArkTooltip {...props} openDelay={200} closeDelay={200}>
    <TooltipTrigger asChild>
      <span>{children}</span>
    </TooltipTrigger>
    <Portal>
      <TooltipPositioner>
        <TooltipContent>{props.content}</TooltipContent>
      </TooltipPositioner>
    </Portal>
  </ArkTooltip>
)
