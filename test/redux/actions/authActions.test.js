import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { authenticate } from "../../../src/api/authenticationApi";
import { sessionData } from "../../mock_data/auth/sessionData";
import * as actions from "../../../src/redux/actions/authActions";
jest.mock("../../../src/api/authenticationApi");
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  describe("Login user thunk", () => {
    test("that LOAD_USER_SESSION action is created when logging in the user", () => {
      authenticate.mockImplementationOnce(() =>
        Promise.resolve({ data: sessionData })
      );

      const expectedAction = [{ type: actions.LOAD_USER_SESSION, sessionData }];
      const store = mockStore({ sessionData: {} });
      return store.dispatch(actions.authenticateUser({})).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });
});

describe("loginSuccess", () => {
  test("create LOAD_USER_SESSION action ", () => {
    //arrange
    const expectedAction = {
      type: actions.LOAD_USER_SESSION,
      sessionData
    };
    //act
    const action = actions.loginUserSuccess(sessionData);
    //assert
    expect(action).toEqual(expectedAction);
  });
});
