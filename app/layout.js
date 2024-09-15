// app/layout.js
'use client'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme/theme'
import Navigation from './components/Navigation'
import InactivityHandler from './components/InactivityHandler'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <InactivityHandler timeout={30000}>
            {' '}
            {/* 30 seconds */}
            <Navigation />
            {children}
          </InactivityHandler>
        </ThemeProvider>
      </body>
    </html>
  )
}
