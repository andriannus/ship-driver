import type { NextPage } from "next";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Banner } from "@/components/banner";
import { Button } from "@/components/button";
import { DefaultLayout } from "@/layouts/default";

import driverStyles from "@/styles/driver-management.module.scss";

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
        >
          <div className={driverStyles["Driver-actions"]}>
            <div className={driverStyles["Search"]}>
              <FontAwesomeIcon
                className={driverStyles["Search-icon"]}
                icon="search"
              />

              <div className={driverStyles["Search-field"]}>
                <input
                  aria-label="Cari Driver"
                  className={driverStyles["Search-input"]}
                  placeholder="Cari Driver"
                  title="Cari Driver"
                  type="text"
                />
              </div>
            </div>

            <Button color="primary" icon="plus">
              <span>TAMBAH DRIVER</span>
            </Button>
          </div>
        </Banner>
      </>
    </DefaultLayout>
  );
};

export default DriverManagement;
