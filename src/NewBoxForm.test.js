import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

test("BoxList renders", () => {
  render(<NewBoxForm />);
});

// it("matches snapshot", function () {
//   const { asFragment } = render(<NewBoxForm />);
//   expect(asFragment()).toMatchSnapshot();
// });
