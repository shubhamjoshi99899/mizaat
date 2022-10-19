import { Button, styled } from "@mui/material";
import React from "react";
import theme from "../../../styles/theme";

interface Props {
  handleClick: any;
  buttontext?: any;
}

const StyledButton = styled(Button)({
  boxShadow: "none !important",
  backgroundImage: "linear-gradient(1deg, #4F58FD, #149BF3 99%) !important",
  backgroundColor: "#3EB2FD !important",
  borderRadius: "100px",
  padding: "4px 20px",
  textAlign: "center",
  fontSize: "0.75rem",
  display: "inline-flex",

  cursor: "pointer",
  fontWeight: 700,
  transition: "backgroundColor .2s,background-position .2s",
  lineHeight: 1,
  color: "#fff",
  justifyContent: "center",

  "&.Mui-hover": {
    backgroundPosition: "-20px -20px",
  },

  "& .MuiInputBase-root": {
    color: theme.palette.primary.main,
    height: 60,
    fontWeight: 500,
    fontSize: "0.8125rem",
  },
  "& .Mui-focused": {
    outline: "0 !important",
    border: "none !important",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid red",
  },
});

const AddtoCartButton: React.FC<Props> = (handleClick, buttontext) => {
  return (
    <>
      <StyledButton onClick={() => handleClick}>{buttontext}</StyledButton>
    </>
  );
};

export default AddtoCartButton;
