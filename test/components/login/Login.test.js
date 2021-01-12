import React from "react";
import Login from "../../../src/components/login/Login";
import createComponentWithIntl from "../../helpers/jest-snapshot/createComponentWithIntl";

test("login form should be rendered", () => {
  const component = createComponentWithIntl(<Login />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
