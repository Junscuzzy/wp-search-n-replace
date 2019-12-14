import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  old_url: Yup.string()
    .required('Old url is required!'),
  new_url: Yup.string()
    .required('New url is required!'),
  prefix: Yup.string().required('New url is required!')
})

export const initialValues = {
  old_url: '',
  new_url: '',
  prefix: 'wp_'
}
