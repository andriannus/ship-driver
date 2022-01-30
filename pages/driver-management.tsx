import type { NextPage } from "next";
import Head from "next/head";

import { DefaultLayout } from "@/layouts/default";

const DriverManagement: NextPage = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Driver Management - Shipper</title>
        <meta name="description" content="Driver Management - Shipper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Hello World</p>
    </DefaultLayout>
  );
};

export default DriverManagement;
