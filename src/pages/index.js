import React, { useState } from 'react'
import Layout from '../components/layout'
import profilePhoto from '../../static/circle-cropped.png'
import useStyles from './index.css'
import { Box, IconButton, Snackbar } from '@material-ui/core'
import FeatherIcon from 'feather-icons-react'
import NeonHeader from '../components/neon-header'
import { pink, lightBlue, green } from '@material-ui/core/colors'

export default () => {
  const styles = useStyles()
  const [snackbarOpen, setSnackbarOpen] = useState(false)

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
          <img src={profilePhoto} className={styles.image} alt="shaqued" />
          <NeonHeader variant={'h2'} color={pink[300]}>
            Hi, I'm Shaqued
          </NeonHeader>
          <Box flexDirection="row">
            <NeonHeader
              variant={'h2'}
              color={lightBlue[300]}
              display={'inline'}
            >
              and i'm a{' '}
            </NeonHeader>
            <NeonHeader variant={'h2'} color={green[300]} display={'inline'}>
              software engineer
            </NeonHeader>
          </Box>
        </Box>
        <Box>
          <IconButton onClick={() => copyMailToClipboard()}>
            <FeatherIcon icon="mail" />
          </IconButton>
          {externalReferences.map(button => (
            <a
              key={button.icon}
              rel="noopener noreferrer"
              target="_blank"
              href={`${button.link}`}
            >
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
