import { createTheme } from '@vanilla-extract/css'

export const [lightThemeClass, vars] = createTheme({
  color: {
    primary: 'black',
  },
  bg: {
    primary: 'white',
  },
})

export const darkThemeClass = createTheme(vars, {
  color: {
    primary: 'white',
  },
  bg: {
    primary: 'black',
  },
})
