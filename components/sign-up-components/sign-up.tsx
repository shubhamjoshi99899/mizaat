import { Stack } from "@mui/material";
import React from "react";
import SignupFooter from "../../components/sign-up-components/signup-footer";
import SignUpBody from "../../components/sign-up-components/sign-up-body";

const SignUp = () => {
  return (
    <>
      <Stack
        direction="column"
        sx={{ columnGap: "16px", justifyContent: "space-evenly !important" }}
      >
        <SignUpBody />
        <SignupFooter />
      </Stack>
    </>
  );
};

export default SignUp;
