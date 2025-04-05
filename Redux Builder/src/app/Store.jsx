import { configureStore } from "@reduxjs/toolkit";
import  postsReducer  from "../features/posts/Postslice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
