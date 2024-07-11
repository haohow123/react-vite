import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    info: {
      light: 'rgba(0,0,0,0.23)',
      main: 'rgba(0,0,0,0.6)',
    },
  },
});

export default theme;
