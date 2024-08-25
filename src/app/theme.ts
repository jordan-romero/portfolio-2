// app/theme.ts

import { createTheme, ThemeOptions } from '@mui/material/styles';

const getDesignTokens = (mode: 'light' | 'dark'): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#7b8cde',
          },
          secondary: {
            main: '#82d4bb',
          },
          background: {
            default: '#eee5e9',
            paper: '#ccb7ae',
          },
          text: {
            primary: '#363230',
          },
        }
      : {
          primary: {
            main: '#9eadf0',
          },
          secondary: {
            main: '#a0f0d8',
          },
          background: {
            default: '#1a1a1a',
            paper: '#2c2c2c',
          },
          text: {
            primary: '#ffffff',
          },
        }),
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

const theme = {
  light: createTheme(getDesignTokens('light')),
  dark: createTheme(getDesignTokens('dark')),
};

export default theme;
