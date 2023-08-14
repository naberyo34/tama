import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../theme.css'

export const button = recipe({
  base: {
    padding: '0.5em 1em',
    color: vars.color.text,
    backgroundColor: vars.color.bg,
    border: `1px solid ${vars.color.text}`,
    borderRadius: 4,
    transition: 'opacity 0.2s',
    cursor: 'pointer',
    selectors: {
      '&:hover': {
        opacity: 0.8,
      },
      '&[data-disabled]': {
        opacity: 0.2,
        cursor: 'not-allowed',
      },
    },
  },
  variants: {
    type: {
      normal: { fontSize: 16 },
      large: { fontSize: 24 },
      icon: {
        display: 'inline-grid',
        placeContent: 'center',
        padding: 0,
        width: 40,
        height: 40,
        fontSize: 16,
        border: 'none',
      },
    },
  },
  defaultVariants: {
    type: 'normal',
  },
})

export const buttonIcon = recipe({
  base: {
    height: 20,
    fill: vars.color.text,
  },
})
