import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import theme from "../../../styles/theme";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface Props {
  index?: number;
  category?: any;
  onTabChange?: any;
}

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

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

const SecondaryTabs: React.FC<Props> = ({ category, onTabChange }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <StyledTabs value={value} onChange={handleChange}>
          {category?.map((option: any, index: number) => (
            <Tab key={index} label={option?.label}></Tab>
          ))}
        </StyledTabs>
      </Box>
    </Box>
  );
};
export default SecondaryTabs;
