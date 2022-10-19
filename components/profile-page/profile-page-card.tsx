import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  image: any;
  name: string;
  borderColor?: any;
}

const ProfilePageCard: React.FC<Props> = ({ image, name, borderColor }) => {
  return (
    <>
      <Box
        sx={{
          p: 3,
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
          border: "4px solid",
          borderColor: { borderColor },
          m: 1,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "80px", height: "80px", marginBottom: "20px" }}
          src={image}
        />
        <Typography variant="h5" fontWeight={800}>
          {name}
        </Typography>
      </Box>
    </>
  );
};

export default ProfilePageCard;
