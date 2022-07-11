import { Box, IconButton, Stack, Typography } from "@mui/material";
import { CSSProperties } from "@mui/styled-engine";
import Image from "next/image";
import React from "react";
import theme from "../../styles/theme";

interface Props {
  text1?: string;
  text2?: string;
  span?: string;
  marginBottomText1?: any;
  marginBottomText2?: any;
  otp?: boolean;
  fontSize?: any;
  isProfile?: boolean;
  edit?: boolean;
}

const TwoLayerText: React.FC<Props> = ({
  text1,
  text2,
  span,
  isProfile,
  otp,
  edit,
  marginBottomText1,
  marginBottomText2,
  fontSize,
}) => {
  return (
    <Box>
      {text1 ? (
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: isProfile ? "2.875rem" : fontSize,
            fontFamily: "Montserrat",
            //   textAlign: "center",
            color: theme.palette.primary.main,
            lineHeight: "28px",
            marginBottom: marginBottomText1,
          }}
          variant="h6"
        >
          {text1}
        </Typography>
      ) : null}
      {text2 ? (
        <Typography
          sx={{
            fontWeight: isProfile ? 600 : 500,
            fontFamily: "Montserrat",
            lineHeight: "24px",
            fontSize: isProfile ? "0.6875rem" : "auto",
            color: theme.palette.grey[100],
            marginBottom: marginBottomText2,
          }}
          variant="body2"
        >
          {text2} &nbsp;
          <Typography
            sx={{
              fontWeight: otp ? 600 : 500,
              fontFamily: "Montserrat",
              // textAlign: "center",
              color: theme.palette.primary.main,
            }}
            variant="body2"
            component="span"
          >
            {span}
            {edit ? (
              <IconButton>
                <Image
                  src="/icons/edit.png"
                  width="10px"
                  height="10px"
                  alt="edit"
                />
              </IconButton>
            ) : null}
          </Typography>
        </Typography>
      ) : null}
    </Box>
  );
};

export default TwoLayerText;
