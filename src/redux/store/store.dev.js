import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import logger from "redux-logger"; // Logger with default options for debugging

export default function configureStore(initialState) {
  const middlewares = [thunk, logger];
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares, reduxImmutableStateInvariant())
    )
  );
}
