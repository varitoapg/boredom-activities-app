import { describe, it, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

vi.mock("../../hooks/useActivities/useActivities", () => {
  return {
    __esModule: true,
    default: () => ({
      getActivities: vi.fn(() =>
        Promise.resolve([{ activity: "Mocked activity" }]),
      ),
    }),
  };
});

describe("App", () => {
  const textToFind = "Trova alguna cosa a fer";
  const activityText = "Mocked activity";

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders App component", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText(textToFind)).toBeInTheDocument();
  });

  it("renders App component even if a searchParam is added", async () => {
    render(
      <MemoryRouter initialEntries={["/?type=educational"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText(textToFind)).toBeInTheDocument();
  });

  it("renders the activity text", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    // Use waitFor to wait for the mocked activity to appear
    await waitFor(() => {
      expect(screen.getByText(activityText)).toBeInTheDocument();
    });
  });

  it("renders the Generate button", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("button", { name: /Generate/i }),
    ).toBeInTheDocument();
  });

  it("renders the NavBar component", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders the Header component", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders the mascot image", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    const img = screen.getByAltText("mascot of boored");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/puppet.webp");
  });
});
