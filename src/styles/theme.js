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

export default responsiveFontSizes(createMuiTheme({
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
      default: grey[800],
    },
  },
  props: {
    MuiLink: {
      underline: 'always',
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
      fontSize: '0.8rem',
      letterSpacing: '0.05em',
      fontWeight: 'normal',
      fontFamily: 'Open Sans Hebrew',
    },
    h1: {
      fontWeight: 'bold',
    },
    h2: {
      fontWeight: 'bold',
    },
    h3: {
      fontWeight: 'bold',
    },
    h4: {
      fontWeight: 'bold',
    },
    h5: {
      fontWeight: 'bold',
    },
    h6: {
      fontWeight: 'bold',
    },
    subtitle1: {
      fontWeight: 'normal',
    },
    subtitle2: {
      fontWeight: 'normal',
    }
  },
}))
