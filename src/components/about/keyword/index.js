import React from 'react'
import useStyles from './keyword.css'
import { Typography } from '@material-ui/core'
import keywordColor from './keywords-colors.const'
import keywordImage from './keywords-images.const'

export default ({keyword, handleHover, handleOnClick, children }) => {
  const color = keywordColor[keyword];
  const image = keywordImage[keyword];
  const styles = useStyles({ color })

  return (
    <Typography
    className={styles.keyword}
      display="inline"
      onMouseOver={() => handleHover(color, image)}
      onMouseLeave={() => handleHover()}
      onClick={() => handleOnClick(color, image)}
    >
      {children}
    </Typography>
  )
}