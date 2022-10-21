import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import SecondaryButton from "../common/buttons/secondary-button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../redux/cart.slice";

interface Props {
  onClick?: any;
  item: any;
}
const CartProductCard: React.FC<Props> = ({ item }) => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator: any, item: any) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <Box mb={10}>
      <Card
        sx={{
          mx: 1,
          mb: 2,
          position: "relative",
          border: "1px solid #efefef",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <Grid container alignItems={"center"}>
            <Grid xs={6}>
              <CardMedia
                component="img"
                image="https://cdn.shopify.com/s/files/1/0661/7423/products/never-stop-playin-right-view_1080x.jpg?v=1657530964"
                sx={{
                  // height: "20vh",
                  height: "230px",

                  width: "300px",
                  objectFit: "fill",
                }}
              />
            </Grid>
            <Grid xs={6}>
              <Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "green",
                    width: "auto",
                    p: 1,
                  }}
                >
                  <Typography color="#fff">Available</Typography>
                </Box>

                <CardActions
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  {/* <IconButton
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    aria-label="share"
                    sx={{ position: "absolute", top: 0, left: 0 }}
                  >
                    <CancelIcon
                      sx={{
                        color: "red",
                        position: "absolute",
                        top: 0,
                        right: 50,
                      }}
                    />
                  </IconButton> */}
                </CardActions>
                <Box sx={{ mx: 1, mb: 2 }}>
                  <Typography variant="h5" fontWeight="700">
                    {item.name}
                  </Typography>
                  <Typography variant="h6" fontWeight="500">
                    {item.price}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="700">
                    {item.type}
                  </Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <IconButton
                      onClick={() => dispatch(decrementQuantity(item.id))}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="h5">{item.quantity}</Typography>

                    <IconButton
                      onClick={() => dispatch(incrementQuantity(item.id))}
                    >
                      <AddIcon />
                    </IconButton>
                  </Stack>
                </Box>
                <Stack direction="row" justifyContent="flex-end">
                  <Typography mr={2} mb={2} variant="h6" fontWeight={700}>
                    Qty: {item.quantity}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider />

        <Grid container justifyContent="center" p={1}>
          <Grid
            textAlign="center"
            xs={6}
            sx={{ borderRight: "1px solid black" }}
          >
            <Button
              sx={{ textAlign: "center", fontWeight: "900" }}
              variant="text"
              type="submit"
            >
              Add to favourite
            </Button>
          </Grid>
          <Grid textAlign="center" xs={6}>
            <Button
              sx={{
                textAlign: "center",
                color: "red",
                fontWeight: "900",
              }}
              variant="text"
              type="submit"
            >
              Remove
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default CartProductCard;
