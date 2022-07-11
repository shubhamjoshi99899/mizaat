import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/router";
import Link from "next/link";
import theme from "../../styles/theme";
const BottomNavigationComponent = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);

  const navData = [
    {
      label: "Home",
      link: "/home",
      icon: <HomeIcon sx={{ color: "#6b6e70" }} />,
      activeIcon: <HomeIcon sx={{ color: "#AA96DA" }} />,
    },
    {
      label: "Categories",
      link: "/category",
      icon: <ViewComfyIcon sx={{ color: "#6b6e70" }} />,
      activeIcon: <ViewComfyIcon sx={{ color: "#AA96DA" }} />,
    },
    {
      label: "Cart",
      link: "/cart",
      icon: <ShoppingBagIcon sx={{ color: "#6b6e70" }} />,
      activeIcon: <ShoppingBagIcon sx={{ color: "#AA96DA" }} />,
    },
    {
      label: "Profile",
      link: "/profile",
      icon: <PersonIcon sx={{ color: "#6b6e70" }} />,
      activeIcon: <PersonIcon sx={{ color: "#AA96DA !important" }} />,
    },
  ];
  return (
    <Paper
      sx={{ position: "fixed", bottom: "0", left: "0", right: "0" }}
      elevation={4}
    >
      <BottomNavigation
        showLabels
        value={value}
        sx={{ mb: 1, zIndex: 1 }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {navData.map((item: any, index: number) => (
          <Link passHref key={index} href={item?.link}>
            <BottomNavigationAction
              key={index}
              label={item.label}
              icon={
                router.pathname.includes(item.link)
                  ? item.activeIcon
                  : item.icon
              }
              sx={{
                ".MuiBottomNavigationAction-label": {
                  opacity: "1",
                  fontSize: "0.95rem",
                  color: router.pathname.match(item.link)
                    ? "#AA96DA"
                    : "#6b6e70",
                  fontWeight: 600,
                },
              }}
            />
          </Link>
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavigationComponent;
