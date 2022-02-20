import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import appBarStyles from "./app-bar.module.scss";

import { BottomSheet } from "@/components/bottom-sheet";
import { SIDEBAR_MENUS } from "@/constants/menu.constant";
import { getValidClassNames } from "@/utils/transform";

const AppBar: FC<{}> = () => {
  const router = useRouter();

  const [isBottomSheetShown, setBottomSheetStatus] = useState(false);

  return (
    <>
      <header className={appBarStyles["AppBar"]}>
        <button
          className={appBarStyles["AppBar-bars"]}
          onClick={() => setBottomSheetStatus(true)}
        >
          <FontAwesomeIcon icon="bars" size="lg" />
        </button>

        <div className={appBarStyles["AppBar-brand"]}>
          <Image
            src="/images/logo.png"
            alt="Logo Shipper"
            height={28}
            width={28}
          />
          <span className={appBarStyles["AppBar-brandText"]}>Shipper</span>
        </div>

        <div className={appBarStyles["AppBar-action"]}>
          <span className={appBarStyles["AppBar-actionText"]}>
            Hello, <span className="text-ruby-500">Shipper User</span>
          </span>

          <FontAwesomeIcon
            className="ml-sm text-gray-400"
            icon="user-circle"
            size="2x"
          />
        </div>
      </header>

      <BottomSheet value={isBottomSheetShown} onChange={setBottomSheetStatus}>
        <ul>
          {SIDEBAR_MENUS.map((menu, index) => {
            return (
              <li key={index} className="Menu">
                <Link href={menu.href}>
                  <a className={getValidClassNames(router.pathname, menu.href)}>
                    <FontAwesomeIcon icon={menu.icon as IconProp} />
                    <span>{menu.text}</span>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </BottomSheet>
    </>
  );
};

export default AppBar;
