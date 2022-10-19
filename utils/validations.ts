import * as yup from 'yup'

export const SignUpValidationSchema = yup.object({
    phone:yup
    .string()
    // .min(10, 'Mobile number should be of 10 characters')
    .required("Mobile number is required"),

 

})

export const CompleteProfileValidationSchema = yup.object({
    first_name:yup
    .string()
    .required("First name is required"),

    last_name:yup
    .string()
    .required("Last name is required"),

    
    gender:yup
    .string()
    .required('Gender is required'),

    dob:yup
    .string()
    .required('Date of birth is required'),

    state_id:yup
    .string()
    .required('State is required'),

    city_id:yup
    .string()
    .required('City is required')

})
export const BuyCreditsValidationSchema = yup.object({
 credits:yup
 .string()
 .required("Credits is required"),

})