import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import {
  pink,
  lightBlue,
  red,
  green,
  amber,
  orange,
  grey,
} from '@material-ui/core/colors'

export default responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: pink[300],
      },
      secondary: {
        main: lightBlue[300],
      },
      error: {
        main: red[300],
      },
      warning: {
        main: amber[300],
      },
      info: {
        main: orange[300],
      },
      success: {
        main: green[300],
      },
      background: {
        default: grey[900],
      },
      text: {
        primary: green[300],
        secondary: orange[300],
      },
    },
    props: {
      MuiLink: {
        underline: 'always',
      },
    },
    overrides: {
      MuiButton: {
        text: {
          color: 'white',
          fontWeight: 'bold',
        },
      },
      MuiIconButton: {
        root: {
          color: 'white',
        },
      },
      MuiSnackbarContent: {
        root: {
          backgroundColor: grey[700],
          color: 'white',
        },
      },
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
      ].join(','),
      button: {
        fontSize: '1rem',
        letterSpacing: '0.05em',
        fontWeight: 'bold',
      },
      h1: {
        fontWeight: 'bold',
        color: 'white',
      },
      h2: {
        fontWeight: 'normal',
        color: 'white',
      },
      h3: {
        fontWeight: 'bold',
        color: 'white',
      },
      h4: {
        fontWeight: 'bold',
        color: 'white',
      },
      h5: {
        fontWeight: 'bold',
        color: 'white',
      },
      h6: {
        fontWeight: 'bold',
        color: 'white',
      },
      subtitle1: {
        color: 'white',
        fontSize: '0.8rem'
      },
      subtitle2: {
        color: 'white',
      },
      body1: {
        color: 'white',
      },
      body2: {
        color: 'white',
        fontWeight: '300',
      },
    },
  })
)
