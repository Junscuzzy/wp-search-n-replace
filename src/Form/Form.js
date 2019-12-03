import React from 'react'
import { Field, Form as FormikForm } from 'formik'
import { TextField } from 'formik-material-ui'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import useStyles from './style'

function Form(props) {
  const classes = useStyles()

  return (
    <Paper elevation={8} className={classes.paper} component={FormikForm}>
      <Grid container className={classes.buttonGroup}>
        <Grid item xs={12} md={4}>
          <Field
            name="old_url"
            label="Old URL"
            color="primary"
            variant="outlined"
            component={TextField}
            className={classes.input}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Field
            name="new_url"
            label="New URL"
            color="primary"
            variant="outlined"
            component={TextField}
            className={classes.input}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Field
            name="prefix"
            label="Prefix"
            color="primary"
            variant="outlined"
            component={TextField}
            className={classes.input}
          />
        </Grid>
      </Grid>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={props.isSubmitting}
      >
        Go
      </Button>
    </Paper>
  )
}

export default Form
