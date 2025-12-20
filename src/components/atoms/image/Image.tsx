import clsx from "clsx";
import styles from "./styles.module.css"

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const Image = ({ src, alt, className }: ImageProps) => (
  <img src={src} alt={alt} className={clsx(styles.img, className)} />
);
