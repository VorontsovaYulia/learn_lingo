import * as yup from 'yup';

const regExpEmail = new RegExp(/^\S+@\S+.\S+$/);

export const schema = yup.object().shape({
  email: yup
    .string()
    .required('This field is required')
    .matches(regExpEmail, 'Invalid mail format'),
  password: yup
    .string()
    .required('This field is required')
    .min(6, 'Minimum 6 characters'),
});
