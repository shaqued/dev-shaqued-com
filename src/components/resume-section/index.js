import React from 'react'
import useStyles from './resume-section.css'
import { Typography } from '@material-ui/core'

export default ({color, title}) => {
  const styles = useStyles({color})

  return (
    <div className={styles.section}>
        <Typography variant={'h6'}>{'<!-- '} {title} {' -->'}</Typography>
    </div>
  )
}
