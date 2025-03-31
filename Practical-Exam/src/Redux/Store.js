import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";;
import roomReducer from "./Reducer";

const store = configureStore({
  reducer: roomReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});

export default store;
