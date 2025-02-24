import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// First API to fetch posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  return res.data;
});

// Second API to be called when 401 is encountered (example)
export const fetchAlternativeData = createAsyncThunk(
  "posts/fetchAlternativeData",
  async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/alternative`);
    return res.data;
  }
);

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    sortIdBasis: (state, action) => {
      if (action.payload === "asc") {
        let sortedValue = state.data.sort((a, b) => a.id - b.id);
        state.data = sortedValue;
      }
      if (action.payload === "desc") {
        let sortedValue = state.data.sort((a, b) => b.id - a.id);
        state.data = sortedValue;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.data = [];
        state.isError = true;
        if (action.error.response) {
          const statusCode = action.error.response.status;
          if (statusCode === 404) {
            state.errorMessage = "Posts not found!";
          } else if (statusCode === 500) {
            state.errorMessage = "Server error. Please try again later.";
          } else if (statusCode === 401) {
            state.errorMessage = "Unauthorized access. Trying to fetch alternative data.";
            // Dispatching the second API call if the status code is 401
            fetchAlternativeData();  // This triggers another API request
          } else {
            state.errorMessage = `An error occurred: ${statusCode}`;
          }
        } else {
          state.errorMessage = "Network error. Please check your connection.";
        }
      })
      .addCase(fetchAlternativeData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAlternativeData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;  // Update with alternative data
      })
      .addCase(fetchAlternativeData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = "Failed to fetch alternative data.";
      });
  },
});

export const { sortIdBasis } = postsSlice.actions;

export default postsSlice.reducer;
