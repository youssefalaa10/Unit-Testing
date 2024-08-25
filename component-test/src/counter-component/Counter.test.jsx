import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./Counter";


describe("Counter Component", () => {
  it("renders with initial count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByText("0");
    expect(countElement).toBeInTheDocument();
  });

  it("increments count by 1 when + button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("+");
    const countElement = screen.getByText("0");
    fireEvent.click(incrementButton);
    expect(countElement.textContent).toBe("1");
  });

  it("decrements count by 1 when - button is clicked", () => {
    render(<Counter />);
    const decrementButton = screen.getByText("-");
    const countElement = screen.getByText("0");
    fireEvent.click(decrementButton);
    expect(countElement.textContent).toBe("-1");
  });
});
