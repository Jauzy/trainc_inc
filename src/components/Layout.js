import React from 'react'
import { useRecoilValue } from 'recoil'
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Navbar from './Navbar'
import Footer from './Footer'
import { isDarkMode } from '../../static/atoms/utils'

const Layout = props => {
  const darkMode = useRecoilValue(isDarkMode)
  const { children } = props
  let theme = createMuiTheme({
    palette: {
      type: !darkMode ? 'light' : 'dark',
      background: {
        // EDF1F5
        default: !darkMode ? '#FAFAFA' : '#0B1622',
        paper: !darkMode ? '#FAFAFA' : '#151F2E'
      }
    },
  });
  theme = responsiveFontSizes(theme)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main style={{ padding: '5em 0' }}>
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout