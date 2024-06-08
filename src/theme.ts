import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#57825F',
    },
    secondary: {
      main: '#000000', 
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#FFFFFF', 
    },
    text: {
      primary: "#000000",
      secondary: "#FFFFFF"
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', 
    h1: {
      fontFamily: 'Newsreader, serif', 
      fontWeight: 500,
    },
    h2: {
      fontFamily: 'Newsreader, serif', 
      fontWeight: 500,
    },
    body1: {
      fontFamily: 'Mukta, sans-serif', 
      fontSize: '1.3rem',
    },
    body2: {
      fontSize: '1.1rem',
      fontFamily: 'Mukta, Arial, sans-serif', 
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Mukta, Arial, sans-serif', 
          fontSize: '1.1rem',
          fontWeight: 500,
          textTransform: 'none',
          width: "300px", 
          height: "43px",
          boxShadow: 'none'
        },
      },
    },
  },
});

export default theme;