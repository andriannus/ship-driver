import { FC } from "react";

import defaultStyles from "./default.module.scss";

import { AppBar } from "@/components/app-bar";
import { Sidebar } from "@/components/sidebar";

const DefaultLayout: FC<{}> = ({ children }) => {
  return (
    <>
      <AppBar />

      <div className={defaultStyles["Container"]}>
        <Sidebar />
        <main className={defaultStyles["Main"]}>{children}</main>
      </div>
    </>
  );
};

export default DefaultLayout;
