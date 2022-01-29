import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import appBarStyles from "./app-bar.module.scss";

const AppBar: FC<{}> = () => {
  return (
    <header className={appBarStyles["AppBar"]}>
      <button className={appBarStyles["AppBar-bars"]}>
        <FontAwesomeIcon icon="bars" size="lg" />
      </button>

      <div className={appBarStyles["AppBar-brand"]}>
        <img src="/images/logo.png" alt="Logo Shipper" />
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
  );
};

export default AppBar;
