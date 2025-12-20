import styles from "./styles.module.css";

type Props = {
  message: string;
};

export const ErrorMessage = ({ message }: Props) => {
  return (
    <div className={styles.wrapper} role="alert">
      <p className={styles.text}>{message}</p>
    </div>
  );
};
