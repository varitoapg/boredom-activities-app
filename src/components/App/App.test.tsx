import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  const textToFind = "Trova alguna cosa a fer";
  const activityText = "Text a friend you haven't talked to in a long time";

  it("renders App component", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText(textToFind)).toBeInTheDocument();
  });

  it("renders App component even if a searchParam is added", () => {
    render(
      <MemoryRouter initialEntries={["/?type=educational"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText(textToFind)).toBeInTheDocument();
  });

  it("renders the activity text", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText(activityText)).toBeInTheDocument();
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
