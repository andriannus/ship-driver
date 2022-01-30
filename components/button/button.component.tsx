import classNames from "classnames";
import Link from "next/link";
import { FC, MouseEventHandler } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import buttonStyles from "./button.module.scss";

interface ButtonProps {
  color: "" | "primary";
  disabled: boolean;
  fullWidth: boolean;
  href: string;
  icon: IconProp;
  id: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  outlined: boolean;
  rounded: boolean;
  small: boolean;
  type: "button" | "submit" | "reset";
}

const Button: FC<Partial<ButtonProps>> = ({ children, ...props }) => {
  const buttonClasses = classNames([
    {
      [buttonStyles[`Button--${props.color}`]]: props.color,
      [buttonStyles["Button--fullWidth"]]: props.fullWidth,
      [buttonStyles["Button--outlined"]]: props.outlined,
      [buttonStyles["Button--rounded"]]: props.rounded,
      [buttonStyles["Button--small"]]: props.small,
    },
    buttonStyles["Button"],
  ]);

  if (props.href) {
    return (
      <Link href={props.href}>
        <a className={buttonClasses}>
          {children}
          {props.icon && (
            <FontAwesomeIcon className="ml-sm" icon={props.icon} />
          )}
        </a>
      </Link>
    );
  }

  return (
    <button
      id={props.id}
      className={buttonClasses}
      disabled={props.disabled}
      type={props.type}
      onClick={props.onClick}
    >
      {children}
      {props.icon && <FontAwesomeIcon className="ml-sm" icon={props.icon} />}
    </button>
  );
};

Button.defaultProps = {
  color: "",
  disabled: false,
  fullWidth: false,
  href: "",
  icon: undefined,
  id: "",
  onClick: undefined,
  outlined: false,
  rounded: false,
  small: false,
  type: "button",
};

export default Button;
