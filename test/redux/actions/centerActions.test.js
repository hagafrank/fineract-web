import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { getCenters } from "../../../src/api/centerApi";
import { centers } from "../../mock_data/centers/centers";
import * as actions from "../../../src/redux/actions/centerActions";
jest.mock("../../../src/api/centerApi");
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  describe("Load centers thunk", () => {
    test("that LOAD_CENTERS action is created when loading centers", () => {
      getCenters.mockImplementationOnce(() =>
        Promise.resolve({ data: centers })
      );

      const expectedActions = [{ type: actions.LOAD_CENTERS, centers }];
      const store = mockStore({ centers: [] });
      return store.dispatch(actions.loadCenters()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("loadCentersSuccess", () => {
  test("create LOAD_CENTERS action ", () => {
    //arrange
    const expectedAction = {
      type: actions.LOAD_CENTERS,
      centers
    };
    //act
    const action = actions.loadCentersSuccess(centers);
    //assert
    expect(action).toEqual(expectedAction);
  });
});
