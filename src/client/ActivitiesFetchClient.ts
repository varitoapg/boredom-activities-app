import { Activity } from "../types";

class ActivitiesFetchClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async getActivities(type: string): Promise<Activity[]> {
    const requestUrl = new URL(`/filter?type=${type}`, this.baseURL);

    const response = await fetch(requestUrl.toString(), {
      method: "GET",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching activities: ${response}`);
    }

    const activities: Activity[] = await response.json();
    return activities;
  }
}

export default ActivitiesFetchClient;
