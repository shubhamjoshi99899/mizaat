import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@mui/material";
import ProductCard from "./product-card";
import axios from "axios";

interface props {
  marginBottom?: any;
}

const TopSelling: React.FC<props> = ({ marginBottom }) => {
  const settings = {
    className: "center",
    center: "center",
    speed: 500,
    slidesToScroll: 1,
    variableWidth: true,
  };
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get("https://fakestoreapi.com/products").then(function (res) {
      let data = res.data;
      console.log(data);
      setData(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Box sx={{ overflowX: "hidden", marginBottom: { marginBottom } }}>
        <Slider {...settings}>
          {data.map((data: any, index: number) => (
            <Box key={index}>
              <ProductCard
                image={data.image}
                alt="product"
                product_name={data.title}
                product_price={data.price}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default TopSelling;
