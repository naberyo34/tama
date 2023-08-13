'use client'

import { IconButton, Tooltip } from '@tama/design-system'
import Search from './search.svg'

/**
 * 検索窓を表示
 */
export default function SearchButtonContainer() {
  const onClick = () => {}
  return (
    <Tooltip content="検索">
      <IconButton onClick={onClick} aria-label="検索">
        <Search />
      </IconButton>
    </Tooltip>
  )
}
