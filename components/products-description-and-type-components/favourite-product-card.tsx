import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import SecondaryButton from "../common/buttons/secondary-button";
const FavouriteProductCard = () => {
  return (
    <>
      <Card
        sx={{
          mx: 1,
          mb: 2,
          position: "relative",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box>
          <CardMedia
            component="img"
            image="/images/4.jpg"
            sx={{
              height: "300px",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "red",
              width: "auto",
              p: 1,
            }}
          >
            <Typography color="#fff">10% off</Typography>
          </Box>

          <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton aria-label="share">
              <CancelIcon sx={{ color: "red" }} />
            </IconButton>
          </CardActions>
          <Box sx={{ mx: 1, mb: 2 }}>
            <Typography variant="h5" fontWeight="700">
              ₹1904
            </Typography>
            <Typography variant="h6" fontWeight="500">
              Trousers Men Printed Black
            </Typography>
            <Typography variant="subtitle1" fontWeight="700">
              Trousers
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ m: 2, display: "flex", justifyContent: "center" }}>
            <SecondaryButton
              buttonText="Add to bag"
              variant="outlined"
              type="submit"
            />
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default FavouriteProductCard;
