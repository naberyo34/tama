import { style } from '@vanilla-extract/css'

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const link = style({
  color: 'inherit',
  textDecoration: 'none',
})

export const title = style({
  fontSize: 24,
  fontWeight: 'bold',
})
