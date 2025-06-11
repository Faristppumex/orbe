import { configureStore } from "@reduxjs/toolkit";
import financialsReducer from "./slices/financialSlice";
import companyReducer from "./slices/companyProfileSlice";
import newsReducer from "./slices/newsSlice";
import companyProfileReducer from "./slices/companyProfileSlice";
import historicalReducer from "./slices/historicalSlice"; // <-- Add this line
import valuationRatioReducer from "./slices/valuationRatioSlice";
import { useDispatch } from "react-redux";
// import type { AppDispatch } from "./store";

export const store = configureStore({
  reducer: {
    financials: financialsReducer,
    company: companyReducer,
    news: newsReducer,
    companyProfile: companyProfileReducer,
    historical: historicalReducer, // <-- Add this line
    valuationRatios: valuationRatioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
