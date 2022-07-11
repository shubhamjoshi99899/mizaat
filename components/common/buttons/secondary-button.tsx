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

const SecondaryButtonComponent = styled(Button)({
  boxShadow: "none",
  fontSize: "1.25rem",
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "46px",
  lineHeight: 0.5,
  backgroundColor: "transparent",
  color: "pink",
  border: "1px solid pink",

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

const SecondaryButton: React.FC<Props> = ({
  variant,
  buttonText,
  onClick,
  type,
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
    >
      {buttonText}
    </SecondaryButtonComponent>
  );
};
export default SecondaryButton;
