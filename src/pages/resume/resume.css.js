import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  resume: {
    display: 'flex',
    flexDirection: 'column',
    height: '98%',
    width: '100%',
  },
  row: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    flexGrow: '1',
    flexBasis: '0',
  },
  openingTag: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  closingTag: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '2px',
  },
}))
