import { Box, Card, IconButton, Typography } from "@mui/material";
import axios from "axios";
import { AnyTxtRecord } from "dns";
import Image from "next/image";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
interface Props {
  image?: any;
  width?: any;
  height?: any;
  alt?: string;
  product_name?: string;
  product_price?: string;
}

const ProductCard: React.FC<Props> = ({
  image,
  width,
  alt,
  product_name,
  product_price,
}) => {
  return (
    <>
      <Card
        sx={{
          mx: 1,
          my: 1,
          mb: 3,
          textAlign: "center",
          boxShadow: "1px solid #f1f1f1",
          position: "relative",
        }}
      >
        <Box
          sx={{
            margin: "20px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton
            sx={{ fontWeight: 700, position: "absolute", right: 0, top: 0 }}
          >
            <FavoriteBorderIcon />
          </IconButton>
          <img
            style={{ width: "100px", height: "150px", textAlign: "center" }}
            src={image}
            alt={alt}
          />
        </Box>
      </Card>

      <Box
        sx={{
          width: "200px",
          height: "auto",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "200px",
            height: "50px",
            fontSize: "16px",
            textAlign: "center",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          variant="subtitle1"
        >
          {product_name}
        </Typography>
        <Typography
          sx={{ display: "flex", justifyContent: "center" }}
          variant="h6"
        >
          {" "}
          ₹{product_price}
        </Typography>
      </Box>
    </>
  );
};

export default ProductCard;
