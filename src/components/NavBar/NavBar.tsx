import { useSearchParams } from "react-router-dom";
import Button from "../UI/Button/Button";
import styles from "./NavBar.module.css";
import { activitiesTypes } from "../../types";
import { TYPE_DICTIONARY } from "../../constants/typeDictionary";

const NavBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeType = searchParams.get("type");

  const handleClick = (type: string) => {
    const newSearchParams = new URLSearchParams();
    newSearchParams.set("type", type);
    setSearchParams(newSearchParams);
  };

  return (
    <nav className={styles.navbar}>
      {activitiesTypes.map((type) => (
        <Button
          key={type}
          onClick={() => handleClick(type)}
          variant={activeType === type ? "active" : "default"}
          isRounded
          className="navbar-button"
        >
          {TYPE_DICTIONARY[type]}
        </Button>
      ))}
    </nav>
  );
};

export default NavBar;
