import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../theme.css'

// switch 予約語だった
export const switchWrapper = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5em',
    color: vars.color.text,
  },
  variants: {
    type: {
      normal: { fontSize: 16 },
      large: { fontSize: 24 },
    },
  },
  defaultVariants: {
    type: 'normal',
  },
})

export const switchControl = recipe({
  base: {
    display: 'inline-flex',
    width: '2em',
    height: '1em',
    boxSizing: 'content-box',
    backgroundColor: vars.color.gray,
    border: `0.2em solid ${vars.color.gray}`,
    borderRadius: '2em',
    transition: 'background-color 0.2s, border-color 0.2s',
    cursor: 'pointer',
    selectors: {
      '&[data-state=checked]': {
        backgroundColor: vars.color.primary,
        borderColor: vars.color.primary,
      },
      '&[data-disabled]': {
        backgroundColor: vars.color.disabled,
        borderColor: vars.color.disabled,
        cursor: 'not-allowed',
      },
    },
  },
})

export const switchThumb = recipe({
  base: {
    width: '1em',
    height: '1em',
    backgroundColor: vars.color.white,
    borderRadius: '1em',
    transition: 'transform 0.2s',
    selectors: {
      '&[data-state=checked]': {
        transform: 'translateX(1em)',
      },
    },
  },
})
