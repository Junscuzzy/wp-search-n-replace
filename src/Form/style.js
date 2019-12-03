import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(6, 0),
    boxShadow: theme.shadows[6],
    display: 'flex'
  },
  buttonGroup: {
    // [theme.breakpoints.up('sm')]: {
    display: 'flex'
    // },
  },
  input: {
    width: '100%',
    backgroundColor: theme.palette.background.default
  },
  button: {}
}))

export default useStyles
