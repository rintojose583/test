import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 12,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmt: (state, action) => {
      state.count += action.payload;
    },
    resetCount: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, incrementByAmt, resetCount } = counterSlice.actions;

export default counterSlice.reducer;
