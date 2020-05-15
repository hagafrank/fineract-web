import { createStore } from "redux";
import rootReducer from "../../../src/redux/reducers";
import { groups } from "../../mock_data/groups/groups";
import * as actions from "../../../src/redux/actions/groupActions";

test("that store handles loading groups", () => {
  //arrange
  const store = createStore(rootReducer, {});
  //act
  const action = actions.loadGroupsSuccess(groups);
  store.dispatch(action);
  //assert
  const loadedGroups = store.getState().groups;
  expect(loadedGroups.groups).toEqual(groups);
});
