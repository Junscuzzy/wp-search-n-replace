import React, { useState } from 'react'
import { Formik } from 'formik'

import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import Form from './Form/Form'
import SQL from './Sql'
import { validationSchema, initialValues } from './Form/validation'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      margin: 0,
      padding: 0,
      display: 'flex',
      minHeight: '100vh'
    }
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100vw',
    height: '100%',
    textAlign: 'center',
    alignItems: 'center'
  }
}))

function App() {
  const classes = useStyles()
  const [formData, setFormData] = useState({ ...initialValues, show: false })

  return (
    <>
      <CssBaseline />

      <main className={classes.root}>
        <Container maxWidth="lg">
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
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Move your WordPress website with a SQL query. Type yours URLs,
            generate a sentence, and copy/paste it in your SQL editor (with
            PHPMyAdmin for example).
          </Typography>
        </Container>
        <Container maxWidth="md">
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              setFormData({ ...values, show: true })
              actions.setSubmitting(false);
            }}
            validationSchema={validationSchema}
          >
            {props => <Form {...props} />}
          </Formik>

          {formData.show && <SQL
            url1={formData.old_url}
            url2={formData.new_url}
            prefix={formData.prefix}
          />}
        </Container>
      </main>
    </>
  )
}

export default App
