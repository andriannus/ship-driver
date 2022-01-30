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
      </Head>

      <>
        <Banner title="Home" subtitle="Welcome to Dashboard." />
      </>
    </DefaultLayout>
  );
};

export default Home;
