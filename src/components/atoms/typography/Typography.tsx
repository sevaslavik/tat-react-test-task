// components/atoms/Typography/Typography.tsx
import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type TypographyVariant = "h1" | "h2" | "h3" | "body" | "bodySm" | "caption";

interface TypographyProps {
  variant?: TypographyVariant;
  children: ReactNode;
  className?: string;
}

export const Typography = ({
  variant = "body",
  children,
  className,
}: TypographyProps) => {
  return <span className={clsx(styles[variant], className)}>{children}</span>;
};
