import { style } from '@vanilla-extract/css'
import { fadeIn, fadeOut } from '../../theme.css'

export const popoverTrigger = style({
  display: 'inline-block',
})

export const popoverContent = style({
  selectors: {
    '&[data-state=closed]': {
      animation: `${fadeOut} 0.1s`,
    },
    '&[data-state=open]': {
      animation: `${fadeIn} 0.1s`,
    },
  },
})
