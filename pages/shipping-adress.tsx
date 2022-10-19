import {
  Badge,
  Box,
  Card,
  FormControlLabel,
  IconButton,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import TwoLayerText from "../components/common/two-layer-text";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchFieldComponent from "../components/form-components/search-field-component";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import HomeIcon from "@mui/icons-material/Home";
import PrimaryButton from "../components/common/buttons/primary-button";
import SecondaryButton from "../components/common/buttons/secondary-button";

const Addresses = [
  {
    icon: <HomeIcon />,
    place: "Home",
    name: "Jeewan Kapri",
    phone_number: "072483 87998",
    address: "Near pizza bite chimsyanaula Pithoragarh, 262501",
    district: "Pithoragarh, Uttarakhand, India",
  },
  {
    icon: <ApartmentOutlinedIcon />,
    place: "Office",
    name: "Bhuwan Kapri",
    phone_number: "072483 87998",
    address: "Near pizza bite chimsyanaula Pithoragarh, 262501",
    district: "Pithoragarh, Uttarakhand, India",
  },
];

const ShippingAdress = () => {
  return (
    <>
      <Stack
        sx={{ p: 2 }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
        <TwoLayerText text1="Shipping Adress" />
        <IconButton>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Stack>

      <SearchFieldComponent sx={{ px: 2 }} placeholder="Search Address" />
      <Typography sx={{ p: 2 }} variant="h5" fontWeight="700">
        Shipping Address
      </Typography>

      {Addresses.map((adress: any, index: number) => (
        <Card
          sx={{
            p: 2,
            mx: 2,
            mb: 3,
            boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
            background: "rgba(0, 151, 19, 0.1)",
          }}
          key={index}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <FormControlLabel
              value={adress.place}
              control={<Radio />}
              label={adress.place}
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontWeight: "900",
                  fontSize: "16px",
                },
              }}
            />
            <IconButton>{adress.icon}</IconButton>
          </Box>
          <Box>
            <Typography variant="h5" fontSize="20px" fontWeight="700">
              {adress.name}
            </Typography>
            <Typography variant="h5" fontSize="16px" fontWeight="700">
              {adress.phone_number}
            </Typography>
            <Typography variant="h6">
              {adress.address}
              <br />
              {adress.district}
            </Typography>
          </Box>
        </Card>
      ))}
      <Box sx={{ m: 2 }}>
        <PrimaryButton
          type="submit"
          variant="contained"
          buttonText="Add new address"
          sx={{ fontSize: "18px", fontWeight: "700" }}
        />
      </Box>
      <Box sx={{ m: 2, mb: 10 }}>
        <SecondaryButton
          type="submit"
          variant="contained"
          buttonText="Continue"
          sx={{
            p: 2,
            background: "#fff",
            width: "100%",
            borderRadius: "16px",
            fontSize: "18px",
            fontWeight: "700",
          }}
        />
      </Box>
    </>
  );
};

export default ShippingAdress;
