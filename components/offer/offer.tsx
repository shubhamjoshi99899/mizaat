import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
interface Props {
  background?: any;
  image: any;
  marginBottom?: any;
}

const Offer: React.FC<Props> = ({ background, image, marginBottom }) => {
  return (
    <>
      <Box sx={{ background: { background }, px: 2, mb: { marginBottom } }}>
        <CardMedia component="img" height="auto" src={image} />
      </Box>
    </>
  );
};

export default Offer;
