/**
 * theme.js
 *
 * Author: Ankit Gupta
 * Company: Kioskx
 *
 * Description:
 * This file defines the custom Material UI theme for the Kioskx Idea Lab Kiosk App.

 * Usage:
 * Import this theme into the application's root layout and apply it using Material UI's
 * ThemeProvider to ensure a cohesive look and feel.
 */

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2F975F' // Green
    },
    secondary: {
      main: '#575F56' // Dark Gray
    },
    background: {
      default: '#FFFFFF' // White
    },
    text: {
      primary: '#000000', // Black
      secondary: '#575F56' // Dark Gray
    },
    warning: {
      main: '#FFD700' // Dark Yellow (Gold)
    }
  }
})

export default theme
