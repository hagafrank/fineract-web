import React from "react";
import { centers } from "../../mock_data/centers/centers";
import CenterList from "../../../src/components/centers/CenterList";
import createComponentWithIntl from "../../helpers/jest-snapshot/createComponentWithIntl";

test("centers list should be rendered", () => {
  const component = createComponentWithIntl(<CenterList centers={centers} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
