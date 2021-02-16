import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  mobiledrawer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    position: 'fixed',
    zIndex: '1',
    top: '0',
    left: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    overflowX: 'hidden',
    transition: '0.3s',
  },
  mobileNavbar: {
    top: '25%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))
