import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Rating,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useRouter } from "next/router";
import theme from "../../styles/theme";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddtoCartButton from "../common/buttons/add-to-cart";
import SecondaryButton from "../common/buttons/secondary-button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";

interface Props {
  data?: any;
  product?: any;
  onClick?: any;
}

const ProductListingCard: React.FC<Props> = ({ data, product, onClick }) => {
  const [openCart, setOpenCart] = useState<boolean>(false);
  const router = useRouter();
  const handleClick = () => {
    setOpenCart(!openCart);
  };
  const handleRoute = () => {
    router.push("/cart");
  };
  const dispatch = useDispatch();
  return (
    <>
      <Grid container>
        {data?.map((item: any, index: number) => (
          <Grid key={index} xs={6} md={4} lg={3}>
            <Card
              sx={{
                mx: 1,
                mb: 2,
                position: "relative",
                // height: {
                //   [theme.breakpoints.up("md")]: {
                //     height: "424px !important",
                //   },
                //   lg: "594px !important",
                //   xs: "414px !important",
                //   md: "454px !important",
                // },
              }}
            >
              <CardMedia
                sx={{
                  height: {
                    lg: "244px",
                    xs: "194px",
                    sm: "244px",
                    md: "244px",
                  },
                  // height: "194px",
                  objectFit: "cover",
                }}
                component="img"
                image={item?.image}
                onClick={() => {
                  router.push("/product/12");
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  backgroundColor: "red",
                  p: 1,
                }}
              >
                <Typography color="#fff">10% off</Typography>
              </Box>
              {/* <Box
              sx={{
                position: "absolute",
                bottom: 100,
                left: 50,
                display: "flex",
                justifyContent: "center",
                backgroundColor: "green",
                width: "auto",
                p: 1,
              }}
            >
              <Typography color="#fff">New</Typography>
            </Box> */}
              <CardActions
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon sx={{ color: "#FFB6C1" }} />
                </IconButton>
                <Rating
                  defaultValue={item.baseCost}
                  readOnly
                  size="small"
                  sx={{ fontSize: "12px" }}
                />
                <IconButton aria-label="share">
                  <ShareIcon sx={{ color: "#0000FF" }} />
                </IconButton>
              </CardActions>
              <Box sx={{ mx: 1 }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    sx={{ flexGrow: 1 }}
                    variant="h5"
                    fontWeight="600"
                    fontSize="1.15rem"
                  >
                    ₹{item?.price}
                  </Typography>
                  <Stack
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="center"
                  >
                    {/* {openCart ? (
                      <SecondaryButton
                        type="submit"
                        variant="contained"
                        buttonText="Add to Cart"
                        onClick={handleRoute}
                        sx={{ mt: "5px" }}
                        icon={
                          <ShoppingCartIcon
                            sx={{
                              height: "20px",
                              width: "20px",
                              color: "#fff",
                            }}
                          />
                        }
                      />
                    ) : ( */}
                    {/* <IconButton
                      sx={{
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        marginBottom: "20px",
                        backgroundImage:
                          "linear-gradient(1deg, #4F58FD, #149BF3 99%) !important",
                        backgroundColor: "#3EB2FD !important",
                      }}
                      onClick={() => dispatch(addToCart(item))}
                    >
                      <ShoppingCartIcon
                        sx={{
                          height: "20px",
                          width: "20px",
                          color: "#fff",
                        }}
                      />
                    </IconButton> */}
                    {/* )} */}
                  </Stack>
                </Stack>
                <Typography variant="body2" fontWeight="900">
                  {item?.brand}
                </Typography>
                <Typography mb={2} fontSize="0.75rem" variant="subtitle2">
                  {item?.name}
                </Typography>
                {/* <Typography
                  variant="subtitle1"
                  fontWeight="700"
                  gutterBottom
                  sx={{ marginBottom: 2 }}
                >
                  {item?.category}
                </Typography> */}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductListingCard;
