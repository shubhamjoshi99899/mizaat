import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import theme from "../../styles/theme";
import { SignUpValidationSchema } from "../../utils/validations";
import PrimaryButton from "../common/buttons/primary-button";
import CustomInputField from "../form-components/CustomInputField";

const SignUpBody = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    validationSchema: SignUpValidationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  const handleSubmit = (values: any) => {
    router.push("/sign-up/otp-verification");
  };
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "89px 0px 12px",
        }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            width: "56px",
            height: "56px",
            backgroundColor: "#EAF1FB",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <Image
            src="/icons/signup.svg"
            width="20px"
            height="15px"
            alt="signup"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center !important",
          }}
        >
          {/* <SignUpTwoLayerText
            text1="Welcome to Bookview"
            text2="Login / sign up to continue"
            marginBottomText2="29px"
          /> */}
        </Box>
        <Box sx={{ padding: "0px 20px" }}>
          <form onSubmit={formik.handleSubmit}>
            <CustomInputField
              isPhoneNumber
              variant="outlined"
              formik={formik}
              placeholder="Please enter your 10 digit phone number"
              name="phone"
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              value={formik.values.phone}
              helperText={formik.touched.phone && formik.errors.phone}
              label="Phone number*"
              sx={{ width: "100%", marginBottom: "20px" }}
            />
            <PrimaryButton
              sx={{
                marginBottom: "17px",
                "&:disabled": {
                  backgroundColor: theme.palette.primary || "red",
                },
              }}
              buttonText="Submit"
              type="submit"
              variant="contained"
              disabled={formik.values.phone.length < 10 ? true : false}
            />
          </form>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="subtitle2"
              component="p"
              fontSize="0.75rem"
              font-weight="500"
              lineHeight="21px"
              sx={{ color: theme.palette.grey[100] }}
            >
              {""}
              By continuing, you agree with our&nbsp;
              <Typography
                variant="subtitle2"
                component="span"
                font-weight="400"
                color="secondary"
                fontSize="0.75rem"
                sx={{ color: "#2C83FF !important" }}
              >
                Terms of Use&nbsp;
              </Typography>{" "}
              and&nbsp;
              <Typography
                variant="subtitle2"
                component="span"
                fontSize="0.75rem"
                font-weight="400"
                color="secondary"
                sx={{ color: "#2C83FF !important" }}
              >
                Privacy Policy
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default SignUpBody;
