import {
  Badge,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Share from "@mui/icons-material/Share";
import { useRouter } from "next/router";

interface Props {
  product?: any;
  productPage?: any;
  onClick?: any;
}

const TopBar: React.FC<Props> = ({ product, productPage, onClick }) => {
  const router = useRouter();
  return (
    <>
      <Stack direction="row" sx={{ p: 1 }}>
        <Stack
          direction="row"
          sx={{ mx: 1, flexGrow: "1" }}
          alignItems="center"
        >
          <IconButton onClick={router.back}>
            <ArrowBackIcon />
          </IconButton>
          {product ? <Typography variant="h5">{product}</Typography> : null}
        </Stack>

        {/* {productPage ? (
          <Stack direction="row" sx={{ m: 1 }} alignItems="center">
            <IconButton onClick={onClick}>
              <Share />
            </IconButton>
          </Stack>
        ) : (
          <Stack direction="row" sx={{ m: 1 }} alignItems="center">
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Stack>
        )}
        <Divider color="grey" /> */}
      </Stack>
    </>
  );
};

export default TopBar;
