import Button from "../UI/Button/Button";
import NavBar from "../NavBar/NavBar";
import "./ActivityGenerator.css";
import { useTranslation } from "react-i18next";

type ActivityGeneratorProps = {
  fetchActivity: () => void;
  loading: boolean;
  error: string | null;
};
const ActivityGenerator = ({
  error,
  fetchActivity,
  loading,
}: ActivityGeneratorProps) => {
  const { t } = useTranslation("translations");
  return (
    <div className="activity-generator">
      <NavBar />
      <img
        src="/puppet.webp"
        alt="mascot of boored"
        width="167px"
        height="181px"
      />
      <div className="activity-generator__text-container">
        <h2 className="activity-generator__title">{t("moreActivity")}</h2>
        <Button
          variant="dark"
          onClick={fetchActivity}
          disabled={loading}
          className="activity-generator__button"
        >
          {loading ? `${t("loading")}...` : `${t("generate")}`}
        </Button>
        {error && <p className="activity-generator__error">{error}</p>}
      </div>
    </div>
  );
};

export default ActivityGenerator;
