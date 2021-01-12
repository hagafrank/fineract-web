import { combineReducers } from "redux";
import groupReducer from "./groupReducer";
import centerReducer from "./centerReducer";
import clientReducer from "./clientReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  groups: groupReducer,
  centers: centerReducer,
  clients: clientReducer,
  currentUser: authReducer
});

export default rootReducer;
