import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(4, 0),
        padding: theme.spacing(2),
    }
}))

export default function Warning() {
    const classes = useStyles()
    return (
        <Container maxWidth="sm">
            <Paper elevation={8} className={classes.paper}>
                <Typography
                    variant="h6"
                    component="p"
                    color="textPrimary"
                    align="center"
                    gutterBottom
                >
                    Important
            </Typography>
                <Typography
                    color="textSecondary"
                    align="center"
                    paragraph
                >
                    Using this script could break your WordPress website if you don’t know what you are doing. If you are not comfortable doing this, please check with a developer or your web host first.
            </Typography>
            </Paper>
        </Container>
    )
}