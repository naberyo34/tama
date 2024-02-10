import { Tooltip } from '@/design-system/core/Tooltip/Tooltip'
import { css } from '@/styled-system/css'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div>
      <p className={css({ fontSize: 'lg', color: 'spaceCadet' })}>Welcome to Remix</p>
      <Tooltip.Root>
        <Tooltip.Trigger>ホバーしてね</Tooltip.Trigger>
        <Tooltip.Positioner>
          <Tooltip.Content>ツールチップだよ</Tooltip.Content>
        </Tooltip.Positioner>
      </Tooltip.Root>
    </div>
  )
}
