import { renderHook } from "@testing-library/react";
import { vi } from "vitest";
import ActivitiesFetchClient from "../../client/ActivitiesFetchClient";
import useActivities from "./useActivities";

vi.mock("../../client/ActivitiesFetchClient");

describe("useActivities", () => {
  const mockGetActivities = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (ActivitiesFetchClient as any).mockImplementation(() => ({
      getRandomActivityByType: mockGetActivities,
    }));
  });

  it("should fetch activities with default type", async () => {
    const mockResponse = [{ id: 1, name: "Math" }];
    mockGetActivities.mockResolvedValueOnce(mockResponse);

    const { result } = renderHook(() => useActivities());

    const activities = await result.current.getActivities();

    expect(mockGetActivities).toHaveBeenCalledWith("education");
    expect(activities).toEqual(mockResponse);
  });

  it("should fetch activities with specific type", async () => {
    const mockResponse = [{ id: 2, name: "Science" }];
    mockGetActivities.mockResolvedValueOnce(mockResponse);

    const { result } = renderHook(() => useActivities());

    const activities = await result.current.getActivities("science");

    expect(mockGetActivities).toHaveBeenCalledWith("science");
    expect(activities).toEqual(mockResponse);
  });
});
