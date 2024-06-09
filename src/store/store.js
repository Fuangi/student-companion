import { configureStore } from "@reduxjs/toolkit";
import planReducer from "./plannerSlice";
import messageReducer from "./messageSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    plan: planReducer,
    message: messageReducer,
    user: userReducer,
  },
});

export default store;
