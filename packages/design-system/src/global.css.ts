import { globalStyle } from '@vanilla-extract/css'

globalStyle('*', {
  margin: 0,
  lineHeight: 1,
  boxSizing: 'border-box',
  fontFamily: [
    'Helvetica Neue',
    'Arial',
    'Hiragino Kaku Gothic ProN',
    'Hiragino Sans',
    'Meiryo',
    'sans-serif',
  ],
})
