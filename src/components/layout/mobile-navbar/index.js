import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { Link } from 'gatsby'
import styles from './mobile-navbar.module.css'

export default ({ buttons }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOpen = () => {
    console.log(isOpen)
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.mobileNavbar}>
      <GiHamburgerMenu
        className={styles.hamburger}
        onClick={() => handleClickOpen()}
      />

      {isOpen ? (
        <div className={styles.mobiledrawer}>
          <GrClose
            className={styles.closeButton}
            onClick={() => handleClickOpen()}
          />
          
          {buttons.map(button => (
            <div key={button} className={styles.button}>
              <Link to={`/${button}`}>{button}</Link>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
