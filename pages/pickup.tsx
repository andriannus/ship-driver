import type { NextPage } from "next";
import Head from "next/head";

import { DefaultLayout } from "@/layouts/default";

const Pickup: NextPage = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Pickup - Shipper</title>
        <meta name="description" content="Pickup - Shipper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Hello World</p>
    </DefaultLayout>
  );
};

export default Pickup;
