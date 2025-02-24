import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodo = createAsyncThunk("todos.fetchTodo", async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
  return res.data;
});

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.data = [];
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.data = [];
        state.isError = true;
      });
  },
});

export const {} = todoSlice.actions;

export default todoSlice.reducer;
