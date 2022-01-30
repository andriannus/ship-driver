import { FC } from "react";

import bannerStyles from "./banner.module.scss";

interface BannerProps {
  subtitle: string;
  title: string;
}

const Banner: FC<BannerProps> = ({ subtitle, title }) => {
  return (
    <div className={bannerStyles["Banner"]}>
      <h1 className={bannerStyles["Banner-title"]}>{title}</h1>
      <p className={bannerStyles["Banner-subtitle"]}>{subtitle}</p>
    </div>
  );
};

Banner.defaultProps = {
  subtitle: "",
  title: "",
};

export default Banner;
