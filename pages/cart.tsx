import { Box, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import SecondaryButton from "../components/common/buttons/secondary-button";
import SearchFieldComponent from "../components/form-components/search-field-component";
import TwoLayerText from "../components/common/two-layer-text";
import CancelIcon from "@mui/icons-material/Cancel";
import FavouriteProductCard from "../components/products-description-and-type-components/favourite-product-card";
import CartProductCard from "../components/products-description-and-type-components/product-in-cart-card";
import axios from "axios";

const Cart = () => {
  const [pin, setPin] = useState<any>();
  const [service, setService] = useState<boolean>();
  const [showHelper, setShowHelper] = useState<boolean>(true);

  const onChangePin = (event: any) => {
    setPin(event.target.value);
  };
  const checkAvailability = async () => {
    let pins = await fetch("http://localhost:3000/api/pincode");
    let pinsJson = await pins.json();
    if (pinsJson.includes(parseInt(pin))) {
      setService(true);
    } else {
      setService(false);
    }
  };
  const handleCancel = () => {
    setShowHelper(false);
  };
  return (
    <>
      <Box sx={{ p: 2 }}>
        <TwoLayerText
          // fontSize="1.4rem"
          text1="Your Cart is waiting to be your closet"
          marginBottomText1="20px"
        />
        <Stack direction="row" spacing={1} mb={3}>
          <Typography variant="h6" fontWeight="700">
            Deliever to:
          </Typography>
          <SearchFieldComponent
            value={pin}
            onChange={onChangePin}
            placeholder="Enter pincode"
            type="number"
          />
          <SecondaryButton
            type="submit"
            buttonText="Check"
            variant="outlined"
            onClick={checkAvailability}
            sx={{ width: "50%", height: "50px" }}
          />
        </Stack>
        {!service && service != null && (
          <Typography
            color="red"
            fontSize="1rem"
            fontWeight={600}
            gutterBottom
            mb={2}
          >
            Sorry! We dont deliever to this pin code
          </Typography>
        )}
        {service && service != null && (
          <Typography
            color="blue"
            fontSize="1rem"
            fontWeight={600}
            gutterBottom
            mb={2}
          >
            Hurray! Your order will be delievered in 2 days.
          </Typography>
        )}
        {showHelper ? (
          <Stack
            direction="row"
            sx={{
              background: "rgba(255, 107, 137, 0.6  )",
              p: 1,
              borderRadius: "4px",
              mb: 2,
            }}
          >
            <Typography fontSize="14px" fontWeight={600}>
              Enter pincode above to check an estimation of delievery days and
              delievery charges.
            </Typography>
            <IconButton onClick={handleCancel} aria-label="share">
              <CancelIcon sx={{ color: "red" }} />
            </IconButton>
          </Stack>
        ) : null}
        <CartProductCard />
      </Box>
    </>
  );
};

export default Cart;
