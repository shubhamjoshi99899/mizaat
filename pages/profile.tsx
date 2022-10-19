import { Box, Grid } from "@mui/material";
import React from "react";
import SearchFieldComponent from "../components/form-components/search-field-component";
import ProfilePageCard from "../components/profile-page/profile-page-card";
import ProfilePageHeader from "../components/profile-page/profile-page-header";
const profileCards = [
  {
    id: "1",
    name: "Orders",
    color: "red",
    image:
      "https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/000000/external-order-digital-marketing-strategy-inipagistudio-mixed-inipagistudio.png",
  },
  {
    id: "2",
    name: "Wishlist",
    color: "blue",
    image: "https://img.icons8.com/color/48/000000/wish-list.png",
  },
  {
    id: "3",
    name: "Favourites",
    image:
      "https://img.icons8.com/external-sbts2018-outline-sbts2018/58/000000/external-wishlist-black-friday-5-basic-sbts2018-outline-sbts2018.png",
    color: "purple",
  },
  {
    id: "4",
    name: "FeedBack",
    image:
      "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-review-social-media-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png",
    color: "Green",
  },

  {
    id: "5",
    name: "Addresses",
    image: "https://img.icons8.com/ios/50/000000/address--v1.png",
    color: "yellow",
  },
  {
    id: "6",
    name: "Support",
    image: "https://img.icons8.com/ios/50/000000/faq.png",
    color: "Green",
  },
];
const Profile = () => {
  return (
    <>
      <ProfilePageHeader />
      <Grid p={4} container mb={10}>
        {profileCards.map((item: any, index: number) => (
          <Grid key={index} xs={6} md={4} lg={3} spacing={2}>
            <ProfilePageCard
              image={item.image}
              name={item.name}
              borderColor={item.color}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Profile;
