import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#2d7d9f', dark: '#1d5d79', light: '#8fcbe4' },
    secondary: { main: '#5aaed0', dark: '#2d7d9f', light: '#c8e9f5' },
    text: { primary: '#153746', secondary: '#607984' },
    background: { default: '#f5fbfe', paper: '#ffffff' },
    divider: '#d8eaf1',
  },
  typography: {
    fontFamily: '"Playfair Display", "Georgia", serif',
    h1: { fontSize: 'clamp(2.4rem, 7vw, 8.5rem)', fontWeight: 700, fontStyle: 'italic', lineHeight: 0.96, letterSpacing: '-0.07em' },
    h2: { fontSize: 'clamp(2.2rem, 5vw, 6rem)', fontWeight: 700, fontStyle: 'italic', lineHeight: 1, letterSpacing: '-0.06em' },
    h3: { fontSize: 'clamp(1.75rem, 3vw, 3rem)', fontWeight: 700, fontStyle: 'italic', letterSpacing: '-0.04em' },
    body1: { fontSize: '1.05rem', lineHeight: 1.7 },
    body2: { fontSize: '0.9rem', lineHeight: 1.6 },
    overline: { fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', fontStyle: 'normal' },
  },
  shape: { borderRadius: 2 },
  components: {
    MuiButton: {
      styleOverrides: { root: { borderRadius: 2, textTransform: 'none', fontWeight: 500, padding: '12px 20px' } },
    },
  },
});

export default theme;
