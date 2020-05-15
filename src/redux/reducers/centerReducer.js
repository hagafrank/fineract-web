import { LOAD_CENTERS } from "../actions/centerActions";

export default function centerReducer(state = {}, action) {
  if (action.type === LOAD_CENTERS) {
    return { ...state, ...{ centers: action.centers } };
  } else {
    return state;
  }
}
