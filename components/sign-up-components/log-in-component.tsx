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
const LoginComponent = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: CompleteProfileValidationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  const handleSubmit = (values: any) => {};
  return (
    <>
      <Box sx={{ padding: "33px 20px", marginBottom: "30px" }}>
        <SignUpTwoLayerText
          text1="Login"
          text2="Please enter your credentials below to login."
          marginBottomText1="12px"
          marginBottomText2="20px"
        />
        <form onSubmit={formik.handleSubmit}>
          <CustomInputField
            label="Email adress"
            placeholder="Please enter your Email Adress"
            formik={formik}
            name="email"
            variant="outlined"
            sx={{ marginBottom: "20px" }}
            error={formik.touched.email && Boolean(formik.errors.email)}
            value={formik.values.email}
            helperText={formik.touched.email && formik.errors.email}
          />
          <CustomInputField
            label="Password"
            placeholder="Please enter your Password"
            formik={formik}
            name="password"
            variant="outlined"
            sx={{ marginBottom: "20px" }}
            error={formik.touched.password && Boolean(formik.errors.password)}
            value={formik.values.password}
            helperText={formik.touched.password && formik.errors.password}
          />
          <SecondaryButton
            buttonText="Login"
            type="submit"
            variant="contained"
            sx={{ width: "100%", p: 2, fontSize: "20px" }}
          />
        </form>
      </Box>
    </>
  );
};

export default LoginComponent;
