import type { NextPage } from "next";
import Head from "next/head";

import { Banner } from "@/components/banner";
import { DefaultLayout } from "@/layouts/default";

const Pickup: NextPage = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Pickup - Shipper</title>
        <meta name="description" content="Pickup - Shipper" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <>
        <Banner title="Pickup" subtitle="Welcome to Pickup." />
      </>
    </DefaultLayout>
  );
};

export default Pickup;
