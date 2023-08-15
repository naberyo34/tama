import { style } from '@vanilla-extract/css'
import { vars } from '../../theme.css'

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: 20,
  height: '100%',
  color: vars.color.text,
  border: `1px solid ${vars.color.text}`,
  borderRadius: 4,
  transition: 'opacity 0.2s, transform 0.2s',
  selectors: {
    '&:hover': {
      opacity: 0.8,
      transform: 'scale(0.96)'
    },
  },
})

export const cardTitle = style({
  fontSize: 20,
})

export const cardContent = style({
  marginTop: 20,
  fontSize: 14,
  lineHeight: 1.5,
})

export const cardDate = style({
  marginTop: 10,
  display: 'block',
  fontSize: 12,
  textAlign: 'right',
})
