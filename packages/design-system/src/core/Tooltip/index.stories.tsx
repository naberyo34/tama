import { ThemeSwitchButton } from '../Button'
import { Tooltip } from './index'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: {
    content: 'テーマ切り替え',
  },
  render: (args) => (
    <Tooltip {...args}>
      <ThemeSwitchButton isDarkMode={false} />
    </Tooltip>
  ),
}
