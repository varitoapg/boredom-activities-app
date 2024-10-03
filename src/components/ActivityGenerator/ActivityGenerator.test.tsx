import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ActivityGenerator from "./ActivityGenerator";
import { MemoryRouter } from "react-router-dom";
import { I18nProvider } from "../../i18n/i18n-context";

vi.mock("react-i18next", async () => {
  const original = await vi.importActual("react-i18next");
  return {
    ...original,
    useTranslation: () => ({
      t: (key: string) => key,
    }),
  };
});

describe("ActivityGenerator", () => {
  it("renders the NavBar component", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <I18nProvider language="en">
          <ActivityGenerator
            fetchActivity={vi.fn()}
            loading={false}
            error={null}
          />
        </I18nProvider>
      </MemoryRouter>,
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders the image with correct attributes", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <I18nProvider language="en">
          <ActivityGenerator
            fetchActivity={vi.fn()}
            loading={false}
            error={null}
          />
        </I18nProvider>
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
        <I18nProvider language="en">
          <ActivityGenerator
            fetchActivity={vi.fn()}
            loading={false}
            error={null}
          />
        </I18nProvider>
      </MemoryRouter>,
    );
    expect(screen.getByText("moreActivity")).toBeInTheDocument();
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
