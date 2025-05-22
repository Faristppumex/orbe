import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import newsReducer from "./newsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    news: newsReducer,
  },
});

// Types for dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
