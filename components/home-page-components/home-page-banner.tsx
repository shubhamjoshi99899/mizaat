import { PriceChange } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import theme from "../../styles/theme";
import PrimaryButton from "../common/buttons/primary-button";
import { useRouter } from "next/router";

const HomePageBanner = () => {
  const router = useRouter();
  return (
    <>
      <Stack
        alignItems="center"
        justifyContent="space-evenly"
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          // flexWrap: "wrap",
          padding: 10,
          background: theme.palette.primary.light,
          // height: { sm: "700px" },
        }}
      >
        <Box
          sx={{
            display: { sm: "none", xs: "none", md: "block", lg: "block" },
            overflow: "hidden !important",
          }}
        >
          <Image
            src="/images/7.png"
            width="330px"
            height="500px"
            alt="home-image"
            style={{ overflow: "hidden" }}
          />
        </Box>
        <Stack
          alignItems="center"
          sx={{
            flexDirection: { xs: "column" },
            textAlign: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            letterSpacing="0.3em"
            fontWeight="600"
            textTransform="uppercase"
          >
            #New_Summer_Collection_2022
          </Typography>
          <Typography
            variant="h1"
            fontSize="5.625rem"
            fontWeight="900"
            textAlign="center"
            textTransform="uppercase"
            mb={4}
          >
            Arrival <br /> Sales
          </Typography>
          <PrimaryButton
            type="submit"
            buttonText="Shop Now"
            variant="contained"
            sx={{ background: "#000", width: "124px", textAlign: "center" }}
            onClick={() => {
              router.push("/home");
            }}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default HomePageBanner;
