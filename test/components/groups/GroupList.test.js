import React from "react";
import { groups } from "../../mock_data/groups/groups";
import GroupList from "../../../src/components/groups/GroupList";
import createComponentWithIntl from "../../helpers/jest-snapshot/createComponentWithIntl";

test("groups list should be rendered", () => {
  const component = createComponentWithIntl(<GroupList groups={groups} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
