'use client';
import createTheme from '@mui/material/styles/createTheme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// color palette
const color = {
  'black': '#0a0a0a',
  'white': '#EDEDED',
  'paper': '#ffffff0f',
  'divider': '#2f2f2f',
  'textLight': '#a1a1a1',
  'purple': '#B48EAD',
  'darkBlue': '#5E81AC',
  'vibrantBlue': '#74D5E4',
  'lightBlue': '#8FBCBB',
  'green': '#A3BE8C',
  'yellow': '#EBCB8B',
  'orange': '#D08770',
  'red': '#BF616A',
};

// next font unique identifiers
const rubik = "__Rubik_98e1b5, __Rubik_Fallback_98e1b5";
const poppins = "__Poppins_8c1529, __Poppins_Fallback_8c1529";

// MUI theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: color['vibrantBlue'],
    },
    secondary: {
      main: color['darkBlue'],
    },
    text: {
      primary: color['white'],
    },
    success: {
      main: color['green'],
    },
    error: {
      main: color['red'],
    },
    warning: {
      main: color['orange'],
    },
    info: {
      main: color['lightBlue'],
    },
    background: {
      default: color['black'],
      paper: color['paper'],
    },
    divider: color['divider'],
  },
  // text styling
  typography: {
    fontFamily: rubik,
    // headers
    h1: {
      fontFamily: poppins,
      color: color['white'],
      fontSize: '2.25rem',
      lineHeight: '2.5rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
        lineHeight: '2.25rem',
      },
      '@media (min-width:960px)': {
        fontSize: '3rem',
        lineHeight: '3.25rem',
      },
      fontWeight: 700,
      cursor: 'default',
    },
    h2: {
      color: color['white'],
      fontSize: '1.875rem',
      lineHeight: '2.25rem',
      '@media (min-width:960px)': {
        fontSize: '2.25rem',
        lineHeight: '2.5rem',
      },
      letterSpacing: '-.025em',
      cursor: 'default',
    },
    h3: {
      fontFamily: poppins,
      color: color['white'],
      fontSize: '1.5rem',
      lineHeight: '2rem',
      '@media (min-width:960px)': {
        fontSize: '1.875rem',
        lineHeight: '2.25rem',
      },
      '@media (min-width:1400px)': {
        fontSize: '2rem',
        lineHeight: '2.25rem',
      },
      fontWeight: 600,
      letterSpacing: '.025em',
      cursor: 'default',
    },
    h4: {
      color: color['white'],
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
      '@media (min-width:960px)': {
        fontSize: '1.5rem',
        lineHeight: '2rem',
      },
      cursor: 'default',
    },
    h5: {
      color: color['white'],
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      '@media (min-width:960px)': {
        fontSize: '1.25rem',
        lineHeight: '1.75rem',
      },
      fontWeight: 500,
      cursor: 'default',
    },
    h6: {
      color: color['white'],
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: 500,
      cursor: 'default',
    },
    // button
    button: {
      color: color['white'],
      fontSize: '1rem',
      '@media (min-width:960px)': {
        fontSize: '1.125rem',
      },
      '@media (min-width:1400px)': {
        fontSize: '1.25rem',
      },
      textTransform: 'unset',
      fontWeight: 500,
    },
    // body
    body1: {
      color: color['white'],
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    body2: {
      color: color['textLight'],
      fontSize: '1rem',
      lineHeight: '1.5rem',
      '@media (min-width:960px)': {
        fontSize: '1.125rem',
      },
    },
    // small labels
    subtitle1: {
      color: color['white'],
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
    subtitle2: {
      color: color['white'],
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
    // secondary text
    caption: {
      color: '#ffffff8C',
    },
  },
  components: {
    MuiTouchRipple: {
      styleOverrides: {
        child: {
          backgroundColor: color['white'],
        },
      }
    }
  }
});

type ThemeProps = { children: React.ReactNode };
export const ThemeContext: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
