import type { Meta, StoryObj } from '@storybook/react'
import { Button, LargeButton } from './index'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>;

export const Normal: Story = {
  render: () => <Button />
}

export const Large: Story = {
  render: () => <LargeButton />
}
