import { combineReducers } from "redux";
import { reducer2 } from "./index";

const reducers = combineReducers({
  arr: reducer2,
});

export default reducers;
