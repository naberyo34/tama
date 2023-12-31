'use client'

import { IconButton, Tooltip, Popover } from '@tama/design-system'
import { useAtom } from 'jotai'
import { searchQueryAtom } from '../../../_states/searchQueryAtom'
import { searchInput } from './index.css'
import Search from './search.svg'

/**
 * 検索窓を表示
 */
export default function SearchContainer() {
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom)

  return (
    <Popover
      content={
        <input
          className={searchInput}
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
          }}
        />
      }
    >
      <Tooltip content="検索">
        <IconButton aria-label="検索">
          <Search />
        </IconButton>
      </Tooltip>
    </Popover>
  )
}
