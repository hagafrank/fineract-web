import { clients } from "../../mock_data/clients/clients";
import reducer from "../../../src/redux/reducers/clientReducer";
import * as actions from "../../../src/redux/actions/clientActions";

test("that client list is added to state when passed the LOAD_CLIENTS action", () => {
  //arrange
  const initialState = {};
  const action = actions.loadClientsSuccess(clients);
  //act
  const newState = reducer(initialState, action);
  //assert
  expect(newState.clients).toEqual(clients);
});
