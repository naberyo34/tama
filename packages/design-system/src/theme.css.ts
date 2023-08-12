import { createTheme } from '@vanilla-extract/css'

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
