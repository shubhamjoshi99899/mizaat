import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import TwoLayerText from "../common/two-layer-text";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
const ProfilePageHeader = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(1deg, #4F58FD, #149BF3 99%) !important",
          position: "relative",
        }}
        p={3}
      >
        <Typography
          variant="h4"
          fontWeight={800}
          sx={{ color: "#fff" }}
          marginBottom="20px"
        >
          My Profile
        </Typography>
        <IconButton
          sx={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            marginBottom: "20px",
            backgroundImage:
              "linear-gradient(1deg, #ee0979, #ff6a00 99%) !important",
            backgroundColor: "#3EB2FD !important",
            position: "absolute",
            top: 14,
            right: 14,
          }}
        >
          <LogoutIcon
            sx={{
              height: "30px",
              width: "30px",
              color: "#fff",
            }}
          />
        </IconButton>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar src="/static/images/avatar/1.jpg" />
          <Typography
            sx={{ flexGrow: 1 }}
            variant="h6"
            fontWeight={700}
            color="white"
          >
            +91 89546 54693
          </Typography>
          <IconButton>
            <EditIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};

export default ProfilePageHeader;
