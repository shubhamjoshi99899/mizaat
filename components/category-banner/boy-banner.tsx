import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BannersComponent from "../categories/banners";
import Offer from "../offer/offer";

const BoyBanner = () => {
  return (
    <>
      <BannersComponent
        image="/images/boy.jpg"
        bannerHeading="Online Executive"
      />
      <Offer image="/images/free-shipping.jpg" />
      <Box sx={{ px: 2, pt: 2 }}>
        <Typography fontSize="1.25rem" fontWeight={700}>
          Summer Specials
        </Typography>
      </Box>

      <Grid container>
        <Grid xs={6}>
          <BannersComponent image="/images/sneaker.gif" />
        </Grid>
        <Grid xs={6}>
          <BannersComponent image="/images/boy-bottom.jpg" />
        </Grid>
      </Grid>
      <Offer marginBottom="20px" image="/images/free-shipping.jpg" />
    </>
  );
};

export default BoyBanner;
