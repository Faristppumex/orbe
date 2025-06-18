import { configureStore } from "@reduxjs/toolkit";
import financialsReducer from "./slices/financialSlice";
import companyReducer from "./slices/companyProfileSlice";
import newsReducer from "./slices/newsSlice";
import companyProfileReducer from "./slices/companyProfileSlice";
import historicalReducer from "./slices/historicalSlice"; // <-- Add this line
import valuationRatioReducer from "./slices/valuationRatioSlice";
import pressReleaseReducer from "./slices/pressReleaseSlice"; // <-- Add this line
import sharedIndexReducer from "./slices/sharedIndexSlice";
import { useDispatch } from "react-redux";
import companyOverviewPointsReducer from "./slices/companyOverviewPointsSlice"; // <-- Add this line
import summaryReducer from "./slices/SummarySlice";

export const store = configureStore({
  reducer: {
    financials: financialsReducer,
    company: companyReducer,
    news: newsReducer,
    companyProfile: companyProfileReducer,
    historical: historicalReducer, // <-- Add this line
    valuationRatios: valuationRatioReducer,
    pressRelease: pressReleaseReducer, // <-- Add this line
    sharedIndex: sharedIndexReducer,
    companyOverviewPoints: companyOverviewPointsReducer, // <-- Add this line
    summary: summaryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
