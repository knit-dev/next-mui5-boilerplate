const { createTheme } = require('@mui/material')

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
  },
  palette: {
    primary: {
      main: '#ff6699',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    secondary: {
      main: '#c6beed',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    error: {
      main: '#fe6157',
    },
    warning: {
      main: '#fede93',
    },
    info: { main: '#7cb8ff' },
    mode: 'dark',
  },
})

theme.spacingValue = theme.spacing(1)

module.exports = theme
