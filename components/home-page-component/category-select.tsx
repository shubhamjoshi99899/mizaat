import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Avatar, Box, Card, Stack, Typography } from "@mui/material";

interface Props {
  marginBottom?: any;
}

const CategorySelect: React.FC<Props> = ({ marginBottom }) => {
  const settings = {
    className: "center",
    center: "center",
    speed: 500,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const data = [
    {
      image:
        "https://centralandme.com/wp-content/uploads/2017/09/sweat-shirt-thumb.jpg",
      category: "Men",
    },
    {
      image:
        "https://images.unsplash.com/photo-1619516388835-2b60acc4049e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      category: "Women",
    },
    {
      image:
        "https://media.nihalfashions.com/media/wysiwyg/gowns-for-girls.jpg",
      category: "Kids",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/1666/1177/collections/body-responsive-ecommerce-fitness-gym-sports-center-shopify-theme-collection-image-1-themetidy_1024x1024.jpg?v=1482215278",
      category: "Fitness",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/kyxb9u80/shoe/p/a/q/6-3399-whitehub-white-original-imagbfzygjff8ngp.jpeg?q=70",
      category: "Footwear",
    },
    {
      image: "https://static.toiimg.com/photo/msid-88078836/88078836.jpg?44602",
      category: "InnerWear",
    },
  ];

  return (
    <Box sx={{ overflowX: "hidden", marginBottom: { marginBottom } }}>
      <Slider {...settings}>
        {data.map((item: any, index: number) => (
          <Box key={index} sx={{ mr: 1, width: "100px" }}>
            <Stack sx={{ textAlign: "center" }}>
              <Avatar
                sx={{ width: "120px", height: "120px", mb: "10px" }}
                src={item.image}
              />
              <Typography sx={{ ml: "-15px" }} variant="h6">
                {item.category}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CategorySelect;
