import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box, FormHelperText } from "@mui/material";
import FormFieldLabels from "./field-label";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

interface Props {
  id?: any;
  label?: string;
  placeholder?: string;
  value?: any;
  name?: string;
  sx?: any;
  select?: any;
  disabled?: any;
  data?: any;
  onChange?: any;
  navbar?: any;
  error?: any;
  helperText?: any;
  fromConfig?: any;
  isNavbar?: boolean;
}
const SelectField: React.FC<Props> = ({
  label,
  id,
  value,
  name,
  placeholder,
  data,
  sx,
  isNavbar,
  navbar,
  error,
  onChange,
  helperText,
}) => {
  const theme = useTheme();

  return (
    <Box>
      <FormFieldLabels>{label}</FormFieldLabels>

      <Select
        style={{
          borderRadius: "4px",
          fontSize: isNavbar ? "11px" : "13px",
          fontWeight: "500",
          fontFamily: "Montserrat",
          paddingRight: "24px",
          boxShadow: "none",
          lineHeight: "15.4px",
          backgroundColor: "rgba(234, 241, 251, 0.87)",
          color: "#000",
          height: navbar ? "29px" : "46px",
        }}
        fullWidth
        error={error}
        displayEmpty
        value={value}
        name={name}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #CCE1FF",
          },
        }}
        id={id}
        onChange={onChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected?.length === 0) {
            return (
              <>
                <Box
                  sx={{
                    color: "rgba(4, 30, 73, 0.34)",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                  }}
                >
                  {placeholder}
                </Box>
              </>
            );
          }
          return selected;
        }}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
      >
        {data?.map((option: any) => (
          <MenuItem key={option.id} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText sx={{ color: "red" }}>{helperText}</FormHelperText>
    </Box>
  );
};
export default SelectField;
