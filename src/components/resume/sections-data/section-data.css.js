import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  data: {
      marginLeft: '5%'
  },
  what: {
    color: ({color}) => color
  }
}))
