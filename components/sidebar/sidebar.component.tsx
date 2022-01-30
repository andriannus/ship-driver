import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import sidebarStyles from "./sidebar.module.scss";

import { SIDEBAR_MENUS } from "@/constants/menu.constant";

const Sidebar: FC<{}> = () => {
  const router = useRouter();

  function getValidClassNames(href: string): string {
    const validClassNames = [sidebarStyles["List-itemContent"]];

    if (router.pathname === href) {
      validClassNames.push(sidebarStyles["List-itemContent--active"]);
    }

    return classNames(validClassNames);
  }

  return (
    <aside className={sidebarStyles["Sidebar"]}>
      <ul className={sidebarStyles["List"]}>
        {SIDEBAR_MENUS.map((menu, index) => {
          return (
            <li key={index} className={sidebarStyles["List-item"]}>
              <Link href={menu.href}>
                <a className={getValidClassNames(menu.href)}>
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
