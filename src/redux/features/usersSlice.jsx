import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users.fetchUsers", async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  return res.data;
});

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    filterUsers: (state,action)=>{
        if(action.payload === "asc"){
            let filteredData = state.data.sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            state.data = filteredData
        }
        if(action.payload === "desc"){
            let filteredData = state.data.sort((a,b)=>b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
            state.data = filteredData
        }
        if(action.payload === "reset"){
            let filteredData = state.data.sort((a,b)=>a.id - b.id)
            state.data = filteredData
        }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.data = [];
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.data = [];
        state.isError = true;
      });
  },
});

export const {filterUsers} = usersSlice.actions;

export default usersSlice.reducer;
