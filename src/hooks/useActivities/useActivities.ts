import { useCallback, useMemo } from "react";
import ActivitiesFetchClient from "../../client/ActivitiesFetchClient";
import { DEFAULT_TYPE } from "../../constants/default_values";

const useActivities = () => {
  const activitiesClient = useMemo(
    () => new ActivitiesFetchClient(import.meta.env.VITE_API_URL),
    [],
  );
  const getActivities = useCallback(
    async (type?: string) => {
      const newActivity = await activitiesClient.getRandomActivityByType(
        type ?? DEFAULT_TYPE,
      );

      return newActivity;
    },
    [activitiesClient],
  );

  return { getActivities };
};

export default useActivities;
