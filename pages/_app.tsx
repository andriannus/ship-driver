import type { AppProps } from "next/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faCalendarAlt,
  faEllipsisH,
  faHome,
  faPlus,
  faSearch,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import "@/styles/globals.scss";

library.add(
  faBars,
  faCalendarAlt,
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
