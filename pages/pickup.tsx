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
      </Head>

      <>
        <Banner title="Pickup" subtitle="Welcome to Pickup." />
      </>
    </DefaultLayout>
  );
};

export default Pickup;
