import { createTheme } from '@mui/material/styles';

export const colors = {
  ink: '#2b193e',
  purple: '#6429a2',
  purpleDark: '#532186',
  yellow: '#f4d94a',
  cream: '#f7f4e7',
  sand: '#eee9dc',
  pink: '#e94391',
};

const theme = createTheme({
  palette: {
    primary: { main: colors.purple, dark: colors.purpleDark, contrastText: '#fff' },
    secondary: { main: colors.yellow, contrastText: colors.ink },
    background: { default: colors.cream, paper: '#fff' },
    text: { primary: colors.ink, secondary: '#63596c' },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    button: { textTransform: 'none', fontWeight: 700 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth', scrollPaddingTop: '92px' },
        body: { WebkitFontSmoothing: 'antialiased' },
        '::selection': { background: '#e6c5ff', color: '#29153e' },
        '@keyframes riseIn': {
          from: { opacity: 0, transform: 'translateY(18px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        '@media (prefers-reduced-motion: reduce)': {
          '*, *::before, *::after': {
            animationDuration: '.01ms !important',
            transitionDuration: '.01ms !important',
            scrollBehavior: 'auto !important',
          },
        },
      },
    },
  },
});

export default theme;
