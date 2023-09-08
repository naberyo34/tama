import { IconButton } from '../IconButton'
import { ReactComponent as Search } from '../IconButton/search.svg'
import { Popover } from './index'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Popover> = {
  component: Popover,
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  args: {
    content: 'ポップオーバー',
  },
  render: (args) => (
    <Popover {...args}>
      <IconButton>
        <Search />
      </IconButton>
    </Popover>
  ),
}
