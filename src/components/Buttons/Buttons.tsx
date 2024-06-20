import styles from "./button.module.css";
import Image from "next/image";
import WriteIcon from "../../assets/writeIcon.svg";

export const WriteBtn = () => {
  return (
    <div className={styles.writeBtn}>
      <Image
        className={styles.writeIcon}
        src={WriteIcon}
        alt=""
        width={24}
        height={24}
      />
      <p>Write</p>
    </div>
  );
};
