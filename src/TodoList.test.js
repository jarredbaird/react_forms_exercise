import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

test("TodoList renders", () => {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("creates a new box", () => {
  const { queryByTestId, queryByText } = render(<TodoList />);

  // no todoes should be here yet
  expect(queryByTestId("todo")).not.toBeInTheDocument();

  const colorInput = queryByTestId("color");
  const widthInput = queryByTestId("width");
  const heightInput = queryByTestId("height");
  const submitButton = queryByText("Add the best todo ever!");

  fireEvent.change(colorInput, { target: { value: "blue" } });
  fireEvent.change(widthInput, { target: { value: "50" } });
  fireEvent.change(heightInput, { target: { value: "60" } });
  fireEvent.click(submitButton);

  // todo created?!
  expect(queryByTestId("todo")).toBeInTheDocument();
});

it("removes a single todo", () => {
  const { queryByTestId, queryByText } = render(<TodoList />);

  // no todoes should be here yet
  expect(queryByTestId("todo")).not.toBeInTheDocument();

  const todoInport = queryByTestId("todo");
  const submitButton = queryByText("Add the best todo ever!");

  fireEvent.change(todoInput, { target: { value: "go potty" } });
  fireEvent.click(submitButton);

  // todo created?!
  expect(queryByTestId("todo")).toBeInTheDocument();

  const removeBtn = queryByText("x");
  fireEvent.click(removeBtn);
  expect(queryByTestId("todo")).not.toBeInTheDocument();
});
