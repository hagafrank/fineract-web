import React from "react";
import { centers } from "../../mock_data/centers/centers";
import CenterList from "../../../src/components/centers/CenterList";
import {
  cleanup,
  render
} from "../../helpers/react-testing-library/test-utils";

afterEach(cleanup);

function renderCenterList(args) {
  let defaultProps = {
    centers: []
  };

  const props = { ...defaultProps, ...args };
  return render(<CenterList {...props} />);
}

test("that center list has Account # header", () => {
  const { getByText } = renderCenterList({ centers: centers });
  getByText("Account #");
});
