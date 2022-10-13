import { createStore, combineReducers } from "redux";
import Reducers from "./Reducers";

const store = createStore(
  combineReducers({
    reducerVal: Reducers
  })
);

export { store };
