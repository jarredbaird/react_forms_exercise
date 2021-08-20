import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

test("BoxList renders", () => {
  render(<Box />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});
