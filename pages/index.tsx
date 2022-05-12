import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import TopSection from "../components/TopSection";
import styles from "../styles/Home.module.css";
import fs from "fs";
import tw from "twin.macro";

const App = tw.div`
  flex
  w-full
  h-full
`;

const Home: NextPage = () => {
  return (
    <App>
      <Head>
        <title>TraveLT</title>
        <meta name="description" content="TraveLT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopSection />
    </App>
  );
};

export default Home;
