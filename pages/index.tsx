import type { NextPage } from "next";
import Head from "next/head";

import { AppBar } from "@/components/app-bar";
import { Sidebar } from "@/components/sidebar";

import homeStyles from "@/styles/home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Driver Management - Shipper</title>
        <meta name="description" content="Driver Management - Shipper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar />

      <div className={homeStyles["Container"]}>
        <Sidebar />

        <main className={homeStyles["Main"]}>
          <p>Hello World</p>
        </main>
      </div>
    </>
  );
};

export default Home;
