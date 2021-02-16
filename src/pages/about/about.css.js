import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  content: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    display: 'flex',
    width: '60%',
    alignItems: 'center',
    height: '100%',
    maxWidth: '800px',
  },
  image: {
    maxHeight: '260px',
    [theme.breakpoints.up('md')]: {
       paddingRight: '60px',
    },
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
}))
