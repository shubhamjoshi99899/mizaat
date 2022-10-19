import React from "react";
import BottomNavigationComponent from "../common/bottom-navigation";
import Footer from "../footer";
import HeaderComponent from "../navbar";
const Layout = (props: any) => {
  return (
    <>
      {props.children}
      <BottomNavigationComponent />
    </>
  );
};

export default Layout;
