import { createStore } from "redux";
import rootReducer from "../../../src/redux/reducers";
import { sessionData } from "../../mock_data/auth/sessionData";
import * as actions from "../../../src/redux/actions/authActions";

test("that store handles logging in users", () => {
  //arrange
  const store = createStore(rootReducer, {});
  //act
  const action = actions.loginUserSuccess(sessionData);
  store.dispatch(action);
  //assert
  const currentUser = store.getState().currentUser;
  expect(currentUser.sessionData).toEqual(sessionData);
});
