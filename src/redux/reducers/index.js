import { combineReducers } from "redux";
import groupReducer from "./groupReducer";
import centerReducer from "./centerReducer";
import clientReducer from "./clientReducer";

const rootReducer = combineReducers({
  groups: groupReducer,
  centers: centerReducer,
  clients: clientReducer
});

export default rootReducer;
