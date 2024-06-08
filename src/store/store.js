import { configureStore } from "@reduxjs/toolkit";
import planReducer from "./plannerSlice";
import messageReducer from "./messageSlice";

const store = configureStore({
  reducer: {
    plan: planReducer,
    message: messageReducer,
  },
});

export default store;
