import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  variant?: "text" | "contained";
  color?: "primary" | "purple-dark" | "dark";
  size?: "md" | "lg" | "xl";
}

export const Button: FC<ButtonProps> = ({
  endIcon,
  children,
  startIcon,
  size = "md",
  color = "primary",
  variant = "contained",
}) => {
  return (
    <button
      className="button__container flex-center gap-8"
      data-variant={variant}
      data-color={color}
      data-size={size}
    >
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
};
