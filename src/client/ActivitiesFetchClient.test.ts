import { describe, it, expect, vi } from "vitest";
import ActivitiesFetchClient from "./ActivitiesFetchClient";
import { Activity } from "../types";

describe("ActivitiesFetchClient", () => {
  const baseURL = "https://example.com";
  const client = new ActivitiesFetchClient(baseURL);

  it("should fetch activities successfully", async () => {
    const mockActivity: Partial<Activity>[] = [
      {
        activity: "Activity 1",
        type: "recreational",
      },
    ];

    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockActivity,
    });

    const activities = await client.getRandomActivityByType("recreational");
    expect(activities).toEqual(mockActivity[0]);
    expect(globalThis.fetch).toHaveBeenCalledWith(
      `${baseURL}/filter?type=recreational`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });

  it("should throw an error when the fetch fails", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
    });

    await expect(
      client.getRandomActivityByType("recreational"),
    ).rejects.toThrow("Error fetching activities: Internal Server Error");
    expect(globalThis.fetch).toHaveBeenCalledWith(
      `${baseURL}/filter?type=recreational`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
});
