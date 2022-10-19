import * as yup from 'yup'


export const CompleteProfileValidationSchema = yup.object({
    first_name:yup
    .string()
    .required("First name is required"),

    last_name:yup
    .string()
    .required("Last name is required"),

    email:yup
    .string()
    .email('Enter a valid email')
    .required("Email is required"),

    gender:yup
    .string()
    .required('Gender is required'),

    dob:yup
    .string()
    .required('Date of birth is required'),

    state:yup
    .string()
    .required('State is required'),

    city:yup
    .string()
    .required('City is required')

})