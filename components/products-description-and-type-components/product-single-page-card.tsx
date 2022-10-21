import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Paper,
  Radio,
  RadioGroup,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";
import React, { useState } from "react";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { GifBoxRounded } from "@mui/icons-material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import SelectField from "../form-components/select-field";
import PrimaryButton from "../common/buttons/primary-button";
import ShareSocial from "../common/modal/share-social";

const images = [
  {
    image:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc6%2F46%2Fc646f5d2bc13bb7819eba4df5167911d85969b3e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hoodies-1649354079.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    image:
      "https://pyxis.nymag.com/v1/imgs/f9f/a12/88e8f52eeb5024d62b0a1e5a97bae90140-riverside-tool-dye-hoodie.2x.rsquare.w600.jpg",
  },
];

const sizes = [
  { id: "1", name: "S" },
  { id: "2", name: "M" },
  { id: "3", name: "L" },
  { id: "4", name: "XL" },
  { id: "5", name: "XXL" },
];

const colors = [
  { id: "1", name: "Black" },
  { id: "2", name: "Pink" },
  { id: "3", name: "Red" },
  { id: "4", name: "Green" },
  { id: "5", name: "Yellow" },
];

interface Props {
  open?: any;
  handleClose?: any;
  handleOpen?: any;
}
const ProductSinglePageCard: React.FC<Props> = ({
  open,
  handleClose,
  handleOpen,
}) => {
  const [value, setValue] = React.useState(null);
  const [image, setImage] = React.useState("");
  const dispatch = useDispatch();
  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Box sx={{ mb: 10 }}>
        <ShareSocial open={open} handleClose={handleClose} />
        <Typography textAlign="center" variant="h5" fontWeight={700}>
          HnM Full Sleeves Hoodie
        </Typography>
        <Typography textAlign="center" variant="h4" fontWeight={700}>
          ₹ 1399.00
        </Typography>
        <Grid container alignItems="center" justifyContent="space-evenly">
          <Grid xs={12} md={6} lg={4}>
            <Card
              sx={{
                m: 2,
                boxShadow: "none",
                borderRadius: "16px",
                position: "relative",
              }}
            >
              <CardMedia
                component="img"
                height="auto"
                image={image ? image : images[0]?.image}
                alt="green iguana"
                sx={{}}
              />
              <IconButton sx={{ position: "absolute", top: 3, right: 3 }}>
                <FavoriteBorderIcon sx={{ fontSize: "40px" }} />
              </IconButton>
            </Card>
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Stack direction="row">
              {images.map((img: any, index: number) => (
                <CardMedia
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    my: 4,
                    mx: 2,
                    height: "65px",
                    borderRadius: "14px",
                    width: "65px",
                  }}
                  key={index}
                  image={img.image}
                  onClick={() => {
                    setImage(img.image);
                  }}
                ></CardMedia>
              ))}
            </Stack>
            <CardContent>
              <Typography variant="h6" color="text.secondary">
                HnM
              </Typography>
              <Typography variant="h5" fontWeight={700} color="text.primary">
                HnM Full Sleeves Hoodie
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                justifyContent="flex-start"
                marginBottom={2}
              >
                <Rating defaultValue={4.5} precision={0.5} readOnly />
                <Typography fontWeight={600} variant="body1">
                  4 reviews
                </Typography>
              </Stack>
              <Typography
                variant="subtitle1"
                fontSize="1.25rem"
                color="text.secondary"
              >
                Green solid casual shirt, has a mandarin collar, button placket,
                1 pocket, long sleeves, curved hem.
              </Typography>
            </CardContent>

            <Typography px={2} mb={1} variant="h5" fontWeight={700}>
              Select Size
            </Typography>
            <Grid
              container
              sx={{ px: 2, mb: 2 }}
              spacing={1}
              alignItems="center"
            >
              <Grid xs={4}>
                <SelectField sx={{ width: "12px" }} data={sizes} />
              </Grid>
            </Grid>
            <Grid xs={12}>
              <Typography px={2} variant="h5" fontWeight={700}>
                Colour
              </Typography>
              <FormControl>
                <RadioGroup
                  sx={{ px: 2, display: "flex", flexDirection: "row", mb: 2 }}
                  value={value}
                  onChange={handleChange}
                >
                  {colors.map((color: any, index: any) => (
                    <FormControlLabel
                      key={index}
                      value={color.name}
                      control={
                        <Radio
                          sx={{
                            color: color.name,
                            "&.Mui-checked": {
                              color: color.name,
                            },
                          }}
                        />
                      }
                      label={color.name}
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          display: "none",
                        },
                      }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
            <Divider />
            <Stack sx={{ p: 2 }} direction="row" justifyContent="space-between">
              <Typography textAlign="center" variant="h4" fontWeight={700}>
                ₹ 1399.00
              </Typography>
              <PrimaryButton
                type="submit"
                buttonText="Add to cart"
                variant="contained"
                // onClick={() => dispatch(addToCart(product))}
                sx={{
                  width: "130px",
                  fontSize: "14px",
                  letterSpacing: "1px",
                  borderRadius: "8px",
                }}
              />
            </Stack>
            <Typography px={2} mb={2} variant="h5" fontWeight={700}>
              Specifications
            </Typography>

            <Grid sx={{ px: 2 }} spacing={1} container>
              <Grid
                mb={2}
                sx={{ borderBottom: "1px solid #e1e1e1" }}
                item
                xs={6}
              >
                <Typography variant="h6" fontWeight={600}>
                  Fabric
                </Typography>
                <Typography variant="subtitle1" fontWeight={500}>
                  Cotton
                </Typography>
              </Grid>
              <Grid
                mb={2}
                sx={{ borderBottom: "1px solid #e1e1e1" }}
                item
                xs={6}
              >
                <Typography variant="h6" fontWeight={600}>
                  Sleeves Length
                </Typography>
                <Typography variant="subtitle1" fontWeight={500}>
                  Full Sleeves
                </Typography>
              </Grid>
              <Grid
                mb={2}
                sx={{ borderBottom: "1px solid #e1e1e1" }}
                item
                xs={6}
              >
                <Typography variant="h6" fontWeight={600}>
                  Transparency
                </Typography>
                <Typography variant="subtitle1" fontWeight={500}>
                  Opaque
                </Typography>
              </Grid>
              <Grid
                mb={2}
                sx={{ borderBottom: "1px solid #e1e1e1" }}
                item
                xs={6}
              >
                <Typography variant="h6" fontWeight={600}>
                  Weave Pattern
                </Typography>
                <Typography variant="subtitle1" fontWeight={500}>
                  Regular
                </Typography>
              </Grid>
              <Grid
                mb={2}
                sx={{ borderBottom: "1px solid #e1e1e1" }}
                item
                xs={6}
              >
                <Typography variant="h6" fontWeight={600}>
                  Sustainable
                </Typography>
                <Typography variant="subtitle1" fontWeight={500}>
                  Regular
                </Typography>
              </Grid>
              <Grid
                mb={2}
                sx={{ borderBottom: "1px solid #e1e1e1" }}
                item
                xs={6}
              >
                <Typography variant="h6" fontWeight={600}>
                  Fit
                </Typography>
                <Typography variant="subtitle1" fontWeight={500}>
                  Slim Fit
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductSinglePageCard;
