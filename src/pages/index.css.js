import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  home: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '100%',
    maxHeight: '90%',
  },
  intro: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '5%',
    },
    marginBottom: '2%',
    height: '60%',
  },
}))
