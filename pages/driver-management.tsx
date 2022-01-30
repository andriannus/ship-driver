import type { NextPage } from "next";
import Head from "next/head";

import { Banner } from "@/components/banner";
import { DefaultLayout } from "@/layouts/default";

const DriverManagement: NextPage = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Driver Management - Shipper</title>
        <meta name="description" content="Driver Management - Shipper" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Banner
          title="Dashboard Management"
          subtitle="Data driver you work with."
        />
      </>
    </DefaultLayout>
  );
};

export default DriverManagement;
