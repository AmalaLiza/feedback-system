import commentsReducer from "./reducers/comments-reducer";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    comments: commentsReducer,
  },
});
