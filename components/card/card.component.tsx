import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import cardStyles from "./card.module.scss";

interface CardProps {
  driverId: string;
}

const Card: FC<Partial<CardProps>> = ({ children, ...props }) => {
  return (
    <div className={cardStyles["Card"]}>
      <div className={cardStyles["Card-title"]}>
        <p>
          Driver ID <span className="text-red-500">{props.driverId}</span>
        </p>

        <FontAwesomeIcon icon="ellipsis-h" />
      </div>

      <div className={cardStyles["Card-content"]}>{children}</div>
    </div>
  );
};

Card.defaultProps = {
  driverId: "",
};

export default Card;
