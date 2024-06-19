import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import io from "socket.io-client";

export const connectSocket = createAsyncThunk(
  "connect/socket",
  async function () {
    const socketIo = io("http://localhost:4000"); //connect to the websocket server
    const res = socketIo;
    return res;
  }
);

const initialState = {
  socket: null,
  isLoading: false,
  status: "",
  error: "",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(connectSocket.pending, (state, action) => {
        state.isLoading = true;
        state.status = "loading";
      })
      .addCase(connectSocket.fulfilled, (state, action) => {
        state.socket = action.payload;

        state.status = "success";
        state.isLoading = false;
      })
      .addCase(connectSocket.rejected, (state, action) => {
        state.error = "There was an error connecting to the socket";
        state.status = "error";
        state.isLoading = false;
      });
  },
});

export const { setIsLoading } = messageSlice.actions;

export default messageSlice.reducer;
