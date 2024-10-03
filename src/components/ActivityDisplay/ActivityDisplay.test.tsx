import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ActivityDisplay from "./ActivityDisplay";
import { activityMocked } from "../../utils/testUtils/mocks";

describe("ActivityDisplay", () => {
  it("renders the activity title", () => {
    render(<ActivityDisplay activity={activityMocked} />);
    expect(screen.getByText("Activity:")).toBeInTheDocument();
  });

  it("renders the activity description when activity is provided", () => {
    render(<ActivityDisplay activity={activityMocked} />);
    expect(screen.getByText("Test Activity")).toBeInTheDocument();
  });

  it("renders nothing when activity is null", () => {
    render(<ActivityDisplay activity={null} />);
    expect(screen.queryByText("Test Activity")).not.toBeInTheDocument();
  });
});
