import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ActivityDisplay from "./ActivityDisplay";
import { activityMocked } from "../../utils/testUtils/mocks";
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

describe("ActivityDisplay", () => {
  it("renders the activity title", () => {
    render(
      <I18nProvider language="en">
        <ActivityDisplay activity={activityMocked} loading={false} />
      </I18nProvider>,
    );
    expect(screen.getByText("activity")).toBeInTheDocument();
  });

  it("renders the activity description when activity is provided", () => {
    render(
      <I18nProvider language="en">
        <ActivityDisplay activity={activityMocked} loading={false} />
      </I18nProvider>,
    );
    expect(screen.getByText("Test Activity")).toBeInTheDocument();
  });

  it("renders nothing when activity is null", () => {
    render(
      <I18nProvider language="en">
        <ActivityDisplay activity={null} loading={false} />
      </I18nProvider>,
    );
    expect(screen.queryByText("Test Activity")).not.toBeInTheDocument();
  });

  it("renders nothing when loading is true", () => {
    render(
      <I18nProvider language="en">
        <ActivityDisplay activity={activityMocked} loading={true} />
      </I18nProvider>,
    );
    expect(screen.queryByText("Test Activity")).not.toBeInTheDocument();
  });
});
