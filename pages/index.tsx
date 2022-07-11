import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import HomePage from "../components/home-page-components/home-page";
import DrawerRight from "../components/navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

export default Home;
