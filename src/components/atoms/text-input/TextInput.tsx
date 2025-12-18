import type { ComponentProps } from "react";
import styles from "./styles.module.css";

type InputProps = ComponentProps<"input">;

export const TextInput = ({ className, ...props }: InputProps) => {
  return <input className={`${styles.input}  ${className || ""}`} {...props} />;
};
