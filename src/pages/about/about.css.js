import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  content: {
    display: 'flex',
    width: '60%',
    alignItems: 'center',
    height: '100%',
    maxWidth: '800px'
  },
  image: {
    maxHeight: '260px',
    paddingRight: '60px',
  },
  title: {
    paddingBottom: '20px',
  },
}))
