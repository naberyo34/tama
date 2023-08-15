import { Card } from '../../core/Card'
import { CardGrid } from './index'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CardGrid> = {
  component: CardGrid,
}

export default meta
type Story = StoryObj<typeof CardGrid>

export const Default: Story = {
  render: () => (
    <CardGrid>
      <Card
        title="タイトルタイトルタイトルタイトル"
        updatedAt="2023.01.01"
      />
      <Card
        title="タイトル"
        updatedAt="2023.01.01"
      />
      <Card
        title="タイトルタイトルタイトルタイトル"
        description="説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明"
        updatedAt="2023.01.01"
      />
      <Card
        title="タイトル"
        description="説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明"
        updatedAt="2023.01.01"
      />
      <Card
        title="タイトル"
        description="説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明"
        updatedAt="2023.01.01"
      />
      <Card
        title="タイトル"
        description="説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明"
        updatedAt="2023.01.01"
      />
    </CardGrid>
  ),
}
