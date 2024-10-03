import { Activity } from "../../types";
import Loader from "../Loader/Loader";
import "./ActivityDisplay.css";

type ActivityDisplayProps = { activity: Activity | null; loading: boolean };

const ActivityDisplay = ({ activity, loading }: ActivityDisplayProps) => {
  return (
    <div className="activity-display-content">
      <h2 className="activity-display-content__title">Activity:</h2>
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
