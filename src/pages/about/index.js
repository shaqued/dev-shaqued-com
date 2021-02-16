import React from 'react'
import useStyles from './about.css'
import Layout from '../../components/layout'
import { Box, Typography } from '@material-ui/core'
import portrait from '../../../static/my-portrait.png'

export default () => {
  const styles = useStyles()

  return (
    <Layout>
      <Box className={styles.content}>
        <img alt="shaqued" src={portrait} className={styles.image} />
        <Box>
          <Typography variant={'h2'} className={styles.title}>
            {`My name is Shaqued Gavriel`}
          </Typography>
          <Typography variant={'h6'} display="inline">
            I'm a{' '}
          </Typography>
          <Typography variant={'h6'} color="primary" display="inline">
            full stack developer
          </Typography>
          <Typography variant={'h6'} display="inline">
            , based in Israel
          </Typography>
          <Typography variant={'body1'}>
            {'I enjoy algorithms and solving complex problems.'}
          </Typography>
          <Typography variant={'body1'} display="inline">
            I spent the last few years serving as a software engineer in the
            IDF, and finishing my{' '}
          </Typography>
          <Typography color="primary" display="inline">
            BSc in Computer Science
          </Typography>
          <Typography variant={'body1'}>
            . When I'm not coding, or sleeping, you can find me exploring{' '}
          </Typography>
          <Typography color="textPrimary" display="inline">
            sustainabilty
          </Typography>
          <Typography display="inline">, practicing </Typography>
          <Typography color="textSecondary" display="inline">
            aerial yoga
          </Typography>
          <Typography display="inline">, reading tons of </Typography>
          <Typography color="secondary" display="inline">
            books
          </Typography>
          <Typography display="inline">, and traveling the land.</Typography>
        </Box>
      </Box>
    </Layout>
  )
}
