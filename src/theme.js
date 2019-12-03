import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    common: {
      white: '#f8f8f2'
    },
    primary: {
      main: '#ff79c6',
      contrastText: '#f8f8f2'
    },
    background: {
      paper: '#44475a',
      default: '#282a36'
    },
    error: {
      main: '#ff5555'
    }
  },
  shape: {
    borderRadius: 0
  },
  overrides: {
    MuiFormHelperText: {
      root: {
        position: 'absolute',
        top: '100%'
      }
    }
  }
})

export default theme
