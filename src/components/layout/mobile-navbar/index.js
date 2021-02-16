import React, { useState } from 'react'
import { IconButton, Button } from '@material-ui/core'
import { Menu, Close } from '@material-ui/icons'
import { Link } from 'gatsby'
import useStyles from './mobile-navbar.css'

export default ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const styles = useStyles()
  const handleClickOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.mobileNavbar}>
      <IconButton onClick={() => handleClickOpen()}>
        <Menu />
      </IconButton>
      {isOpen ? (
        <div className={styles.mobiledrawer}>
          <IconButton onClick={() => handleClickOpen()}>
            <Close />
          </IconButton>
          <Button component={Link} to={'/'}>
            Home
          </Button>
          {children}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
