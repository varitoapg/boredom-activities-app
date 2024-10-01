import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/boored.webp" alt="Logo" className="logo" />
    </header>
  );
};

export default Header;
