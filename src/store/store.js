import { configureStore } from "@reduxjs/toolkit";
import planReducer from "./plannerSlice";

const store = configureStore({
  reducer: {
    plan: planReducer,
  },
});

export default store;
