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
      type: darkMode ? 'light' : 'dark',
      background: {
        // EDF1F5
        default: darkMode ? '#FAFAFA' : '#0B1622',
        paper: darkMode ? '#FAFAFA' : '#151F2E'
      }
    },
  });
  theme = responsiveFontSizes(theme)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Navbar />
      <div style={{display:'flex', flexDirection:'column', minHeight:'100vh', ...props.styleRoot}}>
        <main style={{ marginTop:'auto', padding: '0em 0',  }}>
          {children}
        </main>
        <div style={{marginTop:'auto', ...props.styleFooter}}>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Layout