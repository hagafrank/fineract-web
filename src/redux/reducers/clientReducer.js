import { LOAD_CLIENTS } from "../actions/clientActions";

export default function clientReducer(state = {}, action) {
  if (action.type === LOAD_CLIENTS) {
    return { ...state, ...{ clients: action.clients } };
  } else {
    return state;
  }
}
