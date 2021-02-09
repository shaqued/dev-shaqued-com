import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import { Link } from 'gatsby'
import styles from '../header.module.css'

export default ({ buttons }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.mobileNavbar}>
      <IconContext.Provider value={{ style: { fontSize: '30px' } }}>
        <GiHamburgerMenu onClick={() => handleClickOpen()} />
      </IconContext.Provider>
      <div className={styles.mobiledrawer}>{isOpen ? 
        buttons.map(button => (
          <div key={button} className={styles.button}>
            <Link to={`/${button}`}>{button}</Link>
          </div>
        )) : <div></div>}
      </div>
    </div>
  )
}
