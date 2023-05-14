import { defineConfig } from '@pandacss/dev';

import { globalCss } from './src/app/panda-theme/global-css';
import { recipes } from './src/app/panda-theme/recipes';
import { textStyles } from './src/app/panda-theme/text-styles';
import { semanticTokens } from './src/app/panda-theme/semantic-tokens';

type Config = ReturnType<typeof defineConfig>;

const config: Config = defineConfig({
  preflight: true,
  include: ['./src/**/*.{tsx,jsx}'],
  presets: ['@pandacss/dev/presets'],
  jsxFramework: 'react',
  outdir: 'panda',

  globalCss,

  theme: {
    extend: {
      recipes,
      textStyles,
      semanticTokens,
      tokens: {
        lineHeights: {
          relaxed: { value: '1.75' },
        },
        colors: {
          black: { value: '#1C1917' },
          gray: {
            25: { value: '#fefefe' },
            50: { value: '#fdfdfd' },
            100: { value: '#fafafa' },
            200: { value: '#dddddd' },
            300: { value: '#c0c0c0' },
            400: { value: '#a2a2a2' },
            500: { value: '#858585' },
            600: { value: '#676767' },
            700: { value: '#4a4a4a' },
            800: { value: '#2c2c2c' },
            900: { value: '#232323' },
          },
          orange: {
            50: { value: '#F6E1DB' },
            100: { value: '#EEC2B7' },
            200: { value: '#E49582' },
            300: { value: '#DE7960' },
            400: { value: '#EB5E41' },
            500: { value: '#BD4E34' },
            600: { value: '#953D2B' },
            700: { value: '#662314' },
            800: { value: '#451D14' },
            900: { value: '#391915' },
          },
          brown: {
            50: { value: '#78574F' },
            100: { value: '#5B4039' },
            200: { value: '#4E3630' },
            300: { value: '#3D2925' },
            400: { value: '#33221E' },
            500: { value: '#2D1D19' },
            600: { value: '#261916' },
            700: { value: '#201412' },
            800: { value: '#1D1615' },
            900: { value: '#0F0705' },
          },
        },
        spacing: {
          '4.5': { value: '1.125rem' },
        },
        sizes: {
          '15': { value: '3.75rem' },
          '18': { value: '4.5rem' },
        },
      },
    },
  },
  patterns: {
    extend: {},
  },
});

export default config;
