import React from 'react'
import ResumeSection from '../../components/resume-section'
import Layout from '../../components/layout'
import { Box, Typography } from '@material-ui/core'
import useStyles from './resume.css'
import { pink, lightBlue, green, amber } from '@material-ui/core/colors'

export default () => {
  const styles = useStyles()

  const sectionsFirstRow = [
    {
      title: 'experience',
      color: green[300],
    },
    {
      title: 'education',
      color: lightBlue[300],
    },
  ]

  const sectionsSecondRow = [
    {
      title: 'volunteer',
      color: amber[300],
    },
    {
      title: 'skills',
      color: pink[300],
    },
  ]

  return (
    <Layout>
      <Box className={styles.resume}>
        <Typography variant={'h1'}>{'<'}</Typography>
        <Box className={styles.row}>
          {sectionsFirstRow.map(section => (
            <ResumeSection
              color={`${section.color}`}
              title={`${section.title}`}
            ></ResumeSection>
          ))}
        </Box>
        <Box className={styles.row}>
          {sectionsSecondRow.map(section => (
            <ResumeSection
              color={`${section.color}`}
              title={`${section.title}`}
            ></ResumeSection>
          ))}
        </Box>
        <Box className={styles.closingTag}>
          <Typography variant={'h1'}>{'/>'}</Typography>
        </Box>
      </Box>
    </Layout>
  )
}
