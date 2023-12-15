import RocketLogo from "../assets/rocket.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img src={RocketLogo} alt="Logotipo" />
        <div className={styles.content}>
          <span>to</span>
          <span>do</span>
        </div>
      </div>
    </header>
  );
}
