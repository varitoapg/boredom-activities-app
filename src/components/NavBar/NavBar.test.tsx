import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { activitiesTypes } from "../../types";
import NavBar from "./NavBar";
import { TYPE_DICTIONARY } from "../../constants/typeDictionary";

describe("NavBar Component", () => {
  const renderNavBar = () =>
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );

  it("should render all buttons", () => {
    renderNavBar();

    activitiesTypes.forEach((type) => {
      expect(screen.getByText(TYPE_DICTIONARY[type])).toBeInTheDocument();
    });
  });

  it("should set the correct search param when a button is clicked", () => {
    renderNavBar();
    const button = screen.getByText(TYPE_DICTIONARY["education"]);
    fireEvent.click(button);

    expect(window.location.search).toBe("?type=education");
  });

  it("should apply the active variant to the active button", () => {
    renderNavBar();
    const button = screen.getByText(TYPE_DICTIONARY["education"]);
    fireEvent.click(button);

    expect(button.className).toMatch("active");
  });
});
