import type { NextPage } from "next";
import Head from "next/head";

import { DefaultLayout } from "@/layouts/default";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Home - Shipper</title>
        <meta name="description" content="Home - Shipper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Hello World</p>
    </DefaultLayout>
  );
};

export default Home;
