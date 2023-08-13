import React from 'react'
import {
  Portal,
  Tooltip as ArkTooltip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '@ark-ui/react'
import { tooltipContent } from './index.css'

/**
 * トリガー要素にホバーするとツールチップを表示する
 * see: https://ark-ui.com/docs/react/components/tooltip
 * see: https://chakra-ui.com/docs/components/tooltip
 */
export const Tooltip = ({
  children,
  ...props
}: React.PropsWithChildren<{ content: string }>) => (
  <ArkTooltip openDelay={0} closeDelay={0}>
    <TooltipTrigger asChild>
      <span>{children}</span>
    </TooltipTrigger>
    <Portal>
      <TooltipPositioner>
        <TooltipContent className={tooltipContent}>
          {props.content}
        </TooltipContent>
      </TooltipPositioner>
    </Portal>
  </ArkTooltip>
)
