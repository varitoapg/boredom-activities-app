import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { describe, it, expect } from "vitest";
import styles from "./Header.module.css";
import { I18nProvider } from "../../i18n/i18n-context";
import { BrowserRouter } from "react-router-dom";

vi.mock("react-i18next", async () => {
  const original = await vi.importActual("react-i18next");
  return {
    ...original,
    useTranslation: () => ({
      t: (key: string) => key,
    }),
  };
});

describe("Header component", () => {
  const renderHeader = () => {
    render(
      <BrowserRouter>
        <I18nProvider language="en">
          <Header />
        </I18nProvider>
      </BrowserRouter>,
    );
  };

  it("should render the header element", () => {
    renderHeader();

    const headerElement = screen.getByRole("banner");

    expect(headerElement).toBeInTheDocument();
  });

  it("should render the logo image", () => {
    renderHeader();

    const logoImage = screen.getByAltText("Logo");

    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "/boored.webp");
  });

  it("should apply the correct class to the header", () => {
    renderHeader();

    const headerElement = screen.getByRole("banner");
    expect(headerElement).toHaveClass(styles.header);
  });
});
