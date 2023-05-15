import { defineSemanticTokens } from '@pandacss/dev';

export const semanticTokens = defineSemanticTokens({
  colors: {
    fg: {
      default: { value: { base: '{colors.gray.900}', _dark: 'white' } },
      emphasized: { value: { base: '{colors.gray.700}', _dark: '{colors.gray.200}' } },
      muted: { value: { base: '{colors.gray.500}', _dark: '{colors.gray.400}' } },
      subtle: { value: { base: '{colors.gray.400}', _dark: '{colors.gray.500}' } },
      placeholder: { value: { base: '{colors.gray.600}', _dark: '{colors.gray.400}' } },
      inverted: {
        default: { value: { base: 'white', _dark: '{colors.black}' } },
      },
    },
    bg: {
      canvas: { value: { base: '{colors.gray.25}', _dark: '{colors.brown.900}' } },
      surface: { value: { base: '{colors.gray.50}', _dark: '{colors.gray.800}' } },
      muted: { value: { base: '{colors.gray.200}', _dark: '{colors.brown.400}' } },
      subtle: { value: { base: '{colors.gray.100}', _dark: '{colors.brown.500}' } },
    },
    accent: {
      default: { value: { base: '{colors.orange.400}', _dark: '{colors.orange.400}' } },
      emphasized: { value: { base: '{colors.orange.500}', _dark: '{colors.orange.500}' } },
      muted: { value: { base: '{colors.orange.400}', _dark: '{colors.orange.300}' } },
      subtle: { value: { base: '{colors.orange.50}', _dark: '{colors.orange.900}' } },
    },
    border: {
      default: { value: { base: '{colors.gray.200}', _dark: '{colors.brown.400}' } },
      emphasized: { value: { base: '{colors.gray.300}', _dark: '{colors.brown.300}' } },
    },
  },
  shadows: {
    xs: {
      value: {
        base: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 1px 2px rgba(48, 49, 51, 0.1)',
        _dark: '0px 0px 1px #0D0D0D, 0px 1px 2px rgba(13, 13, 13, 0.9)',
      },
    },
    sm: {
      value: {
        base: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 2px 4px rgba(48, 49, 51, 0.1)',
        _dark: '0px 0px 1px #0D0D0D, 0px 2px 4px rgba(13, 13, 13, 0.9)',
      },
    },
    md: {
      value: {
        base: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 4px 8px rgba(48, 49, 51, 0.1)',
        _dark: '0px 0px 1px #0D0D0D, 0px 4px 8px rgba(13, 13, 13, 0.9)',
      },
    },
    lg: {
      value: {
        base: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 8px 16px rgba(48, 49, 51, 0.1)',
        _dark: '0px 0px 1px #0D0D0D, 0px 8px 16px rgba(13, 13, 13, 0.9)',
      },
    },
    xl: {
      value: {
        base: '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 16px 24px rgba(48, 49, 51, 0.1)',
        _dark: '0px 0px 1px #0D0D0D, 0px 16px 24px rgba(13, 13, 13, 0.9)',
      },
    },
  },
});
