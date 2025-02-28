import * as yup from 'yup';

const regExpEmail = new RegExp(/^\S+@\S+.\S+$/);

export const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('This field is required')
    .min(2, 'Minimum 2 characters'),
  email: yup
    .string()
    .required('This field is required')
    .matches(regExpEmail, 'Invalid mail format'),
  password: yup
    .string()
    .required('This field is required')
    .min(6, 'Minimum 6 characters'),
});
