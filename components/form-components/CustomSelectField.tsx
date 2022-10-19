import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { MenuItem, OutlinedInput, styled } from "@mui/material";
import FormFieldLabels from "./field-label";
import theme from "../../styles/theme";

interface Props {
  id?: any;
  label?: string;
  placeholder?: string;
  value?: any;
  name?: string;
  type?: any;
  sx?: any;
  data?: any;
  select?: any;
  disabled?: any;

  onChange?: any;
  navbar?: any;
  error?: any;
  helperText?: any;
  formik?: any;
  fromConfig?: any;
  isNavbar?: boolean;
}

const StyledSelectField = styled(TextField)({
  fontWeight: 700,
  width: "100%",
  lineHeight: 1.5,
  borderRadius: "4px",
  color: "#fff",
  padding: "10px 14px !important",

  "& .MuiInputBase-root": {
    color: theme.palette.primary.main,
    height: "29px",
    fontWeight: 500,
    fontSize: "11px",
  },
  "& .Mui-focused": {
    outline: "0 !important",
    border: "none !important",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #CCE1FF",
  },
});

const CustomizedSelectField: React.FC<Props> = ({
  label,
  id,
  value,
  type,
  name,
  placeholder,
  sx,
  formik,
  isNavbar,
  disabled,
  data,
  navbar,
  error,
  onChange,
  helperText,
}) => {
  return (
    <Box>
      <FormFieldLabels>{label}</FormFieldLabels>
      <StyledSelectField
        InputProps={{
          style: {
            borderRadius: "4px",
            fontSize: isNavbar ? "11px" : "13px",
            fontWeight: "700",
            fontFamily: "Montserrat",
            boxShadow: "none",
            border: "none",
            lineHeight: "15.4px",

            backgroundColor: "rgba(234, 241, 251, 0.87)",
            color: "theme.palette.primary.main",
            width: "92px",
            height: "29px",
          },
          inputProps: {
            sx: {
              height: "29px",
              padding: "px",
              "&::placeholder": {
                color: "text",
                fontSize: "13px",
                fontWeight: "500",
              },
              "&::input": {
                color: "primary",
                fontSize: "11px",
                fontWeight: "500",
              },
            },
          },
        }}
        fullWidth
        select={true}
        SelectProps={{
          inputProps: {
            sx: {
              "&::input": {
                color: "primary",
                fontSize: "13px",
                fontWeight: "500",
              },
            },
          },
        }}
        onChange={onChange}
        value={value}
        id={id}
        name={name}
        sx={sx}
        error={error}
        label={isNavbar ? null : placeholder}
        helperText={helperText}
        disabled={disabled}
      >
        {data?.map((option: any) => (
          <MenuItem key={option.id} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </StyledSelectField>
    </Box>
  );
};
export default CustomizedSelectField;
