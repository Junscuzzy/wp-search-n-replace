import React from 'react'
import Typography from '@material-ui/core/Typography'

export default function Header() {
    return (
        <>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
            >
                WordPress Search & Replace
            </Typography>
            <Typography
                component="div"
                variant="h6"
                align="left"
                color="textSecondary"
                paragraph
            >
                To move your WordPress site to a new domain or server,
                you will likely run into a need to run a search/replace
                on the database for everything to work correctly.
                Fortunately, it's very simple:
                <ol>
                    <li>Type yours URLs, your database prefix and press "Generate"</li>
                    <li>We generate the query</li>
                    <li>Copy/paste the SQL in your DB editor.</li>
                </ol>
            </Typography>
        </>
    )
}
