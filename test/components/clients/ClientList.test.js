import React from "react";
import { clients } from "../../mock_data/clients/clients";
import ClientList from "../../../src/components/clients/ClientList";
import createComponentWithIntl from "../../helpers/jest-snapshot/createComponentWithIntl";

test("clients list should be rendered", () => {
  const component = createComponentWithIntl(<ClientList clients={clients} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
