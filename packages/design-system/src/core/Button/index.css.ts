import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../theme.css'

export const button = recipe({
  base: {
    padding: '0.5em 1em',
    border: 'none',
    borderRadius: 6,
    transition: 'opacity 0.2s',
    cursor: 'pointer',
    selectors: {
      '&:hover': {
        opacity: 0.8,
      },
      '&[data-disabled]': {
        color: vars.color.white,
        backgroundColor: vars.color.disabled,
        border: 'none',
        opacity: 1,
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
        borderRadius: '50%',
      },
    },
    theme: {
      primary: {
        color: vars.color.white,
        backgroundColor: vars.color.primary,
      },
      themeSwitch: {
        color: vars.color.text,
        backgroundColor: vars.color.bg,
        border: `1px solid ${vars.color.text}`,
      },
    },
  },
  defaultVariants: {
    type: 'normal',
    theme: 'primary',
  },
})

export const buttonIcon = recipe({
  base: {
    width: 16,
    fill: vars.color.white,
  },
  variants: {
    theme: {
      primary: {
        fill: vars.color.white,
      },
      themeSwitch: {
        fill: vars.color.text,
      },
    },
  },
  defaultVariants: {
    theme: 'primary',
  },
})
