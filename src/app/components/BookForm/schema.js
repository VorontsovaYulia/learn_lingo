import * as yup from 'yup';

const regExpEmail = new RegExp(/^\S+@\S+.\S+$/);

export const schema = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  email: yup
    .string()
    .required('Email is required')
    .matches(regExpEmail, 'Invalid mail format'),
  phone: yup.string().required('Phone number is required'),
});
