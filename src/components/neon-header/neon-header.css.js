import { makeStyles } from '@material-ui/core/styles'

// everything here happens because @keyframes can't get props
export default props => {
  const useStyles = makeStyles(theme => ({
    header: {
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        justifyContent: 'center'
      },
      fontStyle: 'italic',
      color: '#fff',
      textTransform: 'uppercase',
      animation: '$flicker 5s infinite alternate',
    },

    '@keyframes flicker': {
      '0%, 23%, 25%, 54%, 56%, 100%': {
        textShadow: `-0.2rem -0.2rem 1rem #fff, 0.2rem 0.2rem 1rem #fff, 0 0 0.5rem ${props.color}, 0 0 1rem ${props.color}, 0 0 1.5rem ${props.color}, 0 0 2rem ${props.color}, 0 0 2.5rem ${props.color}`,
      },
      '24%, 55%': {
        textShadow: 'none',
      },
    },
  }))
  return useStyles(props)
}
