import type { ComponentProps } from "react";

import styles from "./styles.module.css";

type CustomBtnProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "danger";
};

export const Button = ({
  variant = "primary",
  className,
  ...rest
}: CustomBtnProps) => {
  const variantClass = {
    primary: styles.btnPrimary,
    secondary: styles.btnSecondary,
    danger: styles.btnDanger,
  }[variant || "primary"];

  return (
    <button
      className={`${styles.btn} ${variantClass} ${className || ""}`}
      {...rest}
    />
  );
};
