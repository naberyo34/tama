import { ReactComponent as Search } from './search.svg'
import { Button, LargeButton, IconButton, ThemeSwitchButton } from './index'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>
type IconButtonStory = StoryObj<typeof IconButton>
type ThemeSwitchButtonStory = StoryObj<typeof ThemeSwitchButton>

export const Default: Story = {
  args: {
    children: 'ボタン',
  },
  render: (args) => <Button {...args} />,
}

export const Large: Story = {
  args: {
    children: 'でっかいボタン',
  },
  render: (args) => <LargeButton {...args} />,
}

export const Icon: IconButtonStory = {
  args: {
    children: <Search />,
  },
  render: (args) => <IconButton {...args} />,
}

export const ThemeSwitch: ThemeSwitchButtonStory = {
  args: {
    isDarkMode: false,
  },
  render: (args) => <ThemeSwitchButton {...args} />,
}
