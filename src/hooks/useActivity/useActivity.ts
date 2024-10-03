import { useState, useEffect, useCallback } from "react";
import { Activity } from "../../types";
import useActivities from "../../hooks/useActivities/useActivities";
import { useSearchParams } from "react-router-dom";
import { DEFAULT_TYPE } from "../../constants/default_values";

const useActivity = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") ?? DEFAULT_TYPE;
  const [activity, setActivity] = useState<Activity | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { getActivities } = useActivities();

  const fetchActivity = useCallback(() => {
    setLoading(true);
    return getActivities(type)
      .then((activity) => {
        setActivity(activity);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching activities:", error);
        setError("Failed to fetch activities. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [getActivities, type]);

  useEffect(() => {
    fetchActivity();
  }, [fetchActivity]);

  return { activity, error, loading, fetchActivity };
};

export default useActivity;
