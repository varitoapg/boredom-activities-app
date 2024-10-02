import { Activity } from "../types";

class ActivitiesFetchClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async getRandomActivityByType(type: string): Promise<Activity> {
    const requestUrl = new URL(`/filter?type=${type}`, this.baseURL);

    const response = await fetch(requestUrl.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching activities: ${response.statusText}`);
    }

    const activities: Activity[] = await response.json();
    const randomIndex = Math.floor(Math.random() * activities.length);

    return activities[randomIndex];
  }
}

export default ActivitiesFetchClient;
