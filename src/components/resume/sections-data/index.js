import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './section-data.css'

export default ({ what, where, when, data, color }) => {
  const styles = useStyles({color})
  
  return (
    <div>
      <Typography variant="body1" className={styles.what}>
        {what}
      </Typography>
      <Typography variant="body1">{where}</Typography>
      <Typography variant="subtitle1" gutterBottom>
        {when}
      </Typography>
      <Typography variant="body2" gutterBottom className={styles.data}>{data}</Typography>
    </div>
  )
}
