import styles from "./styles.module.css";

export const Spinner = () => {
  return (
    <div className={styles.wrapper} aria-label="Loading">
      <span className={styles.spinner} />
    </div>
  );
};
