import { WriteBtn } from "../Buttons/Buttons";
import { SearchInput } from "../searchInput/SearchInput";
import styles from "./navbar.module.css";
import Image from "next/image";
import notificationIcon from "../../assets/notificationIcon.svg";
import profileIcon from "../../assets/profile.svg";
import searchIcon from "../../assets/searchIcon.svg";
import { ToggleBtn } from "../Buttons/ToggleBtn";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainers}>
        <div className={styles.logo}>BitWrite</div>
        <div className={styles.searchInput}>
          <SearchInput />
        </div>
      </div>
      <div className={styles.proContainer}>
        <div className={styles.WriteBtn}>
          <WriteBtn />
        </div>
        <div className={styles.toggleBtn}>
          <ToggleBtn />
        </div>
        <Image
          src={searchIcon}
          alt="search"
          width={24}
          height={24}
          className={styles.searchIcon}
        />
        <Image
          src={notificationIcon}
          alt="notification"
          width={24}
          height={24}
          className={styles.notificationIcon}
        />
        <Image
          src={profileIcon}
          alt="profile"
          width={32}
          height={32}
          className={styles.profile}
        />
      </div>
    </div>
  );
};
