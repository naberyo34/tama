import { style } from '@vanilla-extract/css'

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: 40,
})

export const link = style({
  color: 'inherit',
  textDecoration: 'none',
})

export const title = style({
  fontSize: 32,
})
