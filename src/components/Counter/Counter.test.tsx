import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

test("should render correctly (initial state)", () => {
  render(<Counter />);

  const counterValueElement = screen.getByText("0");
  const decreaseButton = screen.getByRole("button", { name: "Diminuir" });
  const increaseButton = screen.getByRole("button", { name: "Aumentar" });

  expect(counterValueElement).toBeInTheDocument();
  expect(decreaseButton).toBeInTheDocument();
  expect(increaseButton).toBeInTheDocument();
});

test("should decrease the counter value when the button is pressed", () => {
  render(<Counter />);

  const counterValueElement = screen.getByText("0");
  const decreaseButton = screen.getByText("Diminuir");

  userEvent.dblClick(decreaseButton); // clique duplo

  expect(counterValueElement).toHaveTextContent("-2");
});

test("should increase the counter value when the button is pressed", () => {
  render(<Counter />);

  const counterValueElement = screen.getByText("0");
  const increaseButton = screen.getByText("Aumentar");

  userEvent.click(increaseButton); // único clique

  expect(counterValueElement).toHaveTextContent("1");
});
