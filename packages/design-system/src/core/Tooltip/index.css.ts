import { style } from '@vanilla-extract/css'
import { fadeIn, fadeOut, vars } from '../../theme.css'

export const tooltipTrigger = style({
  display: 'inline-block',
})

export const tooltipContent = style({
  padding: 8,
  fontSize: 12,
  color: vars.color.text,
  backgroundColor: vars.color.bg,
  border: `1px solid ${vars.color.text}`,
  borderRadius: 4,
  selectors: {
    '&[data-state=closed]': {
      animation: `${fadeOut} 0.1s`,
    },
    '&[data-state=open]': {
      animation: `${fadeIn} 0.1s`,
    },
  },
})
