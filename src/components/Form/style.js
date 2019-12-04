import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(6, 0, 10),
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
  },
  buttonGroup: {
    // [theme.breakpoints.up('sm')]: {
    display: 'flex'
    // },
  },
  input: {
    width: '100%',
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2)
    },
  },
  button: {}
}))

export default useStyles
