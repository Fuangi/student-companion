import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// My functions that will be passed into the plan slice or initial state

// initial state of the plan slice
const initialState = {
  isLoading: false,
  date: new Date(),
  plans: [],
  sortedPlans: [],
};

console.log(initialState.plans);

// creating the plan slice and its reducers
const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {},
});

export const {} = planSlice.actions;

export default planSlice.reducer;
