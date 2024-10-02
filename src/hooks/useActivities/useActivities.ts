import { useCallback, useMemo } from "react";
import ActivitiesFetchClient from "../../client/ActivitiesFetchClient";

const useActivities = () => {
  const activitiesClient = useMemo(
    () => new ActivitiesFetchClient(import.meta.env.VITE_API_URL),
    [],
  );
  const getActivities = useCallback(
    async (type?: string) => {
      const newActivity = await activitiesClient.getActivities(
        type ?? "education",
      );

      return newActivity;
    },
    [activitiesClient],
  );

  return { getActivities };
};

export default useActivities;
