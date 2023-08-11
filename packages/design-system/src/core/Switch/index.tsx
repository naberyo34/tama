import React from 'react'
import {
  Switch as ArkSwitch,
  SwitchInput,
  SwitchControl,
  SwitchThumb,
  SwitchLabel,
} from '@ark-ui/react'
import { switchComponent } from './index.css'

/**
 * 標準的なトグルスイッチコンポーネント
 * see: https://ark-ui.com/docs/react/components/switch
 * see: https://chakra-ui.com/docs/components/switch/usage
 * ラベルはprops.labelとして渡してください
 */
// TODO: 型で怒られるので forwardRefにできていない
export const Switch = (
  props: Omit<React.ComponentProps<typeof ArkSwitch>, 'asChild' | 'children'>
) => (
  <ArkSwitch className={switchComponent()} {...props}>
    <SwitchInput />
    <SwitchControl>
      <SwitchThumb />
    </SwitchControl>
    {props.label && <SwitchLabel>{props.label}</SwitchLabel>}
  </ArkSwitch>
)
