import { render, screen, fireEvent } from "@testing-library/react";

import SummaryForm from "../SummaryForm";

test("initial condition", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button", { name: "Confirm order" });

  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test("checking checkbox will enable/disable button", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button", { name: "Confirm order" });

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});
