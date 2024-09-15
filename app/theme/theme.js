// src/theme/theme.js
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
