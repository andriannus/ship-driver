import type { AppProps } from "next/app";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faCalendarAlt,
  faChevronLeft,
  faChevronRight,
  faEllipsisH,
  faHome,
  faPlus,
  faSearch,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/globals.scss";

config.autoAddCss = false;
library.add(
  faBars,
  faCalendarAlt,
  faChevronLeft,
  faChevronRight,
  faEllipsisH,
  faHome,
  faPlus,
  faSearch,
  faUserCircle,
);

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
