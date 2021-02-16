import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    section: {
        border: "solid",
        borderColor: ({color}) => color,
        flexGrow: '1',
        flexBasis: '0',
        margin: '1%',
        paddingLeft: '10px'
    }
}))
