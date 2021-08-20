import React from "react";
import { render, fireEvent, queryByAttribute } from "@testing-library/react";
import BoxList from "./BoxList";

test("BoxList renders", () => {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("creates a new box", () => {
  const { queryByTestId, queryByText } = render(<BoxList />);

  // no boxes should be here yet
  expect(queryByTestId("box")).not.toBeInTheDocument();

  const colorInput = queryByTestId("color");
  const widthInput = queryByTestId("width");
  const heightInput = queryByTestId("height");
  const submitButton = queryByText("Add the best box ever!");

  fireEvent.change(colorInput, { target: { value: "blue" } });
  fireEvent.change(widthInput, { target: { value: "50" } });
  fireEvent.change(heightInput, { target: { value: "60" } });
  fireEvent.click(submitButton);

  // box created?!
  expect(queryByTestId("box")).toBeInTheDocument();
});

it("removes a single box", () => {
  const { queryByTestId, queryByText } = render(<BoxList />);

  // no boxes should be here yet
  expect(queryByTestId("box")).not.toBeInTheDocument();

  const colorInput = queryByTestId("color");
  const widthInput = queryByTestId("width");
  const heightInput = queryByTestId("height");
  const submitButton = queryByText("Add the best box ever!");

  fireEvent.change(colorInput, { target: { value: "blue" } });
  fireEvent.change(widthInput, { target: { value: "50" } });
  fireEvent.change(heightInput, { target: { value: "60" } });
  fireEvent.click(submitButton);

  // box created?!
  expect(queryByTestId("box")).toBeInTheDocument();

  const removeBtn = queryByText("X");
  fireEvent.click(removeBtn);
  expect(queryByTestId("box")).not.toBeInTheDocument();
});
