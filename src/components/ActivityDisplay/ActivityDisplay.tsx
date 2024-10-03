import { useTranslation } from "react-i18next";
import { Activity } from "../../types";
import Loader from "../Loader/Loader";
import "./ActivityDisplay.css";

type ActivityDisplayProps = { activity: Activity | null; loading: boolean };

const ActivityDisplay = ({ activity, loading }: ActivityDisplayProps) => {
  const { t } = useTranslation("translations");
  return (
    <div className="activity-display-content">
      <h2 className="activity-display-content__title">{t("activity")}</h2>
      {loading ? (
        <Loader />
      ) : (
        <p className="activity-display-content__description">
          {activity?.activity}
        </p>
      )}
    </div>
  );
};

export default ActivityDisplay;
