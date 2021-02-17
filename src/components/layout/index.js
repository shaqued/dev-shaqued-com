import React from 'react'
import useStyles from './layout.css'
import MobileNavbar from './mobile-navbar/index'
import Navbar from './navbar/index'
import { ThemeProvider } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import { Button, CssBaseline, Hidden } from '@material-ui/core'
import theme from '../../styles/theme'

export default ({ children }) => {
  const styles = useStyles()

  const buttons = ['about', 'resume', 'projects'].map(button => (
    <Button key={button} component={Link} to={`/${button}`}>
      {button}
    </Button>
  ))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={styles.layout}>
        <div className={styles.header}>
          <Hidden mdUp>
            <MobileNavbar>{buttons}</MobileNavbar>
          </Hidden>
          <Hidden smDown>
            <Navbar>{buttons}</Navbar>
          </Hidden>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </ThemeProvider>
  )
}
