import { vars } from '@tama/design-system'
import { style } from '@vanilla-extract/css'

export const searchInput = style({
  padding: 8,
  fontSize: 12,
  color: vars.color.text,
  backgroundColor: vars.color.bg,
  border: `1px solid ${vars.color.text}`,
  borderRadius: 4,
})
