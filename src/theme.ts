import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#2696C2', dark: '#1c7396', light: '#72b8d4' },
    secondary: { main: '#5aaed0', dark: '#2d7d9f', light: '#c8e9f5' },
    text: { primary: '#153746', secondary: '#607984' },
    background: { default: '#ffffff', paper: '#ffffff' },
    divider: '#e2edf2',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: 'clamp(3rem, 8vw, 9.5rem)', fontWeight: 500, lineHeight: 0.96, letterSpacing: '-0.07em' },
    h2: { fontSize: 'clamp(2.6rem, 6vw, 6.5rem)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.06em' },
    h3: { fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', fontWeight: 500, letterSpacing: '-0.04em' },
    body1: { fontSize: '1.2rem', lineHeight: 1.8 },
    body2: { fontSize: '1.05rem', lineHeight: 1.7 },
    overline: { fontSize: '0.95rem', fontWeight: 700, letterSpacing: '0.18em' },
  },
  shape: { borderRadius: 2 },
  components: {
    MuiButton: {
      styleOverrides: { root: { borderRadius: 2, textTransform: 'none', fontWeight: 500, padding: '12px 20px' } },
    },
  },
});

export default theme;
