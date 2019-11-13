import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducers";

const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

export default rootReducers;
