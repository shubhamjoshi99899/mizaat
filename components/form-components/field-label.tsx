import { Box, InputLabel } from "@mui/material";
import React from "react";
import theme from "../../styles/theme";

const FormFieldLabels = (props: any) => {
  return (
    <>
      <Box>
        <InputLabel
          sx={{
            marginBottom: "10px",
            fontWeight: "500",
            fontSize: "0.875rem",
            fontFamily: "Montserrat",
            lineHeight: "16px",
            color: theme.palette.secondary.dark,
          }}
        >
          {props.children}
        </InputLabel>
      </Box>
    </>
  );
};

export default FormFieldLabels;
