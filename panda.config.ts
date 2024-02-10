import { defineConfig, defineGlobalStyles } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // The extension for the emitted JavaScript files
  outExtension: 'js',
  // Where to look for your css declarations
  include: ['./app/**/*.{ts,tsx,js,jsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        black: { value: '#000505' },
        spaceCadet: { value: '#3b3355' },
        ultraViolet: { value: '#5d5d81' },
        columbiaBlue: { value: '#bfcde0' },
        white: { value: '#fefcfd' },
      },
      sizes: {
        x0_5: { value: '4px' },
        base: { value: '8px' },
        x1_5: { value: '12px' },
        x2: { value: '16px' },
        x3: { value: '24px' },
        x4: { value: '32px' },
        x6: { value: '48px' },
        x8: { value: '64px' },
        x10: { value: '80px' },
      },
      spacing: {
        x0_5: { value: '4px' },
        base: { value: '8px' },
        x1_5: { value: '12px' },
        x2: { value: '16px' },
        x3: { value: '24px' },
        x4: { value: '32px' },
        x6: { value: '48px' },
        x8: { value: '64px' },
        x10: { value: '80px' },
      },
      fonts: {
        default: {
          // see: https://ics.media/entry/200317/
          // memo: ちょっと参照情報が古いかも
          value:
            '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "BIZ UDPGothic", Meiryo, sans-serif',
        },
      },
      fontSizes: {
        sm: { value: '10px' },
        md: { value: '14px' },
        lg: { value: '24px' },
        xl: { value: '32px' },
      },
      fontWeights: {
        regular: { value: '500' },
        bold: { value: '700' },
        black: { value: '900' },
      },
      lineHeights: {
        1: { value: '1' },
        regular: { value: '1.5' },
      },
      radii: {
        sm: { value: '4px' },
        full: { value: '9999px' },
      },
      opacity: {
        0: { value: '0' },
        50: { value: '0.5' },
        100: { value: '1' },
      },
      zIndex: {
        // see: https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/foundations/z-index.ts
        hide: { value: '-1' },
        docked: { value: '10' },
      },
      durations: {
        fast: { value: '200ms' },
        medium: { value: '400ms' },
        slow: { value: '600ms' },
      },
      aspectRatios: {
        '16:9': { value: '16 / 9' },
      },
    },
    extend: {},
  },
  globalCss: defineGlobalStyles({
    'html, body': {
      color: 'black',
      backgroundColor: 'white',
      fontFamily: 'default',
      fontSize: 'md',
      fontWeight: 'regular',
      lineHeights: '1',
    },
  }),
  shorthands: false,
  strictTokens: true,
  jsxFramework: 'react',
  // The output directory for your css system
  outdir: '/app/styled-system',
  lightningcss: true,
})
