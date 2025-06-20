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
  plans: [],
  error: "",
  status: "",
};

// creating the plan slice and its reducers
const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlans.pending, (state, action) => {
        state.isLoading = true;
        state.status = "loading";
      })
      .addCase(getPlans.fulfilled, (state, action) => {
        state.plans = action.payload.fetchedPlans;
        state.status = "success";
        state.isLoading = false;
      })
      .addCase(getPlans.rejected, (state, action) => {
        state.error = "There was an error fetching the plans";
        state.status = "error";
        state.isLoading = false;
      });
  },
});

export const { setIsLoading } = planSlice.actions;

export default planSlice.reducer;
