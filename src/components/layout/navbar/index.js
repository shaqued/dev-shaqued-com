import React from 'react'
import useStyles from './navbar.css'
import {Button} from '@material-ui/core'
import {Link} from 'gatsby'
import Logo from '../../../../static/favicon.ico'

export default ({ children }) => {
  const styles = useStyles()

  return (
    <div className={styles.header}>
      <Button component={Link} to="/">
        <img
          src={Logo}
          className={styles.logo}
        />
      </Button>
      <div className={styles.navbar}>{children}</div>
    </div>
  )
}
