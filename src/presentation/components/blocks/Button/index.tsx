import { ButtonHTMLAttributes, FC } from "react";

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
}) => {
  return <button className="btn">{children}</button>;
};
