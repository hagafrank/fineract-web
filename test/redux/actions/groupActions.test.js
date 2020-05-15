import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { getGroups } from "../../../src/api/groupApi";
import { groups } from "../../mock_data/groups/groups";
import * as actions from "../../../src/redux/actions/groupActions";
jest.mock("../../../src/api/groupApi");
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  describe("Load groups thunk", () => {
    test("that LOAD_GROUPS action is created when loading groups", () => {
      getGroups.mockImplementationOnce(() => Promise.resolve({ data: groups }));

      const expectedActions = [{ type: actions.LOAD_GROUPS, groups }];
      const store = mockStore({ groups: [] });
      return store.dispatch(actions.loadGroups()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("loadGroupsSuccess", () => {
  test("create LOAD_GROUPS action", () => {
    //arrange
    const expectedAction = {
      type: actions.LOAD_GROUPS,
      groups
    };
    //act
    const action = actions.loadGroupsSuccess(groups);
    //assert
    expect(action).toEqual(expectedAction);
  });
});
