import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

export default function Footer() {
    return (
        <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
        >
            Made with <Link href="https://reactjs.org/" target="_blank" color="secondary">React</Link>, <Link href="https://material-ui.com/" target="_blank" color="secondary">@material-ui</Link> & <Link href="https://draculatheme.com/" target="_blank" color="secondary">Dracula</Link> colors by <Link href="https://juliencaron.me" target="_blank" color="secondary">Julien Caron</Link> for <Link href="https://wordpress.org" target="_blank" color="secondary">WordPress</Link>.
        </Typography>
    )
}