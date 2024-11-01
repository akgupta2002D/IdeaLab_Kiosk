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
import './globals.css'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/theme'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  )
}
