import { style } from '@vanilla-extract/css'
import { vars } from '../src/theme.css'

export const previewWrapper = style({
  position: 'relative',
  padding: 40,
  marginTop: 20,
  backgroundColor: vars.color.bg,
  border: `1px solid ${vars.color.gray}`,
  borderRadius: 4,
})
