import { detectLanguage } from "../../i18n/server";
import LangSelect from "../LangSelect/LangSelect";
import styles from "./Header.module.css";

const Header = () => {
  const lng = detectLanguage();

  return (
    <header className={styles.header}>
      <img src="/boored.webp" alt="Logo" className="logo" />
      <LangSelect currentLanguage={lng} />
    </header>
  );
};

export default Header;
