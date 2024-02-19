import jsonSetReducer from "../modules/jsonSet";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    jsonSet: jsonSetReducer,
  },
});

export default store;
