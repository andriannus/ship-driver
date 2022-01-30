import { FC } from "react";

import bannerStyles from "./banner.module.scss";

interface BannerProps {
  subtitle: string;
  title: string;
}

const Banner: FC<BannerProps> = ({ children, ...props }) => {
  return (
    <div className={bannerStyles["Banner"]}>
      <div>
        <h1 className={bannerStyles["Banner-title"]}>{props.title}</h1>
        <p className={bannerStyles["Banner-subtitle"]}>{props.subtitle}</p>
      </div>

      {!!children && (
        <div className={bannerStyles["Banner-content"]}>{children}</div>
      )}
    </div>
  );
};

Banner.defaultProps = {
  subtitle: "",
  title: "",
};

export default Banner;
