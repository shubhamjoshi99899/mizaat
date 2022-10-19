import { InputLabel, styled, TextField } from "@mui/material";
import React from "react";
import theme from "../../styles/theme";
import FormFieldLabels from "./field-label";

interface Props {
  id?: any;
  label?: string;
  variant: any;
  required?: any;
  placeholder: string;
  value: any;
  formik?: any;
  name: any;
  helperText: any;
  sx?: any;
  type?: any;
  isPhoneNumber?: any;
  error?: any;
}
const StyledTextField = styled(TextField)({
  boxShadow: "none !important",
  fontSize: "12px",
  fontWeight: 700,
  width: "100%",
  lineHeight: 1.5,
  borderRadius: "4px",
  color: "#fff",

  "& .MuiInputBase-root": {
    color: theme.palette.primary.main,
    height: 60,
    fontWeight: 500,
    fontSize: "13px",
  },
  "& .Mui-focused": {
    outline: "0 !important",
    border: "none !important",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #CCE1FF",
  },
});
const CustomInputField: React.FC<Props> = ({
  id,
  label,
  variant,
  required,
  placeholder,
  value,
  name,
  formik,
  isPhoneNumber,
  error,
  sx,
  helperText,
  type,
}) => {
  return (
    <>
      <FormFieldLabels>{label}</FormFieldLabels>
      <StyledTextField
        InputProps={{
          style: {
            height: "46px",
            borderRadius: "4px",
            fontSize: "14px",
            boxShadow: "none",
            backgroundColor: "rgba(234, 241, 251, 0.87)",
            boxSizing: "inherit",
            padding: "0px !important",
          },
          inputProps: {
            maxLength: isPhoneNumber && 10,
            sx: {
              padding: "12px 0px 15px 13px",
              "&::placeholder": {
                color: "text",
                fontSize: "13px !important",
                fontWeight: "500",
              },
              "&::input": {
                color: "primary",
                fontSize: "15px",
                fontWeight: "500",
              },
              "&::focus": {
                color: "primary",
                fontSize: "15px",
                fontWeight: "500",
                border: "none",
              },
            },
          },
        }}
        id={id}
        variant={variant}
        fullWidth
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={formik.handleChange}
        error={error}
        name={name}
        helperText={helperText}
        sx={sx}
        type={type ? type : "text"}
      />
    </>
  );
};

export default CustomInputField;
