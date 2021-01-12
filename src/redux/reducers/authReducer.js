import { LOAD_USER_SESSION } from "../actions/authActions";

export default function authReducer(state = {}, actions) {
  if (actions.type === LOAD_USER_SESSION) {
    return { ...state, ...{ sessionData: actions.sessionData } };
  }
  return state;
}
