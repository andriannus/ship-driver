import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Banner } from "@/components/banner";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { QUERY_PARAMS } from "@/constants/api.constant";
import { SHP_USERS } from "@/constants/storage.constant";
import { useApiInvoker } from "@/hooks/api-invoker";
import { useLocalStorage } from "@/hooks/local-storage";
import { DefaultLayout } from "@/layouts/default";
import { RandomUserData, RandomUserResponse } from "@/models/random-user.model";
import { transformToDefaultFormat } from "@/utils/date";
import { paginate, PaginatedData } from "@/utils/paginate";

import driverStyles from "@/styles/driver-management.module.scss";

const DriverManagement: NextPage = () => {
  const { apiInvoker } = useApiInvoker({});
  const ls = useLocalStorage();
  const router = useRouter();

  const [isDataReady, setDataStatus] = useState(false);
  const [paginatedDriver, setPaginatedDriver] = useState<
    PaginatedData<RandomUserData>
  >({} as PaginatedData<RandomUserData>);

  useEffect(() => {
    router.isReady && initializePage();
  }, [router.isReady]);

  function initializePage() {
    const { page = "" } = router.query;
    const validPage = page || "1";

    if (!page) {
      router.replace({ query: { page: validPage } });
      paginateDriver(validPage as string);
      return;
    }

    paginateDriver(validPage as string);
  }

  function paginateDriver(page: string = "1"): void {
    router.push({ query: { page } });

    if (ls.isExist(SHP_USERS)) {
      getPaginatedDriver(page);
      return;
    }

    fetchPaginatedDriver(page);
  }

  async function fetchPaginatedDriver(page: string): Promise<void> {
    setDataStatus(false);

    try {
      const { data: Data } = await apiInvoker.get<RandomUserResponse>(
        QUERY_PARAMS,
      );

      const paginatedDriver = paginate(Data.results, parseInt(page));

      setPaginatedDriver(paginatedDriver);
      ls.set(SHP_USERS, Data.results);
    } catch {
      // state.didSomethingWrong = true;
    } finally {
      setDataStatus(true);
    }
  }

  function getPaginatedDriver(page: string): void {
    const results = ls.get<RandomUserData[]>(SHP_USERS);
    const paginatedDriver = paginate(results, parseInt(page));

    setPaginatedDriver(paginatedDriver);
    setDataStatus(true);
  }

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

        {!isDataReady ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className={driverStyles["Grids"]}>
              {paginatedDriver.data.map((driver, index) => {
                return (
                  <div key={index} className={driverStyles["Grid"]}>
                    <Card driverId={driver.login.salt.toUpperCase()}>
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
                              {`${driver.name.first} ${driver.name.last}`}
                            </span>
                          </li>

                          <li className={driverStyles["List-item"]}>
                            <p className={driverStyles["List-itemTitle"]}>
                              Phone
                            </p>

                            <span className={driverStyles["List-itemSubtitle"]}>
                              {driver.phone}
                            </span>
                          </li>

                          <li
                            className={`${driverStyles["List-item"]} ${driverStyles["List-item--additional"]}`}
                          >
                            <p className={driverStyles["List-itemTitle"]}>
                              Email
                            </p>

                            <span className={driverStyles["List-itemSubtitle"]}>
                              {driver.email}
                            </span>
                          </li>

                          <li
                            className={`${driverStyles["List-item"]} ${driverStyles["List-item--additional"]}`}
                          >
                            <p className={driverStyles["List-itemTitle"]}>
                              Date of Birth
                            </p>

                            <span className={driverStyles["List-itemSubtitle"]}>
                              {transformToDefaultFormat(
                                new Date(driver.dob.date),
                              )}
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
              <button
                className={driverStyles["Pagination-button"]}
                disabled={!paginatedDriver.meta.prevPage}
                onClick={() =>
                  paginateDriver(paginatedDriver.meta.prevPage?.toString())
                }
              >
                <FontAwesomeIcon
                  className={driverStyles["Pagination-icon"]}
                  icon="chevron-left"
                />

                <span className="ml-xs">Previous</span>
              </button>

              <button
                className={driverStyles["Pagination-button"]}
                disabled={!paginatedDriver.meta.nextPage}
                onClick={() =>
                  paginateDriver(paginatedDriver.meta.nextPage?.toString())
                }
              >
                <span className="mr-xs">Next</span>

                <FontAwesomeIcon
                  className={driverStyles["Pagination-icon"]}
                  icon="chevron-right"
                />
              </button>
            </div>
          </>
        )}
      </>
    </DefaultLayout>
  );
};

export default DriverManagement;
