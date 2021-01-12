import { sessionData } from "../../mock_data/auth/sessionData";
import reducer from "../../../src/redux/reducers/authReducer";
import * as actions from "../../../src/redux/actions/authActions";

test("that session data is added to state when passed the LOAD_USER_SESSION action", () => {
  //arrange
  const initialState = {};
  const action = actions.loginUserSuccess(sessionData);
  //act
  const newState = reducer(initialState, action);
  //assert
  expect(newState.sessionData).toEqual(sessionData);
});
