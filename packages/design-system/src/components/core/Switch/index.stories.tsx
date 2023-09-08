import { LargeSwitch, Switch } from './index'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Switch> = {
  component: Switch,
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    label: 'スイッチ',
  },
  render: (args) => <Switch {...args} />,
}

export const Large: Story = {
  args: {
    label: 'でっかいスイッチ',
  },
  render: (args) => <LargeSwitch {...args} />,
}
