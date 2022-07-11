import { styled, Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import theme from "../../../styles/theme";

const StyledTabs = styled(Tabs)({
  fontSize: "0.625rem",
  height: "35px",
  marginBottom: "20px",
  borderRadius: "4px",
  lineHeight: 1.5,
  color: theme.palette.grey[100],
  fontWeight: "700 !important",
  "	.MuiTabs-root": {
    fontWeight: "700 !important",
    letterSpacing: "0.04em",
    fontSize: "0.825rem",
  },
  "	.MuiTab-root": {
    fontWeight: "700 !important",
    fontSize: "0.825rem",
    letterSpacing: "0.04em",
    lineHeight: 1.5,
    border: "1px solid grey",
    marginLeft: "10px",
    borderRadius: "4px",
    minWidth: "auto",
  },
  "	.MuiTabs-indicator": {
    color: "black !important",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    width: "20px",
    height: "35px",
    verticalAlign: "middle",
  },
  "	.Mui-selected": {
    color: "#000 !important",
    fontWeight: "700",
    borderRadius: "4px",
    fontSize: "0.825rem",
    letterSpacing: "0.04em",
    lineHeight: " 20px",
    height: "35px",
    border: "2px solid red",
    zIndex: "1",
  },
  ".Mui-TouchRippleRoot": {
    zIndex: "0",
  },
});

interface Props {
  index?: number;
  category?: any;
  onTabChange?: any;
}

const PrimaryTab: React.FC<Props> = ({ category, onTabChange }) => {
  const [option, setOption] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, option: number) => {
    if (onTabChange) {
      onTabChange(option);
    }
    setOption(option);
  };

  return (
    <>
      <StyledTabs
        sx={{ marginBottom: "20px" }}
        value={option}
        onChange={handleTabChange}
      >
        {category?.map((option: any, index: number) => (
          <Tab key={index} label={option?.label}></Tab>
        ))}
      </StyledTabs>
    </>
  );
};

export default PrimaryTab;
