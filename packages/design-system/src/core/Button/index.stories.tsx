import type { Meta, StoryObj } from '@storybook/react'
import { Button, LargeButton } from './index'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'ボタン',
  },
  render: (args) => <Button {...args} />,
}

export const Large: Story = {
  args: {
    children: 'ボタン',
  },
  render: (args) => <LargeButton {...args} />,
}
