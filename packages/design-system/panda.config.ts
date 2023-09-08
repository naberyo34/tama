import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &',
  },

  // Useful for theme customization
  theme: {
    tokens: {
      // https://chakra-ui.com/docs/styled-system/theme
      colors: {
        black: { value: '#000' },
        white: { value: '#fff' },
        gray: {
          50: { value: '#f7fafc' },
          100: { value: '#edf2f7' },
          200: { value: '#e2e8f0' },
          300: { value: '#cbd5e0' },
          400: { value: '#a0aec0' },
          500: { value: '#718096' },
          600: { value: '#4a5568' },
          700: { value: '#2d3748' },
          800: { value: '#1a202c' },
          900: { value: '#171923' },
        },
      },
      spacing: {
        none: { value: '0' },
        '-1': { value: '2px' },
        default: { value: '4px' },
        '+1': { value: '8px' },
        '+2': { value: '12px' },
        '+3': { value: '16px' },
        '+4': { value: '20px' },
      },
      fontSizes: {
        min: { value: '10px' },
        '-1': { value: '12px' },
        default: { value: '16px' },
        '+1': { value: '20px' },
        '+2': { value: '24px' },
        '+3': { value: '32px' },
        '+4': { value: '40px' },
      },
      lineHeights: {
        none: { value: '1' },
        default: { value: '1.5' },
      },
      radii: {
        default: { value: '0' },
        '+1': { value: '4px' },
        '+2': { value: '8px' },
        '+3': { value: '12px' },
        max: { value: '9999px' },
      },
      borders: {
        default: { value: '1px solid' },
        '+1': { value: '2px solid' },
      },
      opacity: {
        0: { value: 0 },
        25: { value: 0.25 },
        50: { value: 0.5 },
        75: { value: 0.75 },
        100: { value: 1 },
      },
      zIndex: {
        default: { value: 1 },
        '+1': { value: 100 },
        '+2': { value: 200 },
        '+3': { value: 300 },
        '+4': { value: 400 },
      },
      durations: {
        '-1': { value: '100ms' },
        default: { value: '200ms' },
        '+1': { value: '500ms' },
      },
    },
    semanticTokens: {
      colors: {
        text: {
          value: {
            _light: { value: '{colors.gray.800}' },
            _dark: { value: '{colors.gray.50}' },
          },
        },
        bg: {
          value: {
            _light: { value: '{colors.white}' },
            _dark: { value: '{colors.gray.800}' },
          },
        },
      },
    },
  },
  strictTokens: true,

  // The output directory for your css system
  emitPackage: true,
  outdir: '@tama/styled-system',
})
