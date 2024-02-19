import { createStore } from "redux";
import { combineReducers } from "redux";
import jsonSet from "../modules/jsonSet";

const rootReducer = combineReducers({
  jsonSet: jsonSet,
});
const store = createStore(rootReducer);

export default store;
