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
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <HeaderComponent />

          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
