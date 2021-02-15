import React from 'react'
import Layout from '../components/layout'
import profilePhoto from '../../static/circle-cropped.png'
import styles from './index.module.css'
import {Box, Typography} from '@material-ui/core'

export default () => {
  return (
    <Layout>
      <Box className={styles.home}>
        <img src={profilePhoto} className={styles.image} />
        <Typography variant="h2" color="primary">
          {'Hi, My Name is Shaqued'}
        </Typography>
        <Box className={styles.secondRow}>
          <Typography variant="h2" color="secondary">
            {"and i'm a "}
          </Typography>
          <Typography variant="h2" color="error">
            &nbsp; {' software engineer'}
          </Typography>
        </Box>
      </Box>
    </Layout>
  )
}
