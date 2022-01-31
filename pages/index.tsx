import type { NextPage } from "next";
import Head from "next/head";

import { Banner } from "@/components/banner";
import { DefaultLayout } from "@/layouts/default";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Home - Shipper</title>
        <meta name="description" content="Home - Shipper" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <>
        <Banner title="Home" subtitle="Welcome to Dashboard." />
      </>
    </DefaultLayout>
  );
};

export default Home;
