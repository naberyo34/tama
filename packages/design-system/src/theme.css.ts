import { createTheme, keyframes } from '@vanilla-extract/css'

export const [lightTheme, vars] = createTheme({
  color: {
    text: '#222',
    bg: '#fff',
    white: '#fff',
    black: '#222',
  },
})

export const darkTheme = createTheme(vars, {
  color: {
    text: '#ddd',
    bg: '#444',
    white: '#ddd',
    black: '#444',
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
