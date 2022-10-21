import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import SignUpTwoLayerText from "../common/two-layer-text";
import { CompleteProfileValidationSchema } from "../../validation/validation-schema";
import CustomInputField from "../form-components/CustomInputField";
import CustomizedSelectField from "../form-components/CustomSelectField";
import CustomizedDatePicker from "../form-components/date-picker";
import SecondaryButton from "../common/buttons/secondary-button";
import SelectField from "../form-components/SelectField";
import { useRouter } from "next/router";
import PrimaryButton from "../common/buttons/primary-button";

const gender = [
  { id: 1, name: "Male" },
  { id: 2, name: "female" },
];

const state = [
  { id: 1, name: "Telangana" },
  { id: 2, name: "Karnatka" },
  { id: 3, name: "Tamil Nadu" },
  { id: 4, name: "Kerala" },
  { id: 5, name: "Goa" },
];

const city = [
  { id: 1, name: "Hyderabad" },
  { id: 2, name: "Bangalore" },
  { id: 3, name: "Chennai" },
  { id: 4, name: "Tiruvantapuram" },
  { id: 5, name: "Panaji" },
];

const SignupCompleteProfile = () => {
  const router = useRouter();
  const [dob, setDob] = React.useState<Date | null>(null);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      state: "",
      city: "",
      dob: "",
    },

    validationSchema: CompleteProfileValidationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  const handleChangeStart = (newValue: Date | null) => {
    setDob(newValue);
    formik.setFieldValue("dob", newValue);
  };
  const handleSubmit = (values: any) => {
    router.push("/library");
  };
  return (
    <>
      <Box sx={{ padding: "33px 20px" }}>
        <SignUpTwoLayerText
          text1="Complete your Profile"
          text2="Please enter your details below to continue."
          marginBottomText2="30px"
        />
        <form onSubmit={formik.handleSubmit}>
          <Grid sx={{ marginBottom: " 20px" }} container spacing={2.4}>
            <Grid item xs={6}>
              <CustomInputField
                label="First Name*"
                placeholder="First name"
                formik={formik}
                name="first_name"
                variant="outlined"
                error={
                  formik.touched.first_name && Boolean(formik.errors.first_name)
                }
                value={formik.values.first_name}
                helperText={
                  formik.touched.first_name && formik.errors.first_name
                }
              />
            </Grid>
            <Grid item xs={6}>
              <CustomInputField
                sx={{
                  ".MuiTextField-root": {
                    color: "red",
                  },
                }}
                label="Last Name*"
                placeholder="Last name"
                formik={formik}
                name="last_name"
                variant="outlined"
                error={
                  formik.touched.last_name && Boolean(formik.errors.last_name)
                }
                value={formik.values.last_name}
                helperText={formik.touched.last_name && formik.errors.last_name}
              />
            </Grid>
          </Grid>

          <CustomInputField
            label="Email address*"
            placeholder="Please enter your Email Address"
            formik={formik}
            name="email"
            variant="outlined"
            sx={{ marginBottom: "20px" }}
            error={formik.touched.email && Boolean(formik.errors.email)}
            value={formik.values.email}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Grid sx={{ marginBottom: " 20px" }} container spacing={2.4}>
            <Grid item xs={6}>
              <SelectField
                label="Gender*"
                data={gender}
                placeholder="Select Gender"
                name="gender"
                onChange={formik.handleChange}
                select
                id="gender"
                value={formik.values.gender}
                helperText={formik.touched.gender && formik.errors.gender}
                error={formik.touched.gender && Boolean(formik.errors.gender)}
              />
            </Grid>
            <Grid item xs={6}>
              {/* <CustomizedDatePicker
                // value={dob}
                label="Date of Birth*"
                handleChange={formik.handleChange}
                name="dob"
                id="dob"
                onChange={handleChangeStart}
                helperText={formik.touched.dob && formik.errors.dob}
                error={formik.touched.dob && Boolean(formik.errors.dob)}
              /> */}
            </Grid>
          </Grid>
          <Grid sx={{ marginBottom: " 32px" }} container spacing={2.4}>
            <Grid item xs={6}>
              <SelectField
                label="State*"
                data={state}
                placeholder="Select State"
                name="state"
                onChange={formik.handleChange}
                select
                id="state"
                value={formik.values.state}
                helperText={formik.touched.state && formik.errors.state}
                error={formik.touched.state && Boolean(formik.errors.state)}
              />
            </Grid>
            <Grid item xs={6}>
              <SelectField
                label="City*"
                data={city}
                placeholder="Select city"
                name="city"
                select
                onChange={formik.handleChange}
                id="city"
                value={formik.values.city}
                helperText={formik.touched.city && formik.errors.city}
                error={formik.touched.city && Boolean(formik.errors.city)}
              />
            </Grid>
          </Grid>
          <PrimaryButton
            buttonText="Complete Profile"
            type="submit"
            variant="contained"
          />
        </form>
      </Box>
    </>
  );
};

export default SignupCompleteProfile;
