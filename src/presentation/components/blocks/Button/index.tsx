import { ButtonHTMLAttributes, FC } from "react";

import "./styles/button.scss";

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
}) => {
  return <button className="btn">{children}</button>;
};
