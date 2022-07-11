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
  disabled?: boolean;
}

const PrimaryButtonComponent = styled(Button)({
  boxShadow: "none",
  fontSize: "0.75rem",
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "46px",
  border: "1px solid",
  lineHeight: 0.5,
  backgroundColor: "black !important",
  color: "#fff",

  "&:hover": {
    transition: "0.2s ease-in",
    backgroundColor: "#031637",
    boxShadow: "none",
  },
  "&.Mui-disabled": {
    backgroundColor: "#041E49 !important",
    opacity: "54%",
    color: "#fff",
  },
});

const PrimaryButton: React.FC<Props> = ({
  variant,
  buttonText,
  onClick,
  type,
  disabled,
  sx,
}) => {
  return (
    <PrimaryButtonComponent
      sx={sx}
      variant={variant}
      disabled={disabled}
      type={type}
      onClick={onClick}
      disableRipple
    >
      {buttonText}
    </PrimaryButtonComponent>
  );
};
export default PrimaryButton;
