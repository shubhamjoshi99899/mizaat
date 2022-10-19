import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import FormFieldLabels from "../form-components/field-label";
import theme from "../../styles/theme";
interface Props {
  label: string;
  placeholder?: string;
  sx?: any;
  select?: any;
  className?: any;
  onChange?: any;
  error?: any;
  helperText?: any;
  start_date?: any;
  formik?: any;
  value?: any;
  name?: any;
  id?: any;
  handleChange?: any;
}

const CustomizedDatePicker: React.FC<Props> = ({
  label,
  error,
  name,
  id,
  helperText,
  onChange,
  handleChange,
  value,
  formik,
}) => {
  return (
    <Box>
      <FormFieldLabels>{label}</FormFieldLabels>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DesktopDatePicker
          InputProps={{
            style: {
              height: "46px",
              borderRadius: "4px",
              fontSize: "13px",
              fontWeight: 500,
              color: theme.palette.primary.main,
              boxShadow: "none",
              backgroundColor: theme.palette.grey[300],
            },
          }}
          value={value}
          onChange={onChange}
          renderInput={(params) => (
            <TextField
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #CCE1FF",
                },
              }}
              {...params}
              fullWidth
              error={error}
              name={name}
              id={id}
              helperText={helperText}
              onChange={handleChange}
            />
          )}
        />
      </LocalizationProvider>
    </Box>
  );
};
export default CustomizedDatePicker;
