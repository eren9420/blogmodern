import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary:   { main: '#5e35b1' },    // deep purple
    secondary: { main: '#00bfa5' },    // teal
    background: {
      default: '#121212',
      paper:   '#1e1e1e',
    },
  },
  typography: {
    fontFamily: `'Montserrat', sans-serif`,
    h2: { fontWeight: 700, letterSpacing: '0.05em' },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '0.75rem 1.5rem',
          transition: 'transform 0.3s ease',
          '&:hover': { transform: 'translateY(-2px)' },
        },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 4 },
      styleOverrides: {
        root: {
          transition: 'transform 0.4s ease, box-shadow 0.4s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 24px rgba(0,0,0,0.5)',
          },
        },
      },
    },
  },
});

export default theme;