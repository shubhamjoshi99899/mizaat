import {
  AppBar,
  Badge,
  Box,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import theme from "../styles/theme";
import logo from "../public/mijaat.png";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
type Anchor = "right";
const menuItem = ["Account", "Orders", "Wishlist", "Logout"];

interface Props {
  cart?: any;
  addtoCart?: any;
  removefromCart?: any;
  clearCart?: any;
  subTotal?: any;
}
const HeaderComponent: React.FC<Props> = ({
  addtoCart,
  removefromCart,
  clearCart,
  subTotal,
}) => {
  const cart = useSelector((state: any) => state.cart);
  const getItemsCount = () => {
    return cart.reduce(
      (accumulator: any, item: any) => accumulator + item.quantity,
      0
    );
  };

  const router = useRouter();
  const [value, setValue] = React.useState("English");
  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.MouseEvent) => {
      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: "200px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    >
      <List>
        {menuItem.map((text, index) => (
          <ListItem color="#fff" key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{/* <MailIcon /> */}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: theme.palette.primary.main,
        height: "60px !important",
        marginBottom: "20px",
      }}
    >
      <AppBar
        sx={{
          padding: "16px 0px 15px 20px",
          minHeight: "0px !important",
          background: "#fff",
          boxShadow: "rgba(0, 0, 0, 0.14) 0px 3px 8px",
        }}
      >
        <Toolbar
          sx={{ padding: "0px !important", minHeight: "0px !important" }}
        >
          <Box sx={{ flexGrow: "1", objectFit: "cover" }}>
            <Image
              src="/mijaat.png"
              width="140px"
              height="40px"
              alt="mijaat"
              style={{ objectFit: "fill", cursor: "pointer" }}
              objectFit="fill"
            />
          </Box>
          <Stack
            direction="row"
            sx={{
              padding: "0px !important",
              height: "29px",
              alignItems: "center !important",
            }}
          >
            <Box>
              <IconButton>
                <SearchIcon sx={{ color: theme.palette.grey[100] }} />
              </IconButton>
              <IconButton onClick={() => router.push("/favourite")}>
                <FavoriteBorderIcon sx={{ color: theme.palette.grey[100] }} />
              </IconButton>
              <IconButton
                sx={{
                  backgroundImage:
                    getItemsCount().length === undefined
                      ? "#transparent"
                      : "linear-gradient(1deg, #4F58FD, #149BF3 99%) !important",
                }}
                onClick={() => router.push("/cart")}
              >
                <Badge badgeContent={getItemsCount()} color="secondary">
                  <ShoppingCartIcon
                    sx={{
                      color:
                        getItemsCount().length === undefined
                          ? theme.palette.grey[100]
                          : "#fff",
                    }}
                  />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                sx={{ padding: "20px", marginRight: "0px" }}
                onClick={toggleDrawer("right", true)}
              >
                <MenuIcon sx={{ color: theme.palette.grey[100] }} />
              </IconButton>
              <Drawer
                anchor="right"
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
              >
                {list("right")}
              </Drawer>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default HeaderComponent;
