import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
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

  const [didSomethingWrong, setWrongStatus] = useState(false);
  const [isDataReady, setDataStatus] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [paginatedDriver, setPaginatedDriver] = useState<
    PaginatedData<RandomUserData>
  >({} as PaginatedData<RandomUserData>);

  useEffect(() => {
    router.isReady && initializePage();
  }, [router.isReady]);

  useEffect(() => {
    router.isReady && paginateDriver(router.query.page as string);
  }, [router.query.page]);

  useEffect(() => {
    router.isReady && paginateDriver(router.query.page as string, searchValue);
  }, [searchValue]);

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>): void {
    setSearchValue(event.target.value);
  }

  function initializePage() {
    const { page = "", search } = router.query;
    const validPage = page || "1";

    if (!page) {
      router.replace({ query: { page: validPage } });
      return;
    }

    if (search) {
      setSearchValue(search as string);
      return;
    }

    paginateDriver(validPage as string);
  }

  function paginateDriver(page = "1", search = ""): void {
    router.push({ query: { page, search } });

    if (ls.isExist(SHP_USERS)) {
      getPaginatedDriver(page, search);
      return;
    }

    fetchPaginatedDriver(page, search);
  }

  async function fetchPaginatedDriver(
    page: string,
    search = "",
  ): Promise<void> {
    setDataStatus(false);

    try {
      const { data: Data } = await apiInvoker.get<RandomUserResponse>(
        QUERY_PARAMS,
      );

      const drivers = searchDriver(Data.results, search);
      const paginatedDriver = paginate(drivers, parseInt(page));

      setPaginatedDriver(paginatedDriver);
      ls.set(SHP_USERS, Data.results);
    } catch {
      setWrongStatus(true);
    } finally {
      setDataStatus(true);
    }
  }

  function getPaginatedDriver(page: string, search = ""): void {
    const results = ls.get<RandomUserData[]>(SHP_USERS);
    const drivers = searchDriver(results, search);
    const paginatedDriver = paginate(drivers, parseInt(page));

    setPaginatedDriver(paginatedDriver);
    setDataStatus(true);
  }

  function searchDriver(
    drivers: RandomUserData[],
    search: string,
  ): RandomUserData[] {
    let validDrivers = [...drivers];

    if (!!search) {
      validDrivers = drivers.filter((driver) => {
        return driver.name.first.toLowerCase().includes(search.toLowerCase());
      });
    }

    return validDrivers;
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
                  value={searchValue}
                  onInput={handleSearchChange}
                />
              </div>
            </div>

            <Button color="primary" icon="plus">
              <span>TAMBAH DRIVER</span>
            </Button>
          </div>
        </Banner>

        {!isDataReady ? (
          <p className="mt-bs text-xs">Loading...</p>
        ) : didSomethingWrong ? (
          <p className="mt-bs text-xs">Something wrong.</p>
        ) : paginatedDriver.data.length < 1 ? (
          <p className="mt-bs text-xs">Data not found.</p>
        ) : (
          <>
            <div className={driverStyles["Grids"]}>
              {paginatedDriver.data.map((driver, index) => {
                return (
                  <div key={index} className={driverStyles["Grid"]}>
                    <Card driverId={driver.login.salt.toUpperCase()}>
                      <div className={driverStyles["Driver-detail"]}>
                        <div className={driverStyles["Picture"]}>
                          <img
                            src={driver.picture.medium}
                            loading="lazy"
                            alt={driver.name.first}
                          />
                        </div>

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
                <FontAwesomeIcon icon="chevron-left" />
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
                <FontAwesomeIcon icon="chevron-right" />
              </button>
            </div>
          </>
        )}
      </>
    </DefaultLayout>
  );
};

export default DriverManagement;
