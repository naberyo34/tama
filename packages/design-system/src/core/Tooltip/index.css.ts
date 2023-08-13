import { fadeIn, fadeOut, vars } from '../../theme.css'
import { style } from '@vanilla-extract/css'

export const tooltipContent = style({ 
  position: 'relative',
  top: 4,
  padding: 8,
  fontSize: 12,
  color: vars.color.bg,
  backgroundColor: vars.color.text,
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
