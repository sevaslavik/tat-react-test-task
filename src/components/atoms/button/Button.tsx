import type { ComponentProps } from "react";

import styles from "./styles.module.css";
import clsx from "clsx";

type CustomBtnProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "danger";
};

export const Button = ({
  variant = "primary",
  className,
  disabled,
  ...rest
}: CustomBtnProps) => {

  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        disabled && styles.disabled,
        className
      )}
      disabled={disabled}
      {...rest}
    />
  );
};
