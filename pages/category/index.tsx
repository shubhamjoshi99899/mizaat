import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CategoriesAvatar from "../../components/categories/categories-avatar";
import SearchFieldComponent from "../../components/common/search-field-component";
import PrimaryTab from "../../components/common/tab-panels/primary-tab";
import TwoLayerText from "../../components/common/two-layer-text";
import GirlsCategories from "../api/girls-categories";
import BoysCategories from "../api/boys-categories";
import BoyBanner from "../../components/category-banner/boy-banner";
import PriceAvatar from "../../components/categories/price-avatar";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{}}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

const Category = () => {
  const [tabvalue, setTabValue] = useState(0);

  const [tabLabelArray, setTabLabelArray] = useState<any | []>([
    { label: "Men" },
    { label: "Women" },
    { label: "Boys" },
    { label: "Girls" },
  ]);

  const handleGetTabIndex = (index: number) => {
    setTabValue(index);
  };

  return (
    <>
      <Box sx={{ px: 3, pt: 2, pb: 10 }}>
        <TwoLayerText
          text1="Shop by Category"
          fontSize="30px"
          marginBottomText1="22px"
        />

        <SearchFieldComponent
          placeholder="What are you looking for"
          sx={{ mb: 3 }}
        />
        <PrimaryTab category={tabLabelArray} onTabChange={handleGetTabIndex} />

        <TabPanel value={tabvalue} index={0}>
          <BoyBanner />
          <Typography fontSize="20px" fontWeight={700} marginBottom="12px">
            Categories
          </Typography>
          <CategoriesAvatar category={BoysCategories} />
          <Typography fontSize="20px" fontWeight={700} marginBottom="12px">
            Offers
          </Typography>

          <PriceAvatar category={BoysCategories} />
        </TabPanel>
        <TabPanel value={tabvalue} index={1}>
          <Typography fontSize="20px" fontWeight={700} marginBottom="12px">
            Categories
          </Typography>
          <CategoriesAvatar category={GirlsCategories} />
        </TabPanel>
        <TabPanel value={tabvalue} index={2}>
          <Typography fontSize="20px" fontWeight={700} marginBottom="12px">
            Categories
          </Typography>
          <CategoriesAvatar category={BoysCategories} />
        </TabPanel>
        <TabPanel value={tabvalue} index={3}>
          <Typography fontSize="20px" fontWeight={700} marginBottom="12px">
            Categories
          </Typography>
          <CategoriesAvatar category={GirlsCategories} />
        </TabPanel>
      </Box>
    </>
  );
};

export default Category;
