import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import useActivity from "../../hooks/useActivity/useActivity";
import { vi, Mock } from "vitest";
import { Activity } from "../../types";
import { MemoryRouter } from "react-router-dom";
import { activityMocked } from "../../utils/testUtils/mocks";
import { I18nProvider } from "../../i18n/i18n-context";

interface UseActivityReturn {
  activity: Activity | null;
  error: string | null;
  loading: boolean;
  fetchActivity: () => Promise<void>;
}

vi.mock("../../hooks/useActivity/useActivity");

vi.mock("react-i18next", async () => {
  const original = await vi.importActual("react-i18next");
  return {
    ...original,
    useTranslation: () => ({
      t: (key: string) => key,
    }),
  };
});

describe("App Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders Header component", () => {
    (useActivity as Mock).mockReturnValue({
      activity: null,
      error: null,
      loading: false,
      fetchActivity: vi.fn(),
    } as UseActivityReturn);

    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders ActivityGenerator and ActivityDisplay components", () => {
    (useActivity as Mock).mockReturnValue({
      activity: null,
      error: null,
      loading: false,
      fetchActivity: vi.fn(),
    } as UseActivityReturn);

    render(
      <MemoryRouter initialEntries={["/"]}>
        <I18nProvider language="en">
          <App />
        </I18nProvider>
      </MemoryRouter>,
    );
    expect(screen.getByText(/moreActivity/i)).toBeInTheDocument();
    expect(screen.getByText("activity")).toBeInTheDocument();
  });

  it("displays loading state in ActivityGenerator", () => {
    (useActivity as Mock).mockReturnValue({
      activity: null,
      error: null,
      loading: true,
      fetchActivity: vi.fn(),
    } as UseActivityReturn);

    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("displays error message in ActivityGenerator", () => {
    (useActivity as Mock).mockReturnValue({
      activity: null,
      error: "Error fetching activity",
      loading: false,
      fetchActivity: vi.fn(),
    } as UseActivityReturn);

    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText(/error fetching activity/i)).toBeInTheDocument();
  });

  it("displays activity in ActivityDisplay when available", () => {
    (useActivity as Mock).mockReturnValue({
      activity: activityMocked,
      error: null,
      loading: false,
      fetchActivity: vi.fn(),
    });

    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText(/test activity/i)).toBeInTheDocument();
  });

  it("calls fetchActivity when the button is clicked", () => {
    const fetchActivityMock = vi.fn();

    (useActivity as Mock).mockReturnValue({
      activity: null,
      error: null,
      loading: false,
      fetchActivity: fetchActivityMock,
    } as UseActivityReturn);

    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    const button = screen.getByText(/generate/i);
    fireEvent.click(button);

    expect(fetchActivityMock).toHaveBeenCalledTimes(1);
  });
});
