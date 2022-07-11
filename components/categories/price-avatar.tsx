import styled from "@emotion/styled";
import { Avatar, Badge, Grid, Typography } from "@mui/material";
import React from "react";

interface Props {
  image?: any;
  price?: any;
  category?: any;
}

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 82,
  height: 82,
  border: `2px solid white`,
  backgroundColor: "yellow",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  overflow: "hidden",
  zIndex: 0,
}));
const PriceAvatar: React.FC<Props> = ({ image, price, category }) => {
  return (
    <>
      <Grid container spacing={2}>
        {category?.map((categories: any, index: number) => (
          <Grid key={index} xs={6} sx={{ my: 2 }}>
            <Badge
              sx={{ zIndex: 0 }}
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <SmallAvatar alt="Remy Sharp">
                  <Typography fontWeight="700" fontSize="18px" color="#000">
                    ₹ {categories.price} onwards
                  </Typography>
                </SmallAvatar>
              }
            >
              <Avatar
                src={categories.image}
                sx={{ width: "146px", height: "146px", marginBottom: "12px" }}
              />
            </Badge>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PriceAvatar;
