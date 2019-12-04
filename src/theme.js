import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    common: {
      white: '#f8f8f2'
    },
    primary: {
      main: '#bd93f9',
      contrastText: '#f8f8f2'
    },
    secondary: {
      main: '#6272a4',
      // contrastText: '#282a36'
    },
    background: {
      paper: '#44475a',
      default: '#282a36'
    },
    error: {
      main: '#ff79c6'
    }
  },
  shape: {
    // borderRadius: 0
  },
  typography: {
    fontSize: 14
  },
  overrides: {
    MuiFormHelperText: {
      root: {
        position: 'absolute',
        top: '100%'
      }
    },
    MuiFilledInput: {
      input: {
        background: 'transparent',
        '&:-internal-autofill-selected': {
          background: 'transparent',

        }
      }
    }
  }
})

export default theme
