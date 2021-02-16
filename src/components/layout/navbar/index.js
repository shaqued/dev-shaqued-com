import React from 'react'
import useStyles from './navbar.css'

export default ({ children }) => {
  const styles = useStyles()

  return <div className={styles.navbar}>{children}</div>
}
