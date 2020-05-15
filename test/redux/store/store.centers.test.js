import { createStore } from "redux";
import rootReducer from "../../../src/redux/reducers";
import { centers } from "../../mock_data/centers/centers";
import * as actions from "../../../src/redux/actions/centerActions";

test("that store handles loading centers", () => {
  //arrange
  const store = createStore(rootReducer, {});
  //act
  const action = actions.loadCentersSuccess(centers);
  store.dispatch(action);
  //assert
  const loadedCenters = store.getState().centers;
  expect(loadedCenters.centers).toEqual(centers);
});
