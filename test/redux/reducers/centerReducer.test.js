import { centers } from "../../mock_data/centers/centers";
import reducer from "../../../src/redux/reducers/centerReducer";
import * as actions from "../../../src/redux/actions/centerActions";

test("that center list is added to state when passed the LOAD_CENTERS action", () => {
  //arrange
  const initialState = {};
  const action = actions.loadCentersSuccess(centers);
  //act
  const newState = reducer(initialState, action);
  //assert
  expect(newState.centers).toEqual(centers);
});
