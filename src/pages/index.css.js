import { makeStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'

export default makeStyles(theme => ({
  home:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  intro: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  image: {
    height: '60%',
  },
  secondRow: {
    display: 'flex',
  },
  softwareEngineer: {
    color: green[300],
  },
}))
