import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  navbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    marginRight: theme.spacing(2),
  },
  logo: {
    maxHeight: '60px',
    marginLeft: theme.spacing(2),
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
}))
