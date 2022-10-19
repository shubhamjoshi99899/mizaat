import "../styles/globals.css";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import store from "../redux/store";
import { ThemeProvider } from "@mui/material";
import theme from "../styles/theme";
import Layout from "../components/layout/layout";
import { useEffect, useState } from "react";
import { object } from "yup";
import HeaderComponent from "../components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState<any | {}>({});
  const [subTotal, setSubTotal] = useState<number>(0);

  const addToCart = (
    itemCode: any,
    qty: number,
    price: number,
    pname: string,
    size: string,
    variant: any
  ) => {
    let myCart: any = cart;
    if (itemCode in cart) {
      myCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      myCart[itemCode] = { qty: 1, price, pname, size, variant };
    }
    setCart(myCart);
  };

  const saveCart = (myCart: any) => {
    localStorage.setItem("cart", myCart);
    let subT = 0;
    let keys = Object.keys(cart);
    for (let i = 0; i < keys.length; i++) {
      subT += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subT);
  };

  const removeFromCart = (
    itemCode: any,
    qty: number,
    price: number,
    pname: string,
    size: string,
    variant: any
  ) => {
    let myCart: any = cart;
    if (itemCode in cart) {
      myCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (myCart[itemCode].qty <= 0) {
      delete myCart[itemCode];
    }
    setCart(myCart);
    saveCart(myCart);
  };
  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart") as any));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <HeaderComponent
            cart={cart}
            addtoCart={addToCart}
            removefromCart={removeFromCart}
            clearCart={clearCart}
            subTotal={subTotal}
          />

          <Component
            cart={cart}
            addtoCart={addToCart}
            removefromCart={removeFromCart}
            clearCart={clearCart}
            subTotal={subTotal}
            {...pageProps}
          />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
