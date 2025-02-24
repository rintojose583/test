import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import postsReducer from "./features/postsSlice";
import usersReducer from "./features/usersSlice";
import todoReducer from "./features/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
    todo: todoReducer,
  },
});
