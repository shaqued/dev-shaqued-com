import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  layout: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    width: '100%',
    height: '10%',
    position: 'fixed',
  },
  content: {
    display: 'flex',
    paddingTop: '5%',
    marginBottom: '10%',
    height: '90%',
    justifyContent: 'center'
  },
}))
