import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../theme.css'

// switch 予約語だった
export const switchComponent = recipe({
  base: {
    color: vars.color.primary,
    backgroundColor: vars.bg.primary,
    borderRadius: 6,
    selectors: {
      '&[data-disabled]': {
        opacity: 0.5,
      },
    },
  },
  variants: {
    size: {
      small: { padding: 12, fontSize: 12 },
      medium: { padding: 16, fontSize: 16 },
      large: { padding: 24, fontSize: 24 },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})
