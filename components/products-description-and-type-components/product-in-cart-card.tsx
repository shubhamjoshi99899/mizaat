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

interface Props {
  onClick?: any;
}
const CartProductCard: React.FC<Props> = () => {
  const [quantity, setQauntity] = useState<number>(1);
  const addProduct = () => {
    setQauntity(quantity + 1);
  };
  const removeProduct = () => {
    setQauntity(quantity - 1);
  };

  return (
    <>
      <Card
        sx={{
          mx: 1,
          mb: 2,
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <Box>
            <CardMedia
              component="img"
              image="/images/4.jpg"
              sx={{
                height: "200px",
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
                backgroundColor: "green",
                width: "auto",
                p: 1,
              }}
            >
              <Typography color="#fff">Available</Typography>
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
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <IconButton onClick={removeProduct}>
                  <RemoveIcon />
                </IconButton>
                <Typography variant="h5">{quantity}</Typography>

                <IconButton onClick={addProduct}>
                  <AddIcon />
                </IconButton>
              </Stack>
            </Box>
            <Stack direction="row" justifyContent="flex-end">
              <Typography mb={2} variant="h6" fontWeight={700}>
                Qty: {quantity}
              </Typography>
            </Stack>
          </Box>
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
    </>
  );
};

export default CartProductCard;
