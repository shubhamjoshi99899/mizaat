import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import { styled } from "@mui/material/styles";
import theme from "../../styles/theme";
interface Props {
  id?: any;
  placeholder?: string;
  value?: any;
  formik?: any;
  name?: any;
  sx?: any;
  typing?: boolean;
  onCancelClick?: any;
  onbackClick?: any;
  onChange?: any;
  goback?: boolean;
  autoFocus?: boolean;
  onClick?: any;
  onFocus?: any;
  searching?: boolean;
  type?: any;
}
const SearchField = styled(TextField)({
  boxShadow: "none",
  fontSize: "0.75rem",
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "50px",
  borderRadius: "4px",

  "& .MuiInputBase-root": {
    color: theme.palette.grey[100],
    height: "50px",
    fontWeight: 700,
    fontSize: "0.9375rem",
    letterSpacing: "0.25px",
    paddingRight: "0px !important",
    paddingLeft: "0px !important",
  },
  "& .MuiOutlinedInput-notchedOutline": {},
  "& .focus": {
    border: "1px solid #CCE1FF",
  },
});

const SearchFieldComponent: React.FC<Props> = ({
  id,
  autoFocus,
  onClick,
  onbackClick,
  placeholder,
  value,
  name,
  onCancelClick,
  sx,
  onChange,
  onFocus,
  goback,
  type,
  typing,
}) => {
  return (
    <>
      <SearchField
        InputProps={{
          style: {
            height: "50px",
            borderRadius: "4px",
            fontSize: "0.875rem",
          },
          inputProps: {
            sx: {
              "&::placeholder": {
                color: "text",
                fontSize: "0.8125rem",
                fontWeight: "500",
              },
            },
          },
          endAdornment: typing ? (
            <InputAdornment position="start">
              <IconButton sx={{ padding: "18px" }} onClick={onCancelClick}>
                <Image
                  src="/icons/cancel.svg"
                  width="14px"
                  height="14px"
                  alt="back"
                />
              </IconButton>
            </InputAdornment>
          ) : (
            <InputAdornment position="start">
              <IconButton sx={{ padding: "18px" }}>
                <Image
                  src="/icons/search.svg"
                  width="18px"
                  height="18px"
                  alt="search"
                />
              </IconButton>
            </InputAdornment>
          ),
          startAdornment: goback ? (
            <InputAdornment position="start">
              <IconButton sx={{ padding: "17px 18px 19px" }}>
                <Image
                  src="/icons/back.svg"
                  width="10px"
                  height="16px"
                  onClick={onbackClick}
                  alt="back"
                />
              </IconButton>
            </InputAdornment>
          ) : null,
        }}
        autoFocus={autoFocus}
        id={id}
        fullWidth
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onClick={onClick}
        onFocus={onFocus}
        name={name}
        sx={sx}
        type={type ? type : "text"}
      />
    </>
  );
};

export default SearchFieldComponent;
