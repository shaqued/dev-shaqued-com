import React from 'react'
import useStyles from './keyword.css'
import { Typography } from '@material-ui/core'
import keywordColor from './about-keywords.const'

export default ({keyword, handleHover, children }) => {
  const color = keywordColor[keyword];
  const styles = useStyles({ color })

  return (
    <Typography
    className={styles.keyword}
      display="inline"
      onMouseOver={() => handleHover(color)}
      onMouseLeave={() => handleHover()}
    >
      {children}
    </Typography>
  )
}