import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import theme from "./../../../styles/theme";

type VariantProps = "outlined" | "contained" | "text" | undefined;
interface Props {
  variant: VariantProps;
  buttonText: string;
  onClick?: any;
  sx?: any;
  type: any;
  icon?: any;
  disabled?: boolean;
}

const SecondaryButtonComponent = styled(Button)({
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

const SecondaryButton: React.FC<Props> = ({
  variant,
  buttonText,
  onClick,
  type,
  icon,
  disabled,
  sx,
}) => {
  return (
    <SecondaryButtonComponent
      sx={sx}
      variant={variant}
      disabled={disabled}
      type={type}
      onClick={onClick}
      disableRipple
      endIcon={icon}
    >
      {buttonText}
    </SecondaryButtonComponent>
  );
};
export default SecondaryButton;
