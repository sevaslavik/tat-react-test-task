import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  noPadding?: boolean;
}

export const Container = ({
  children,
  className,
  size = "lg",
  noPadding = false,
}: ContainerProps) => {
  return (
    <div
      className={clsx(
        styles.container,
        styles[size],
        noPadding && styles.noPadding,
        className
      )}
    >
      {children}
    </div>
  );
};
