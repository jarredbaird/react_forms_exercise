import React from "react";
import { render } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

test("BoxList renders", () => {
  render(<NewTodoForm />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
