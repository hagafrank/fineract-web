import { createStore } from "redux";
import rootReducer from "../../../src/redux/reducers";
import { clients } from "../../mock_data/clients/clients";
import * as actions from "../../../src/redux/actions/clientActions";

test("that store handles loading clients", () => {
  //arrange
  const store = createStore(rootReducer, {});
  //act
  const action = actions.loadClientsSuccess(clients);
  store.dispatch(action);
  //assert
  const loadedClients = store.getState().clients;
  expect(loadedClients.clients).toEqual(clients);
});
