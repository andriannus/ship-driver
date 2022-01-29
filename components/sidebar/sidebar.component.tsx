import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import sidebarStyles from "./sidebar.module.scss";

import { SIDEBAR_MENUS } from "@/constants/menu.constant";

const Sidebar: FC<{}> = () => {
  const router = useRouter();

  return (
    <aside className={sidebarStyles["Sidebar"]}>
      <ul className={sidebarStyles["List"]}>
        {SIDEBAR_MENUS.map((menu, index) => {
          return (
            <li key={index} className={sidebarStyles["List-item"]}>
              <Link href={menu.href}>
                <a
                  className={`${sidebarStyles["List-itemContent"]} ${
                    router.pathname === `${menu.href}`
                      ? sidebarStyles["List-itemContent--active"]
                      : ""
                  }`}
                >
                  <FontAwesomeIcon icon={menu.icon as IconProp} />
                  <span>{menu.text}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
