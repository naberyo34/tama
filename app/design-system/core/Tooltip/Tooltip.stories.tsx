import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'

const meta: Meta<typeof Tooltip.Root> = {
  component: Tooltip.Root,
  render: () => {
    return (
      <Tooltip.Root>
        <Tooltip.Trigger>ホバーしてね</Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Content>ツールチップだよ</Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.Root>
    )
  },
}
export default meta
type Story = StoryObj<typeof Tooltip.Root>

export const Default: Story = {}
