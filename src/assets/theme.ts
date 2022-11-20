import { createTheme, PaletteMode, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  palette: {
    mode: 'light' as PaletteMode,
    primary: {
      main: '#EBE6E6',
    },
    secondary: {
      main: '#cdb3c1',
    },
    divider: '#EBE6E6',
    text: {
      primary: '#EBE6E6',
      secondary: '#001220',
    },
    background: {
      default: '#001220',
    },
  },
  typography: {
    fontFamily: 'Raleway',
  },
});

theme = responsiveFontSizes(theme);

export default theme;
