import { Tooltip as ArkTooltip } from '@ark-ui/react'
import { styled } from '@/styled-system/jsx'

const Root = styled(ArkTooltip.Root)
const Trigger = styled(ArkTooltip.Trigger)
const Positioner = styled(ArkTooltip.Positioner)
const Content = styled(ArkTooltip.Content, {
  base: {
    padding: 'x0_5',
    fontSize: 'sm',
    color: 'white',
    backgroundColor: 'spaceCadet',
    borderRadius: 'sm',
  },
})

/**
 * ツールチップ
 * https://ark-ui.com/docs/components/tooltip
 */
export const Tooltip = { Root, Trigger, Positioner, Content }
