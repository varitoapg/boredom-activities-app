import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "active" | "dark";
  isRounded?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  isRounded = false,
  children,
  className,
  ...rest
}) => {
  const buttonClass = `${styles.button} ${styles[`button--${variant}`]} ${
    isRounded ? styles["button--rounded"] : ""
  } ${className || ""}`;

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
