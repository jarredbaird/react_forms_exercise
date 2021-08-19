import { render } from "@testing-library/react";
import BoxList from "./BoxList";

test("BoxList renders", () => {
  render(<BoxList />);
});

// it("matches snapshot", function () {
//   const { asFragment } = render(<BoxList />);
//   expect(asFragment()).toMatchSnapshot();
// });
