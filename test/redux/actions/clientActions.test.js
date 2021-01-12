import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { getClients } from "../../../src/api/clientApi";
import { clients } from "../../mock_data/clients/clients";
import * as actions from "../../../src/redux/actions/clientActions";
jest.mock("../../../src/api/clientApi");
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  describe("Load clients thunk", () => {
    test("that LOAD_CLIENTS action is created when loading clients", () => {
      getClients.mockImplementationOnce(() =>
        Promise.resolve({ data: { pageItems: clients } })
      );

      const expectedActions = [{ type: actions.LOAD_CLIENTS, clients }];
      const store = mockStore({ clients: [] });
      return store.dispatch(actions.loadClients()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("loadClientsSuccess", () => {
  test("create LOAD_CLIENTS action", () => {
    //arrange
    const expectedAction = {
      type: actions.LOAD_CLIENTS,
      clients
    };
    //act
    const action = actions.loadClientsSuccess(clients);
    //assert
    expect(action).toEqual(expectedAction);
  });
});
