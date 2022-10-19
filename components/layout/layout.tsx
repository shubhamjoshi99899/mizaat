import React from "react";
import BottomNavigationComponent from "../common/bottom-navigation";
import Footer from "../footer";
import HeaderComponent from "../navbar";
import { useRouter } from "next/router";

const Layout = (props: any) => {
  const router = useRouter();
  return (
    <>
      {props.children}
      {router.pathname.includes("product") ? null : (
        <BottomNavigationComponent />
      )}
    </>
  );
};

export default Layout;
