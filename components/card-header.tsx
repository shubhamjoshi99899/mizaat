import { Stack, Typography } from "@mui/material";
import React from "react";
import theme from "../styles/theme";

interface Props {
  isSearching?: boolean;
  text1?: string;
}

const CardHeaders: React.FC<Props> = ({ text1 }) => {
  return (
    <Stack flexDirection="row" justifyContent="space-between">
      <Typography
        sx={{
          fontWeight: 900,
          fontSize: "1.175rem",
          lineHeight: "19.5px",
          letterSpacing: "0.07em",
          marginBottom: "10px",
        }}
        variant="h6"
      >
        {text1}
      </Typography>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "0.875rem",
          paddingRight: "20px",
          letterSpacing: "0.07em",
          color: theme.palette.primary.dark,
        }}
        variant="body2"
        component="p"
      >
        See All
      </Typography>
    </Stack>
  );
};

export default CardHeaders;
