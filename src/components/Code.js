import React, { useEffect } from 'react'
import Prism from 'prismjs'
import { useCopyToClipboard } from 'react-use'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/themes/prism.css'

import '../vendors/prism/dracula-prism.css'

const useStyles = makeStyles(theme => ({
    paper: {
        backgroundColor: theme.palette.background.default,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        padding: theme.spacing(5, 3),
        position: 'relative'
    },
    buttonWrap: {
        position: 'absolute',
        top: theme.spacing(3),
        right: theme.spacing(6),
        backgroundColor: theme.palette.background.default
    },
    button: {
        textTransform: 'capitalize',
        zIndex: theme.zIndex.speedDial,
    }
}))

export default function Code({ code, language }) {
    const [state, copyToClipboard] = useCopyToClipboard()
    const theme = useTheme()
    const classes = useStyles()

    useEffect(() => Prism.highlightAll())

    return (
        <Paper elevation={8} className={classes.paper}>
            <div className={classes.buttonWrap}>
                <Button
                    variant="contained"
                    size="small"
                    color="secondary"
                    onClick={() => copyToClipboard(code)}
                    disabled={state.value && state.value === code}
                    className={classes.button}
                >
                    {state.value ? <>Copied!</> : <>Copy</>}
                </Button>
            </div>
            <pre style={{ fontSize: theme.typography.htmlFontSize, }}>
                <code className={`language-${language} line-numbers`}>
                    {code}
                </code>
            </pre>
        </Paper>
    )
}

