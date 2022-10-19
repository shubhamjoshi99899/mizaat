import { Avatar, Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  category: any;
  marginBottom?: any;
  subcategory?: string;
}

const CategoriesAvatar: React.FC<Props> = ({
  category,
  marginBottom,
  subcategory,
}) => {
  const router = useRouter();
  return (
    <Box>
      <Grid sx={{ marginBottom: { marginBottom } }} container>
        {category?.map((categories: any, index: number) => (
          <Grid key={index} xs={4} sx={{ padding: "0px !important" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "0px !important",
              }}
              onClick={() =>
                router.push({
                  pathname: `/categories/${categories.description.toLowerCase()}`,
                  query: { subcategory },
                })
              }
            >
              <Avatar
                src={categories.image}
                sx={{ width: 96, height: 96, marginBottom: "12px" }}
              />
              <Typography fontWeight={600} sx={{ marginBottom: "12px" }}>
                {categories.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoriesAvatar;
