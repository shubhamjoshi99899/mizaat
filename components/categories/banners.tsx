import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";

interface Props {
  image?: any;
  onClick?: any;
  bannerHeading?: string;
  marginBottom?: any;
}

const BannersComponent: React.FC<Props> = ({
  image,
  onClick,
  bannerHeading,
  marginBottom,
}) => {
  return (
    <>
      {" "}
      <Box sx={{ p: 2, marginBottom: { marginBottom } }}>
        {bannerHeading ? (
          <Typography fontSize="20px" fontWeight={700} marginBottom="12px">
            {bannerHeading}
          </Typography>
        ) : null}

        <Card onClick={onClick}>
          <CardMedia component="img" height="auto" image={image} />
        </Card>
      </Box>
    </>
  );
};

export default BannersComponent;
