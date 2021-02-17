import React from 'react'
import ResumeSection from '../../components/resume/resume-section'
import Layout from '../../components/layout'
import { Box, Typography, IconButton, Tooltip } from '@material-ui/core'
import { pink, lightBlue, green, amber } from '@material-ui/core/colors'
import SectionData from '../../components/resume/sections-data'
import FeatherIcon from 'feather-icons-react'
import { makeStyles } from '@material-ui/core/styles'

export default () => {
  const styles = useStyles()

  const educationData = (
    <div>
      <SectionData
        what="B.Sc in Computer Sciense"
        where="The College of Management Academic Studies"
        when="2017-2020"
        data="Develop a javascript based web application, “AllRight”, as an online platform for the acquiring of copyrighted content licenses. 
The app was built using React, Node, and MongoDB."
      />
      <SectionData
        what="IDF Programming Course"
        where="BASMACH IDF School for Computer Professions"
        when="SEPTEMBER 2015 - MARCH 2016"
      />
    </div>
  )

  const experienceData = (
    <div>
      <SectionData
        what="Full stack developer"
        where="IDF, Lotem"
        when="MARCH 2016 - JUNE 2020"
        data={
          <ul style={{ padding: 0 }}>
            Served as a software developer in a top-secret unit in the IDF.
            <li>
              Develop for a real-time web project built on .NET Web API and C#
              backend, AngularJs and JavaScript frontend, and MongoDB. Work on
              both frontend and backend equally to create new features.
            </li>
            <li>
              Follow best practices in an agile software development
              environment.
            </li>
            <li>
              Integrate and sync data between a MongoDB based web application
              and an older SQL based application. While rewriting the old
              application we had to maintain and keep both versions active,
              therefore I developed under the need for consistency of data in
              both applications, paying close attention to data updating
              according to constraints of each application.
            </li>
            <li>
              Refactor the notifications infrastructure in order to improve
              performance.
            </li>
            <li>
              Mentoring new trainees on the unit’s web training, and .Net
              training.
            </li>
          </ul>
        }
      />
    </div>
  )

  const volunteerData = (
    <div>
      <SectionData
        what="Emissary for Chicago"
        where="The Jewish Agency for Israel"
        when="AUGUST 2014 - AUGUST 2015"
        data="Work in the Jewish communities of Chicago, to establish deeper relationships with Israel. Involve in public diplomacy, education, and event planning."
      />
    </div>
  )

  const skillsData = (
    <div>
      <Typography variant="body1" gutterBottom>
        Javascript, C#.NET, HTML,
      </Typography>
      <Typography variant="body1" gutterBottom>
        React, GatsbyJS, Node.js,
      </Typography>
      <Typography variant="body1" gutterBottom>
        MongoDB, SQL Server,
      </Typography>
      <Typography variant="body1" gutterBottom>
        Git, Webpack
      </Typography>
    </div>
  )

  const sectionsFirstRow = [
    {
      title: 'experience',
      color: green[300],
      data: experienceData,
    },
    {
      title: 'education',
      color: lightBlue[300],
      data: educationData,
    },
  ]

  const sectionsSecondRow = [
    {
      title: 'volunteer',
      color: amber[300],
      data: volunteerData,
    },
    {
      title: 'skills',
      color: pink[300],
      data: skillsData,
    },
  ]

  return (
    <Layout>
      <Box className={styles.resume}>
        <Box className={styles.openingTag}>
          <Typography variant={'h1'}>{'<'}</Typography>
          <a href={'/Shaqued Gavriel CV.pdf'} download>
            <IconButton>
              <Tooltip title="download pdf" aria-label="download pdf">
                <FeatherIcon icon="download" />
              </Tooltip>
            </IconButton>
          </a>
        </Box>
        <Box className={styles.row}>
          {sectionsFirstRow.map(section => (
            <ResumeSection
              color={`${section.color}`}
              title={`${section.title}`}
              data={section.data}
            ></ResumeSection>
          ))}
        </Box>
        <Box className={styles.row}>
          {sectionsSecondRow.map(section => (
            <ResumeSection
              color={`${section.color}`}
              title={`${section.title}`}
              data={section.data}
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

const useStyles = makeStyles(theme => ({
  resume: {
    display: 'flex',
    flexDirection: 'column',
    height: '98%',
    width: '100%',
  },
  row: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    flexGrow: '1',
    flexBasis: '0',
  },
  openingTag: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  closingTag: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '2px',
  },
}))