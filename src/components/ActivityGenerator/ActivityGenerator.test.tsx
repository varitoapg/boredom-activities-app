import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ActivityGenerator from "./ActivityGenerator";
import { MemoryRouter } from "react-router-dom";

describe("ActivityGenerator", () => {
  it("renders the NavBar component", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <ActivityGenerator
          fetchActivity={vi.fn()}
          loading={false}
          error={null}
        />
      </MemoryRouter>,
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders the image with correct attributes", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <ActivityGenerator
          fetchActivity={vi.fn()}
          loading={false}
          error={null}
        />
      </MemoryRouter>,
    );
    const img = screen.getByAltText("mascot of boored");
    expect(img).toHaveAttribute("src", "/puppet.webp");
    expect(img).toHaveAttribute("width", "167px");
    expect(img).toHaveAttribute("height", "181px");
  });

  it("renders the title", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <ActivityGenerator
          fetchActivity={vi.fn()}
          loading={false}
          error={null}
        />
      </MemoryRouter>,
    );
    expect(screen.getByText("Trova alguna cosa a fer")).toBeInTheDocument();
  });

  it("renders all the nav buttons and generatewith correct text when not loading", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <ActivityGenerator
          fetchActivity={vi.fn()}
          loading={false}
          error={null}
        />
      </MemoryRouter>,
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(8);
    expect(buttons[7]).toHaveTextContent(/generate/i);
  });

  it("renders the button with correct text when loading", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <ActivityGenerator
          fetchActivity={vi.fn()}
          loading={true}
          error={null}
        />
      </MemoryRouter>,
    );
    const buttons = screen.getAllByRole("button");

    expect(buttons[7]).toHaveTextContent(/loading/i);
  });

  it("calls fetchActivity when button is clicked", () => {
    const fetchActivityMock = vi.fn();
    render(
      <MemoryRouter initialEntries={["/"]}>
        <ActivityGenerator
          fetchActivity={fetchActivityMock}
          loading={false}
          error={null}
        />
      </MemoryRouter>,
    );
    fireEvent.click(screen.getAllByRole("button")[7]);
    expect(fetchActivityMock).toHaveBeenCalledTimes(1);
  });

  it("renders the error message when error is present", () => {
    const errorMessage = "Something went wrong";
    render(
      <MemoryRouter initialEntries={["/"]}>
        <ActivityGenerator
          fetchActivity={vi.fn()}
          loading={false}
          error={errorMessage}
        />
      </MemoryRouter>,
    );
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
