import { style } from '@vanilla-extract/css'

export const header = style({
  position: 'fixed',
  display: 'flex',
  justifyContent: 'space-between',
  padding: 20,
  width: '100%',
})

export const link = style({
  color: 'inherit',
  textDecoration: 'none',
})

export const title = style({
  fontSize: 32,
  fontWeight: 'bold',
})
