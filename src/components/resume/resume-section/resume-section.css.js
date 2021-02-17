import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  section: {
    border: 'solid',
    borderWidth: 'thin',
    boxShadow: ({ color }) => `0 0 .2rem #fff,
            inset 0 0 .2rem #fff,
            0 0 1rem ${color}`,
    borderColor: 'white',
    flexGrow: '1',
    flexBasis: '0',
    margin: '1%',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
}))
