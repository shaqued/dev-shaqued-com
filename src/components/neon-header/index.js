import React from 'react'
import useStyles from './neon-header.css'
import { Typography } from '@material-ui/core'

export default ({ color, variant, display, children }) => {
  const styles = useStyles({ color })

  return (
    <Typography
      variant={`${variant}`}
      className={styles.header}
      display={`${display}`}
    >
      {children}
    </Typography>
  )
}
