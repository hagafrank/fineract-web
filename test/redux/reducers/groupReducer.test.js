import { groups } from "../../mock_data/groups/groups";
import reducer from "../../../src/redux/reducers/groupReducer";
import * as actions from "../../../src/redux/actions/groupActions";

test("that group list is added to state when passed the LOAD_GROUPS action", () => {
  //arrange
  const initialState = {};
  const action = actions.loadGroupsSuccess(groups);
  //act
  const newState = reducer(initialState, action);
  //assert
  expect(newState.groups).toEqual(groups);
});
