import React from 'react'
import Layout from '../components/layout'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../styles/theme'

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>Home Page!</Layout>
    </ThemeProvider>
  )
}
