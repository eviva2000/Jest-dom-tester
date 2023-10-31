// This is functioning test, we wont test any component
import { screen, render } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../Options";
test("update scoops subtotal when scoops change", async () => {
  const user = userEvent.setup();
  render(<Options optionType="scoops" />);

  // make sure scoops start out from 0.00
  // we are using partial match for 'getByText' method
  const scoopsSubtotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopsSubtotal).toHaveTextContent("0.00");

  // update vanilla scoops to 1 and check subtotal
  const vanilaInput = await screen.findByRole("spinbutton", { name: "Vanila" });

  await user.clear(vanilaInput);
  await user.type(vanilaInput, "1");
  expect(scoopsSubtotal).toHaveTextContent("2.00");

  // update chocklate scoops to 2 and check subtotal
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  await user.clear(chocolateInput);
  await user.type(chocolateInput, "2");
  expect(scoopsSubtotal).toHaveTextContent("6.00");
});

test("update toppings subtotal when toppings change", async () => {
  const user = userEvent.setup();
  render(<Options optionType="toppings" />);

  //make sure that toppings subtotal starts from 0.00
  const toppingSubtotal = screen.getByText("Toppings total: $", {
    exact: false,
  });
  expect(toppingSubtotal).toHaveTextContent("0.00");

  // update Cheries topping to be checked
  const cherryInput = await screen.findByRole("checkbox", {
    name: "Cherries",
  });
  expect(cherryInput).not.toBeChecked();

  await user.click(cherryInput);
  expect(cherryInput).toBeChecked();
  expect(toppingSubtotal).toHaveTextContent("1.50");

  // update M&Ms topping to be checked
  const MInput = await screen.findByRole("checkbox", {
    name: "M&Ms",
  });
  expect(MInput).not.toBeChecked();

  await user.click(MInput);
  expect(MInput).toBeChecked();
  expect(toppingSubtotal).toHaveTextContent("3.00");

  // update M&Ms topping to be unchecked
  await user.click(MInput);
  expect(MInput).not.toBeChecked();
  expect(toppingSubtotal).toHaveTextContent("1.50");
});
