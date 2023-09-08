import { Card } from './index'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Card> = {
  component: Card,
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    title: 'タイトルタイトルタイトルタイトル',
    description: '説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明',
    updatedAt: '2023.01.01',
  },
  render: (args) => <Card {...args} />,
}
