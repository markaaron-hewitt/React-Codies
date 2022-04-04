import { createTheme } from '@mui/material/styles';

export default createTheme({
    palette: {
      action: {
          disabledBackground: "", // don't set the disable background color
          disabled: "contrastText", // set the disable foreground color
          disabledOpacity: .5,
      },
      unrevealedWord: {
          light: '#fafafa',
          main: '#f0f0f0',
          dark: '#e6e6e6',
          contrastText: 'black',
      },
      neutralWord: {
          light: '#d5a567',
          main: '#d09a53',
          dark: '#cd9347',
          contrastText: 'white',
      },
      blueWord: {
          light: '#3838ff',
          main: '#1a1aff',
          dark: '#0000fa',
          contrastText: 'white',
      },
      redWord: {
          light: '#8E008E',
          main: '#ce2727',
          dark: '#ab2121',
          contrastText: 'white',
      },
      bombWord: {
          light: '#262626',
          main: '#171717',
          dark: '#080808',
          contrastText: 'white',
      },
      neutralWordFaded: {
          light: '#fcf8f3',
          main: '#f5eadb',
          dark: '#efdcc3',
          contrastText: 'black',
      },
      blueWordFaded: {
          light: '#f0f0ff',
          main: '#d1d1ff',
          dark: '#b3b3ff',
          contrastText: 'black',
      },
      redWordFaded: {
          light: '#f7d4d4',
          main: '#f2baba',
          dark: '#eda1a1',
          contrastText: 'black',
      },
      bombWordFaded: {
          light: '#828282',
          main: '#737373',
          dark: '#636363',
          contrastText: 'black',
      }
    },
    typography: {
        blue: {
            color: "1a1aff",
        },
        red: {
            color: "ce2727",
            
        }
    }
  });