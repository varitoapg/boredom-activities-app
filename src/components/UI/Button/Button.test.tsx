import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  test("renders with default props", () => {
    const defaultButtonText = "Default Button";

    render(<Button>{defaultButtonText}</Button>);
    const buttonElement = screen.getByText(defaultButtonText);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.className).toMatch(/button/);
    expect(buttonElement.className).toMatch(/default/);
  });

  test("renders with active variant", () => {
    const activeButtonText = "Active Button";

    render(<Button variant="active">{activeButtonText}</Button>);
    const buttonElement = screen.getByText(activeButtonText);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.className).toMatch(/button/);
    expect(buttonElement.className).toMatch(/active/);
  });

  test("renders with dark variant", () => {
    const darkButtonText = "Dark Button";

    render(<Button variant="dark">{darkButtonText}</Button>);
    const buttonElement = screen.getByText(darkButtonText);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.className).toMatch(/button/);
    expect(buttonElement.className).toMatch(/dark/);
  });

  test("renders with rounded style", () => {
    const roundedButtonText = "Rounded Button";

    render(<Button isRounded>{roundedButtonText}</Button>);
    const buttonElement = screen.getByText(roundedButtonText);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.className).toMatch(/button/);
    expect(buttonElement.className).toMatch(/default/);
    expect(buttonElement.className).toMatch(/rounded/);
  });

  test("renders with additional className", () => {
    const extraClassButtonText = "Button with Extra Class";
    const extraClass = "extra-class";

    render(<Button className={extraClass}>{extraClassButtonText}</Button>);

    const buttonElement = screen.getByText(extraClassButtonText);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.className).toMatch(/button/);
    expect(buttonElement.className).toMatch(/default/);
    expect(buttonElement).toHaveClass(extraClass);
  });

  test("passes additional props to the button element", () => {
    const testId = "custom-button";

    render(<Button data-testid={testId}>Button with Props</Button>);

    const buttonElement = screen.getByTestId(testId);
    expect(buttonElement).toBeInTheDocument();
  });
});
