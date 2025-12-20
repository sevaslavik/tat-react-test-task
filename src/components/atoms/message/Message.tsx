import styles from "./styles.module.css";

type Props = {
  message?: string;
};

export const Message = ({
  message = "За вашим запитом турів не знайдено",
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{message}</p>
    </div>
  );
};
