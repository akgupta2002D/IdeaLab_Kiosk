/**
 * layout.js
 *
 * Author: Ankit Gupta
 * Company: Kioskx
 *
 * Description:
 * This file defines the root layout for the Kioskx Idea Lab Kiosk App.
 * It includes global theming with Material UI and sets up the InactivityHandler to redirect users to the homepage after a specified period of inactivity.
 */

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
          {' '}
          {/* Apply the custom theme globally */}
          <CssBaseline /> {/* Normalize styles across browsers */}
          <InactivityHandler timeout={10000}>
            {' '}
            {/* Redirect to homepage after 10 seconds of inactivity */}
            <Navigation /> {/* Render the navigation bar */}
            {children} {/* Render the page-specific content */}
          </InactivityHandler>
        </ThemeProvider>
      </body>
    </html>
  )
}
