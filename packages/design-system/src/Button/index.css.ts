import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'

export const button = recipe({
  base: {
    borderRadius: 6,
  },
  variants: {
    size: {
      small: { padding: 12, fontSize: 12 },
      medium: { padding: 16, fontSize: 16 },
      large: { padding: 24, fontSize: 24 },
    },
    color: {
      neutral: { color: vars.color.primary, backgroundColor: vars.bg.primary },
    },
  },
  defaultVariants: {
    size: 'medium',
    color: 'neutral',
  },
})
