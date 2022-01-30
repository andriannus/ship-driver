import type { NextPage } from "next";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Banner } from "@/components/banner";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
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

        <div className={driverStyles["Grids"]}>
          {[1, 2, 3, 4, 5].map((driver, index) => {
            return (
              <div key={index} className={driverStyles["Grid"]}>
                <Card driverId={`${index}`}>
                  <div className={driverStyles["Driver-detail"]}>
                    <FontAwesomeIcon
                      className="lg:mb-md text-gray-400"
                      icon="user-circle"
                      size="4x"
                    />

                    <ul className={driverStyles["List"]}>
                      <li className={driverStyles["List-item"]}>
                        <p className={driverStyles["List-itemTitle"]}>
                          Nama Driver
                        </p>

                        <span className={driverStyles["List-itemSubtitle"]}>
                          First Name, Last Name
                        </span>
                      </li>

                      <li className={driverStyles["List-item"]}>
                        <p className={driverStyles["List-itemTitle"]}>Phone</p>

                        <span className={driverStyles["List-itemSubtitle"]}>
                          Phone Number
                        </span>
                      </li>

                      <li
                        className={`${driverStyles["List-item"]} ${driverStyles["List-item--additional"]}`}
                      >
                        <p className={driverStyles["List-itemTitle"]}>Email</p>

                        <span className={driverStyles["List-itemSubtitle"]}>
                          Email Address
                        </span>
                      </li>

                      <li
                        className={`${driverStyles["List-item"]} ${driverStyles["List-item--additional"]}`}
                      >
                        <p className={driverStyles["List-itemTitle"]}>
                          Date of Birth
                        </p>

                        <span className={driverStyles["List-itemSubtitle"]}>
                          DD-MM-YYYY
                        </span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        <div className={driverStyles["Pagination"]}>
          <button className={driverStyles["Pagination-button"]}>
            <FontAwesomeIcon
              className={driverStyles["Pagination-icon"]}
              icon="chevron-left"
            />

            <span className="ml-xs">Previous</span>
          </button>

          <button className={driverStyles["Pagination-button"]}>
            <span className="mr-xs">Next</span>

            <FontAwesomeIcon
              className={driverStyles["Pagination-icon"]}
              icon="chevron-right"
            />
          </button>
        </div>
      </>
    </DefaultLayout>
  );
};

export default DriverManagement;
