import React, { useState } from 'react'
import Layout from '../components/layout'
import profilePhoto from '../../static/circle-cropped.png'
import useStyles from './index.css'
import {
  Box,
  Typography,
  IconButton,
  Button,
  Snackbar,
  Slide,
} from '@material-ui/core'
import FeatherIcon from 'feather-icons-react'

export default () => {
  const styles = useStyles()
  const [snackbarOpen, setSnackbarOpen] = useState(false)

  function SlideTransition(props) {
    return <Slide {...props} direction="up" />
  }

  const externalReferences = [
    { icon: 'linkedin', link: 'https://linkedin.com/in/shaqued' },
    { icon: 'github', link: 'https://github.com/shaqued' },
    { icon: 'instagram', link: 'https://www.instagram.com/shaqued/' },
  ]

  const copyMailToClipboard = () => {
    const el = document.createElement('textarea')
    el.value = 'shaqued201@gmail.com'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    toggleSnackbar()
  }

  const toggleSnackbar = () => {
    setSnackbarOpen(!snackbarOpen)
  }

  return (
    <Layout>
      <Box className={styles.home}>
        <Box className={styles.intro}>
          <img src={profilePhoto} className={styles.image} />
          <Typography variant="h2" color="primary">
            {"Hi, I'm Shaqued"}
          </Typography>
          <Box className={styles.secondRow}>
            <Typography variant="h2" color="secondary">
              {"and i'm a"}
            </Typography>
            <Typography variant="h2" className={styles.softwareEngineer}>
              &nbsp; {' software engineer'}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button onClick={() => copyMailToClipboard()}>
            <FeatherIcon icon="mail" />
          </Button>
          {externalReferences.map(button => (
            <a key={button} target="_blank" href={`${button.link}`}>
              <IconButton>
                <FeatherIcon icon={`${button.icon}`} />
              </IconButton>
            </a>
          ))}
        </Box>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={snackbarOpen}
            onClose={toggleSnackbar}
            message="mail copied to clipboard!"
            action={
              <React.Fragment>
                <IconButton onClick={toggleSnackbar}>
                  <FeatherIcon icon="x" />
                </IconButton>
              </React.Fragment>
            }
          />
      </Box>
    </Layout>
  )
}
