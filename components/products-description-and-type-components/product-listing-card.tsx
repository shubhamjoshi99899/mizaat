import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
const ProductListingCard = () => {
  return (
    <>
      <Card sx={{ mx: 1, mb: 2, position: "relative" }}>
        <CardMedia
          height="194px"
          component="img"
          image="/images/boy.jpg"
          alt="Paella dish"
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            backgroundColor: "red",
            width: "auto",
            p: 1,
          }}
        >
          <Typography color="#fff">10% off</Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 60,
            left: 50,
            display: "flex",
            justifyContent: "center",
            backgroundColor: "green",
            width: "auto",
            p: 1,
          }}
        >
          <Typography color="#fff">New</Typography>
        </Box>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon sx={{ color: "#FFB6C1" }} />
          </IconButton>
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            readOnly
            size="small"
            sx={{ fontSize: "12px" }}
          />
          <IconButton aria-label="share">
            <ShareIcon sx={{ color: "#0000FF" }} />
          </IconButton>
        </CardActions>
      </Card>
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
    </>
  );
};

export default ProductListingCard;
