import { createStore, applyMiddleware } from "redux";
import rootReducers from "./rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
