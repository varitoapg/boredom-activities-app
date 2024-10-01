import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { describe, it, expect } from "vitest";
import styles from "./Header.module.css";

describe("Header component", () => {
  it("should render the header element", () => {
    render(<Header />);

    const headerElement = screen.getByRole("banner");

    expect(headerElement).toBeInTheDocument();
  });

  it("should render the logo image", () => {
    render(<Header />);

    const logoImage = screen.getByAltText("Logo");

    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "/boored.webp");
  });

  it("should apply the correct class to the header", () => {
    render(<Header />);

    const headerElement = screen.getByRole("banner");
    expect(headerElement).toHaveClass(styles.header);
  });
});
