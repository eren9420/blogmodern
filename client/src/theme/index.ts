// client/src/theme/index.ts
import { createTheme, ThemeOptions } from '@mui/material/styles';

const common: ThemeOptions = {
  typography: {
    fontFamily: ['"Roboto"', 'sans-serif'].join(','),
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    body1: { fontSize: '1rem' },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { textTransform: 'none' }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: { boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }
      }
    }
  }
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' },
    background: { default: '#f4f6f8', paper: '#ffffff' },
  },
  ...common
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#ce93d8' },
    background: { default: '#121212', paper: '#1e1e1e' },
    text: { primary: '#ffffff', secondary: '#bbbbbb' }
  },
  ...common
});
