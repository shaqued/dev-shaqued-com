import React, {useState} from 'react'
import Layout from '../../components/layout'
import { Box, Typography } from '@material-ui/core'
import portrait from '../../../static/my-portrait.png'
import { makeStyles } from '@material-ui/core/styles'
import Keyword from '../../components/about/keyword'

export default () => {
  const [color, setColor] = useState('white')
  const styles = useStyles(({color}))

  const handleHover = color => {
    setColor(color || 'white')
  }

  return (
    <Layout>
      <Box className={styles.content}>
        <img alt="shaqued" src={portrait} className={styles.image} />
        <Box>
          <Typography variant={'h2'} className={styles.title}>
            My name is
          </Typography>
          <Typography variant={'h2'} className={styles.title} gutterBottom>
            Shaqued Gavriel
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
          <Typography variant={'body1'} display="inline">
            . <br /> When I'm not coding, or sleeping, you can find me exploring{' '}
          </Typography>
          <Keyword keyword="sustainability" handleHover={handleHover}>
            sustainability
          </Keyword>
          <Typography display="inline">, practicing </Typography>
          <Keyword keyword="aerialYoga" handleHover={handleHover}>
            aerial yoga
          </Keyword>
          <Typography display="inline">, reading tons of </Typography>
          <Keyword keyword="books" handleHover={handleHover}>
            books
          </Keyword>
          <Typography display="inline">, and traveling the land.</Typography>
        </Box>
      </Box>
    </Layout>
  )
}

const useStyles = makeStyles(theme => ({
  content: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    display: 'flex',
    width: '60%',
    alignItems: 'center',
    height: '100%',
    maxWidth: '800px',
  },
  image: {
    maxHeight: '260px',
    [theme.breakpoints.up('md')]: {
      marginRight: '60px',
    },
    border: 'solid',
    borderWidth: 'thin',
    borderRadius: '500px',
    boxShadow: ({color}) => `0 0 .2rem #fff,
            inset 0 0 .2rem #fff,
            0 0 1rem ${color}`,
    borderColor: 'white',
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
}))
