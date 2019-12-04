import React, { useState } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import { initialValues } from './Form/validation'
import Form from './Form/Form'
import Code from './Code'
import Header from './Header'
import Footer from './Footer'
import Warning from './Warning'

import '../scrollbar.css'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2, 0),
    marginTop: 'auto',
  }
}))

function App() {
  const classes = useStyles()
  const [formData, setFormData] = useState({ ...initialValues, show: false })

  return (
    <Container maxWidth="md" className={classes.root}>
      <CssBaseline />

      <main id="main" className={classes.main}>
        <Header />
        <Form onSubmit={values => setFormData({ ...values, show: true })} />

        {formData.show ? (
          <Code code={`
UPDATE ${formData.prefix}options SET option_value = replace(option_value, '${formData.old_url}', '${formData.new_url}') WHERE option_name = 'home' OR option_name = 'siteurl';
UPDATE ${formData.prefix}posts SET post_content = replace(post_content, '${formData.old_url}', '${formData.new_url}');
UPDATE ${formData.prefix}postmeta SET meta_value = replace(meta_value,'${formData.old_url}', '${formData.new_url}');
        `.trim()} language='sql' />
        ) : <Warning />}
      </main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </Container>
  )
}

export default App
