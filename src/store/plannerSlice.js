import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPlans } from "../services/apiPlans";

// My functions that will be passed into the plan slice or initial state
export const getPlans = createAsyncThunk("plan/getAllPlans", async function () {
  const fetchedPlans = await getAllPlans();

  // return the an object with the data, the payload of the fulfilled state
  return { fetchedPlans };
});

// initial state of the plan slice
const initialState = {
  isLoading: false,
  date: new Date().toISOString(),
  plans: [],
  error: "",
};

// creating the plan slice and its reducers
const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setDate(state, action) {
      state.date = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setCurrentDate(state, action) {
      state.date = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlans.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPlans.fulfilled, (state, action) => {
        state.plans = action.payload.fetchedPlans;
        state.isLoading = false;
        console.log(state.date);
      })
      .addCase(getPlans.rejected, (state, action) => {
        state.error = "There was an error fetching the plans";
        state.isLoading = false;
      });
  },
});

export const { setDate, setIsLoading, setCurrentDate } = planSlice.actions;

export default planSlice.reducer;
