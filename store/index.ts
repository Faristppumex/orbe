import { configureStore } from "@reduxjs/toolkit";
import financialsReducer from "./slices/financialSlice";
import companyReducer from "./slices/companySlice";
import newsReducer from "./slices/newsSlice";

export const store = configureStore({
  reducer: {
    financials: financialsReducer,
    company: companyReducer,
    news: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
