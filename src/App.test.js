import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App Renders", () => {
  render(<App />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
