
import styles from "./searchInput.module.css"

export const SearchInput = () => {
  return (
    <div className={styles.inputContainer}>
      <input placeholder="Search..." type="text" />
    </div>
  );
};
