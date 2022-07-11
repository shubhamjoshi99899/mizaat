import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          right: "0",
          left: "0",
          bottom: 0,
          background: "#000",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" color="#fff">
          All rights reserved
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
