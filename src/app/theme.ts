import { createTheme, ThemeOptions } from '@mui/material/styles';

const getDesignTokens = (mode: 'light' | 'dark'): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#7b8cde',
            light: '#9eadf0',
            dark: '#5a6cb0',
          },
          secondary: {
            main: '#82d4bb',
            light: '#a0f0d8',
            dark: '#64a690',
          },
          background: {
            default: '#eee5e9',
            paper: '#ccb7ae',
          },
          text: {
            primary: '#363230',
            secondary: '#5c5552',
          },
          error: {
            main: '#d32f2f',
            light: '#e57373',
          },
          warning: {
            main: '#ffa000',
            light: '#ffb74d',
          },
          info: {
            main: '#1976d2',
            light: '#64b5f6',
          },
          success: {
            main: '#388e3c',
            light: '#81c784',
          },
        }
      : {
          primary: {
            main: '#9eadf0',
            light: '#c1cbff',
            dark: '#7b8cde',
          },
          secondary: {
            main: '#a0f0d8',
            light: '#c3ffff',
            dark: '#82d4bb',
          },
          background: {
            default: '#1a1a1a',
            paper: '#2c2c2c',
          },
          text: {
            primary: '#ffffff',
            secondary: '#b0b0b0',
          },
          error: {
            main: '#f44336',
            light: '#e57373',
          },
          warning: {
            main: '#ffa726',
            light: '#ffb74d',
          },
          info: {
            main: '#29b6f6',
            light: '#4fc3f7',
          },
          success: {
            main: '#66bb6a',
            light: '#81c784',
          },
        }),
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
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
