import { renderHook, waitFor } from "@testing-library/react";
import { useSearchParams } from "react-router-dom";
import useActivities from "../useActivities/useActivities";
import useActivity from "./useActivity";
import { DEFAULT_TYPE } from "../../constants/default_values";
import { vi, Mock } from "vitest";
import { activityMocked, newActivityMocked } from "../../utils/testUtils/mocks";

vi.mock("react-router-dom", () => ({
  useSearchParams: vi.fn(),
}));

vi.mock("../useActivities/useActivities", () => ({
  default: vi.fn(),
}));

describe("useActivity", () => {
  const mockGetActivities = vi.fn();
  const mockUseSearchParams = useSearchParams as Mock;

  beforeEach(() => {
    mockUseSearchParams.mockReturnValue([
      { get: vi.fn().mockReturnValue(DEFAULT_TYPE) },
    ]);
    (useActivities as Mock).mockReturnValue({
      getActivities: mockGetActivities,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should fetch activity on mount", async () => {
    const activity = activityMocked;
    mockGetActivities.mockResolvedValueOnce(activity);

    const { result } = renderHook(() => useActivity());

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.activity).toEqual(activity);
      expect(result.current.error).toBe(null);
      expect(result.current.loading).toBe(false);
    });
  });

  it("should handle fetch error", async () => {
    mockGetActivities.mockRejectedValueOnce(new Error("Failed to fetch"));

    const { result } = renderHook(() => useActivity());

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.activity).toBe(null);
      expect(result.current.error).toBe(
        "Failed to fetch activities. Please try again.",
      );
      expect(result.current.loading).toBe(false);
    });
  });

  it("should refetch activity when fetchActivity is called", async () => {
    const activity = activityMocked;
    mockGetActivities.mockResolvedValueOnce(activity);

    const { result } = renderHook(() => useActivity());
    await waitFor(() => {
      expect(result.current.activity).toEqual(activity);
    });

    const newActivity = newActivityMocked;
    mockGetActivities.mockResolvedValueOnce(newActivity);

    await waitFor(async () => {
      await result.current.fetchActivity();
    });

    expect(result.current.activity).toEqual(newActivity);
  });
});
