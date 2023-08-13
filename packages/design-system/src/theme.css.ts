import { createTheme, keyframes } from '@vanilla-extract/css'

export const [lightTheme, vars] = createTheme({
  color: {
    text: '#222',
    bg: '#fff',
    primary: '#f0c05d',
    disabled: '#ddd',
    white: '#fff',
    gray: '#bbb',
  },
})

export const darkTheme = createTheme(vars, {
  color: {
    text: '#ddd',
    bg: '#444',
    primary: '#f0c05d',
    disabled: '#ddd',
    white: '#fff',
    gray: '#bbb',
  },
})

export const fadeIn = keyframes({
  '0%': {
    opacity: 0,
    transform: 'scale(0.8)',
  },
  '100%': {
    opacity: 1,
    transform: 'scale(1)',
  },
})

export const fadeOut = keyframes({
  '0%': {
    opacity: 1,
    transform: 'scale(1)',
  },
  '100%': {
    opacity: 0,
    transform: 'scale(0.8)',
  },
})
