import { LOAD_GROUPS } from "../actions/groupActions";

export default function groupReducer(state = {}, action) {
  if (action.type === LOAD_GROUPS) {
    return { ...state, ...{ groups: action.groups } };
  } else {
    return state;
  }
}
