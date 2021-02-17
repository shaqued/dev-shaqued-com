import { makeStyles } from '@material-ui/core/styles'
import {grey} from '@material-ui/core/colors'

export default makeStyles(theme => ({
  navbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    marginRight: theme.spacing(2),
  },
  logo: {
    maxHeight: '60px',
    margin: theme.spacing(2),
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: grey[900],
  },
}))
