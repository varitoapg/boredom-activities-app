import { Activity } from "../../types";
import "./ActivityDisplay.css";

type ActivityDisplayProps = { activity: Activity | null };

const ActivityDisplay = ({ activity }: ActivityDisplayProps) => {
  return (
    <div className="activity-display-content">
      <h2 className="activity-display-content__title">Activity:</h2>
      <p className="activity-display-content__description">
        {activity?.activity}
      </p>
    </div>
  );
};

export default ActivityDisplay;
