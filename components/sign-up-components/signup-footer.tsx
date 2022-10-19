import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import theme from "../../styles/theme";

const SignupFooter = () => {
  return (
    <>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#F2F2F2",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          height: "64px",
          padding: "17px 0 15px",
          boxShadow: "none",
        }}
      >
        <Typography
          fontFamily="Montserrat"
          variant="caption"
          sx={{
            fontWeight: 500,
            color: theme.palette.grey[500],
            fontSize: "0.6875rem",
            lineHeight: "1em",
            marginBottom: "2px",
          }}
        >
          Terms of use | Privacy policy{" "}
        </Typography>
        <Typography
          fontFamily="Montserrat"
          variant="caption"
          sx={{
            fontWeight: 500,
            fontSize: "0.6875rem",
            color: theme.palette.grey[500],
            lineHeight: "1em",
          }}
        >
          © 2022 Bookview. All rights reserved.
        </Typography>
      </Paper>
    </>
  );
};

export default SignupFooter;
