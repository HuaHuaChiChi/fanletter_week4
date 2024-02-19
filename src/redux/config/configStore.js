import { combineReducers, configureStore } from "@reduxjs/toolkit";
import jsonSetReducer from "../modules/jsonSet";
import userSlice from "../modules/userSlice";

const rootReducer = combineReducers({
  jsonSet: jsonSetReducer,
  user: userSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
