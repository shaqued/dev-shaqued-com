import React from 'react'
import styles from './navBar.module.css'

export default ({ children }) => {
  return <div className={styles.navbar}>{children}</div>
}
