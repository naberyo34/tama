import { style } from '@vanilla-extract/css'

export const cardGrid = style({
  display: 'grid',
  gap: 20,
  justifyContent: 'center',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
})
