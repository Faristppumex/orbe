import { configureStore } from "@reduxjs/toolkit";
import financialsReducer from "./slices/financialSlice";
import companyReducer from "./slices/companyProfileSlice";
import newsReducer from "./slices/newsSlice";
import companyProfileReducer from "./slices/companyProfileSlice";

export const store = configureStore({
  reducer: {
    financials: financialsReducer,
    company: companyReducer,
    news: newsReducer,
    companyProfile: companyProfileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
