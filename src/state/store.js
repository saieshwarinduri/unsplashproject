import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/exportreducer";

export const store = createStore(reducers, {}, applyMiddleware(thunk));
