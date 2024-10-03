import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { activitiesTypes } from "../../types";
import NavBar from "./NavBar";
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

describe("NavBar Component", () => {
  const renderNavBar = () =>
    render(
      <BrowserRouter>
        <I18nProvider language="en">
          <NavBar />
        </I18nProvider>
      </BrowserRouter>,
    );

  it("should render all buttons", () => {
    renderNavBar();

    activitiesTypes.forEach((type) => {
      expect(screen.getByText(type)).toBeInTheDocument();
    });
  });

  it("should set the correct search param when a button is clicked", () => {
    renderNavBar();
    const button = screen.getByText(/education/i);
    fireEvent.click(button);

    expect(window.location.search).toBe("?type=education");
  });

  it("should apply the active variant to the active button", () => {
    renderNavBar();
    const button = screen.getByText(/education/i);
    fireEvent.click(button);

    expect(button.className).toMatch("active");
  });
});
