import React from 'react'
import styles from './header.module.css'
import MobileNavbar from './mobile-navbar/index'
import Navbar from './navbar/index'

export default ({ children }) => {
  const buttons = ['about', 'resume', 'projects']

  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <MobileNavbar buttons={buttons}></MobileNavbar>
        <Navbar buttons={buttons}></Navbar>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
