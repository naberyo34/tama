import { vars } from '@tama/design-system'
import { style } from '@vanilla-extract/css'

export const body = style({
  padding: 40,
  color: vars.color.text,
  backgroundColor: vars.color.bg,
})

export const article = style({
  marginTop: 40,
})
