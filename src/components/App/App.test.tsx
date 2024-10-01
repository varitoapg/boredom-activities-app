import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  const helloWorldText = "Hello World!";

  it("renders App component", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText(helloWorldText)).toBeInTheDocument();
  });

  it("renders App component even if a searchParam is added", () => {
    render(
      <MemoryRouter initialEntries={["/?type=educational"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText(helloWorldText)).toBeInTheDocument();
  });
});
