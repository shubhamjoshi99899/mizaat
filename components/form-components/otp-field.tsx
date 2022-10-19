import { Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import theme from "../../styles/theme";

const OtpField = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element: any, index: number) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
  };
  return (
    <>
      <Stack direction="row" spacing={1}>
        {otp.map((data, index) => {
          return (
            <TextField
              InputProps={{
                style: {
                  borderRadius: "4px",
                  fontSize: "14px",
                  boxShadow: "none",
                  backgroundColor: theme.palette.grey[300],
                  // border: "0.5px solid rgba(204, 225, 255, 1)",
                  width: "48px",
                  height: "48px",
                },
              }}
              type="text"
              name="otp"
              key={index}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
              inputProps={{
                maxLength: "1",
              }}
            />
          );
        })}
      </Stack>
    </>
  );
};

export default OtpField;
